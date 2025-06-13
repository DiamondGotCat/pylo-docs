import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Pylo</span>,
  project: {
    link: 'https://github.com/DiamondGotCat/Pylo/',
  },
  docsRepositoryBase: 'https://github.com/DiamondGotCat/pylo-docs/blob/main/',
  footer: {
    text: '(c) 2025 DiamondGotCat',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Nextra'
      }
    }
  },
}

export default config
