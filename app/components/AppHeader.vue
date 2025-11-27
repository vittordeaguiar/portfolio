<template>
  <header :class="['header', { 'header--scrolled': isScrolled }]" id="header">
    <div class="container header__container">
      <a href="#" class="header__logo">&lt;VA /&gt;</a>

      <button class="hamburger" @click="toggleMobileMenu" aria-label="Menu Mobile">
        <i class="fas fa-bars"></i>
      </button>

      <ul :class="['nav__list', { active: isMobileMenuOpen }]">
        <li>
          <a href="#about" class="nav__link" @click="closeMobileMenu"> <span>01.</span>Sobre </a>
        </li>
        <li>
          <a href="#skills" class="nav__link" @click="closeMobileMenu"> <span>02.</span>Competências </a>
        </li>
        <li>
          <a href="#experience" class="nav__link" @click="closeMobileMenu"> <span>03.</span>Experiência </a>
        </li>
        <li>
          <a href="#contact" class="nav__link" @click="closeMobileMenu"> <span>04.</span>Contato </a>
        </li>
        <!-- <li>
          <a href="#" class="btn btn--primary">Baixar CV</a>
        </li>  -->
        <li>
          <button class="theme-toggle" @click="handleToggleTheme" aria-label="Alternar Tema">
            <i :class="themeIcon"></i>
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const themeIcon = computed(() => {
  return theme.value === "light" ? "fas fa-moon" : "fas fa-sun";
});

const handleToggleTheme = () => {
  toggleTheme();
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  if (import.meta.client) {
    window.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener("scroll", handleScroll);
  }
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all var(--transition-normal);
  border-bottom: 1px solid transparent;
}

[data-theme="light"] .header {
  background-color: rgba(248, 250, 252, 0.85);
}

.header--scrolled {
  height: 70px;
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--color-border);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.header__logo {
  font-family: var(--font-mono);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-primary);
  z-index: 1002;
}

.nav__list {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  list-style: none;
}

.nav__link {
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--color-text-primary);
}

.nav__link span {
  color: var(--color-primary);
  margin-right: 4px;
}

.nav__link:hover {
  color: var(--color-primary);
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--color-text-primary);
  cursor: pointer;
  font-size: 1.2rem;
  transition: color var(--transition-fast);
  margin-left: var(--spacing-sm);
}

.theme-toggle:hover {
  color: var(--color-primary);
}

.hamburger {
  display: none;
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1002;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav__list {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 75vw;
    background-color: var(--color-surface);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform var(--transition-normal);
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
    z-index: 1001;
  }

  .nav__list.active {
    transform: translateX(0);
  }
}
</style>
