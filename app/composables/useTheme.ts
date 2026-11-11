type Theme = 'dark' | 'light'

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'light')

  const apply = (value: Theme) => {
    theme.value = value
    document.documentElement.setAttribute('data-theme', value)
  }

  const initTheme = () => {
    const current = document.documentElement.getAttribute('data-theme')
    if (current === 'dark' || current === 'light') {
      theme.value = current
      return
    }
    apply(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }

  const toggleTheme = () => {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    apply(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // armazenamento indisponível: o tema vale só para esta visita
    }
  }

  return { theme, toggleTheme, initTheme }
}
