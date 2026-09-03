import { defineConfig } from 'vitepress'
import { shared } from './config/shared.mts'
import { zh } from './config/zh.mts'
import { en } from './config/en.mts'

export default defineConfig({
  ...shared,
  locales: {
    root: { ...zh },
    en: { ...en }
  }
})
