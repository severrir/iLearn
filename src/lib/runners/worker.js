// Shared plumbing for running learner code off the main thread.
// A worker means an endless loop costs a terminate(), not a frozen page.

export function spawn(source, { type = 'classic' } = {}) {
  const blob = new Blob([source], { type: 'text/javascript' })
  const url = URL.createObjectURL(blob)
  const worker = new Worker(url, type === 'module' ? { type: 'module' } : undefined)
  // Revoking immediately is safe: the worker already holds the script.
  URL.revokeObjectURL(url)
  return worker
}

/**
 * Talks to a worker that posts {type:'ready'} once, then {type:'result'}.
 * The run timeout only starts after 'ready', so a slow first download of a
 * language runtime is never mistaken for an endless loop.
 */
export function converse(worker, payload, { runMs = 6000, bootMs = 90000, onBoot } = {}) {
  return new Promise((resolve) => {
    let booted = false
    let settled = false
    let timer = null

    const finish = (result) => {
      if (settled) return
      settled = true
      clearTimeout(timer)
      worker.terminate()
      resolve(result)
    }

    timer = setTimeout(() => finish({ ok: false, output: '', error: 'BOOT_TIMEOUT' }), bootMs)

    worker.onmessage = (event) => {
      const msg = event.data || {}

      if (msg.type === 'ready') {
        booted = true
        clearTimeout(timer)
        onBoot?.()
        timer = setTimeout(() => finish({ ok: false, output: '', error: 'TIMEOUT' }), runMs)
        worker.postMessage(payload)
        return
      }

      if (msg.type === 'result') {
        finish({ ok: msg.ok, output: msg.output || '', error: msg.error || null })
      }
    }

    worker.onerror = (event) => {
      finish({
        ok: false,
        output: '',
        error: booted ? event.message || 'the runner crashed' : 'BOOT_FAILED',
      })
    }
  })
}
