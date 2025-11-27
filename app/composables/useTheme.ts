export const useTheme = () => {
  const theme = useState<'dark' | 'light'>('theme', () => 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'

    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', theme.value)
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      document.documentElement.setAttribute('data-theme', theme.value)
    }
  }

  return {
    theme,
    toggleTheme,
    initTheme
  }
}
