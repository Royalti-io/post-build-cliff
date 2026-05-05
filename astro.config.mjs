import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://post-build-cliff.pages.dev',
  integrations: [
    starlight({
      title: 'The Post-Build Cliff',
      description: 'A field guide for non-technical founders shipping AI-built software into the real world.',
      social: {
        github: 'https://github.com/Royalti-io/post-build-cliff',
      },
      editLink: {
        baseUrl: 'https://github.com/Royalti-io/post-build-cliff/edit/main/',
      },
      head: [
        { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
        { tag: 'meta', attrs: { property: 'og:title', content: 'The Post-Build Cliff' } },
        { tag: 'meta', attrs: { property: 'og:description', content: 'A field guide for non-technical founders shipping AI-built software into the real world.' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'meta', attrs: { name: 'twitter:title', content: 'The Post-Build Cliff' } },
        { tag: 'meta', attrs: { name: 'twitter:description', content: 'A field guide for non-technical founders shipping AI-built software into the real world.' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#F2EDE3' } },
      ],
      sidebar: [
        { label: 'Start here', link: '/' },
        {
          label: '01 — The Cliff',
          autogenerate: { directory: '01-the-cliff' },
        },
        {
          label: '02 — Minimum Competence',
          autogenerate: { directory: '02-minimum-competence' },
        },
        {
          label: '03 — The Hiring Line',
          autogenerate: { directory: '03-hiring-line' },
        },
        {
          label: 'Tools & References',
          autogenerate: { directory: 'reference' },
        },
      ],
      customCss: ['./src/styles/custom.css'],
      pagefind: true,
      lastUpdated: true,
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
