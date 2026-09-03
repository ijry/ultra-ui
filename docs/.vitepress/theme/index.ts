import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'

import './style/vars.css'
import './style/custom.css'
import './style/home.css'

import PlatformTabs from './components/PlatformTabs.vue'
import PlatformBadges from './components/PlatformBadges.vue'
import PlatformPicker from './components/PlatformPicker.vue'
import SupportMatrix from './components/SupportMatrix.vue'
import ComponentIndex from './components/ComponentIndex.vue'
import InstallCard from './components/InstallCard.vue'

import HomeHero from './components/home/HomeHero.vue'
import HomePlatforms from './components/home/HomePlatforms.vue'
import HomeFeatures from './components/home/HomeFeatures.vue'
import HomeCode from './components/home/HomeCode.vue'
import HomeComponents from './components/home/HomeComponents.vue'
import HomeCta from './components/home/HomeCta.vue'

import { hydratePlatform } from './composables/usePlatform'

export default {
  extends: DefaultTheme,

  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-before': () => h(PlatformPicker)
    })
  },

  enhanceApp({ app }) {
    app.component('PlatformTabs', PlatformTabs)
    app.component('PlatformBadges', PlatformBadges)
    app.component('SupportMatrix', SupportMatrix)
    app.component('ComponentIndex', ComponentIndex)
    app.component('InstallCard', InstallCard)

    app.component('HomeHero', HomeHero)
    app.component('HomePlatforms', HomePlatforms)
    app.component('HomeFeatures', HomeFeatures)
    app.component('HomeCode', HomeCode)
    app.component('HomeComponents', HomeComponents)
    app.component('HomeCta', HomeCta)

    if (typeof window !== 'undefined') hydratePlatform()
  }
} satisfies Theme
