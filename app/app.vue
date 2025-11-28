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
  <Analytics />
</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
import { Analytics } from '@vercel/analytics/nuxt'
const { initTheme } = useTheme();
const { setupScrollObserver } = useScrollAnimation();

onMounted(() => {
  initTheme();
  setupScrollObserver();
});
</script>
