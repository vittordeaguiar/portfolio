<template>
  <div>
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ResultsSection />
      <EducationSection />
      <ServicesSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useTheme();
const { setupScrollObserver } = useScrollAnimation();

onMounted(() => {
  initTheme();
  setupScrollObserver();
});
</script>
