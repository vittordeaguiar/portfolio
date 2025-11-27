export const useScrollAnimation = () => {
  const setupScrollObserver = () => {
    if (import.meta.client) {
      const sections = document.querySelectorAll('.section')
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)

      sections.forEach((section) => {
        observer.observe(section)
      })

      return () => {
        sections.forEach((section) => {
          observer.unobserve(section)
        })
      }
    }
  }

  return {
    setupScrollObserver
  }
}
