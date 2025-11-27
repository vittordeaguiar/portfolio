<template>
  <section class="section contact" id="contact">
    <div class="container">
      <div class="section__header">
        <span class="section__number">07.</span>
        <h2 class="section__title">Vamos Conversar?</h2>
      </div>

      <div class="contact__content">
        <h3 class="contact__subtitle">Tem um projeto em mente?</h3>
        <p>
          Vamos transformar sua ideia em realidade. Estou sempre aberto a discutir novos projetos e oportunidades de
          consultoria.
        </p>

        <a href="mailto:vittoraguiar93@gmail.com" class="email-link"> vittoraguiar93@gmail.com </a>

        <p>ou me encontre em</p>

        <div class="social-links">
          <a href="https://linkedin.com/in/vittordeaguiar" class="social-link" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/vittordeaguiar" class="social-link" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://wa.me/55984690385" class="social-link" target="_blank">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact__content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.contact__subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-text-heading);
  margin-bottom: var(--spacing-md);
}

.email-link {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
  position: relative;
  display: inline-block;
  margin: var(--spacing-lg) 0;
}

.email-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: var(--color-primary);
  transition: width var(--transition-normal);
}

.email-link:hover::after {
  width: 100%;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
}

.social-link:hover {
  color: var(--color-primary);
}

.social-link i {
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .email-link {
    font-size: var(--font-size-lg);
    word-break: break-all;
  }

  .social-links {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
