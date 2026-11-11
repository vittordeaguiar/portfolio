<template>
  <div class="page">
    <AppHeader />

    <main>
      <HeroSection />
      <ExperienceSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>

  <SpeedInsights />
  <Analytics />
</template>

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { Analytics } from '@vercel/analytics/nuxt'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
