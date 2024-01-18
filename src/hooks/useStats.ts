import Stats from 'stats.js'

export function useStats(container: HTMLElement) {
  const stats = new Stats()
  container.append(stats.dom)

  return { stats }
}
