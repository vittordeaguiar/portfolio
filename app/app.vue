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

  <SpeedInsights />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
const { initTheme } = useTheme();
const { setupScrollObserver } = useScrollAnimation();

onMounted(() => {
  initTheme();
  setupScrollObserver();
});
</script>
