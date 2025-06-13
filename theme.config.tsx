import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Pylo</span>,
  project: {
    link: 'https://github.com/DiamondGotCat/Pylo/',
  },
  docsRepositoryBase: 'https://github.com/DiamondGotCat/pylo-docs/blob/main/',
  footer: {
    text: '(c) 2025 DiamondGotCat',
  },
  titleTemplate: '%s – Pylo Docs',
}

export default config
