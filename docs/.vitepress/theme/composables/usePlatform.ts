import { ref, watch } from 'vue'
import { platformIds } from '../../data/platforms'

const STORAGE_KEY = 'ultra-ui:platform'

/**
 * Module-level singleton so every <PlatformTabs> on the page — and the picker in
 * the nav bar — stay in lockstep: choose "Flutter" once and the whole document
 * follows.
 *
 * SSR note: the server always renders `platformIds[0]`. The stored preference is
 * applied from `hydrate()` inside onMounted, i.e. after Vue has finished
 * hydrating, so there is never a markup mismatch.
 */
const active = ref<string>(platformIds[0])
let hydrated = false

function readStored(): string | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value && platformIds.includes(value) ? value : null
  } catch {
    return null
  }
}

/** `?platform=flutter` wins over localStorage so links can deep-link a stack. */
function readQuery(): string | null {
  try {
    const value = new URLSearchParams(location.search).get('platform')
    return value && platformIds.includes(value) ? value : null
  } catch {
    return null
  }
}

export function hydratePlatform(): void {
  if (hydrated || typeof window === 'undefined') return
  hydrated = true

  const preferred = readQuery() ?? readStored()
  if (preferred) active.value = preferred

  watch(active, (value) => {
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      /* private browsing — preference is simply not persisted */
    }
  })

  // Keep tabs in sync across browser tabs.
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return
    if (event.newValue && platformIds.includes(event.newValue)) {
      active.value = event.newValue
    }
  })
}

export function usePlatform() {
  return {
    active,
    setPlatform(id: string) {
      if (platformIds.includes(id)) active.value = id
    }
  }
}
