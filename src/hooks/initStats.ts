import Stats from 'stats.js'

export function initStats(container: HTMLElement) {
  const stats = new Stats()
  container.append(stats.dom)

  return { stats }
}
