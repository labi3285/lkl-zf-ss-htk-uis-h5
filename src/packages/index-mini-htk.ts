import Vue from 'vue'

import vNav from '@/packages/lkl-nav/htk.vue'
import vHeadContent from '@/packages/lkl-content/htk-head-content.vue'
import vCardContent from '@/packages/lkl-content/htk-card-content.vue'

import vRow from '@/packages/lkl-layout/row.vue'
import vCol from '@/packages/lkl-layout/colum.vue'
import vContent from '@/packages/lkl-content/index.vue'
import vScroll from '@/packages/lkl-scroll/index.vue'
import vBetterScroll from '@/packages/lkl-scroll/better-scroll.vue'
import vCard from '@/packages/lkl-card/haotk.vue'
import vPopup from '@/packages/lkl-popup/index.vue'

import vSpace from '@/packages/lkl-space/index.vue'
import vBreakSpace from '@/packages/lkl-break-space/index.vue'
import vLine from '@/packages/lkl-line/index.vue'
import vBreakLine from '@/packages/lkl-break-line/index.vue'

import vIconArrow from '@/packages/lkl-icons/icon-arrow.vue'
import vIconFold from '@/packages/lkl-icons/icon-fold.vue'
import vIconBack from '@/packages/lkl-icons/icon-back.vue'
import vIconClose from '@/packages/lkl-icons/icon-close.vue'

import vTextButton from '@/packages/lkl-text-button/index.vue'
import vTitle from '@/packages/lkl-title/htk-title.vue'
import vSelect from '@/packages/lkl-select/select.vue'
import vCheck from '@/packages/lkl-select/check.vue'
import vLabel from '@/packages/lkl-select/haotk-label.vue'

import vColumsListHeader from '@/packages/lkl-colums-list/htk-header.vue'
import vColumsListItem from '@/packages/lkl-colums-list/htk-item.vue'

import vPullDownRefresh from '@/packages/lkl-pull-down-refresh/index.vue'
import vLoadMore from '@/packages/lkl-load-more/index.vue'

import vSettingRow from '@/packages/lkl-setting/row.vue'
import vSettingButton from '@/packages/lkl-setting/row-button.vue'

Vue.component('v-nav', vNav)

Vue.component('v-head-content', vHeadContent)
Vue.component('v-card-content', vCardContent)

Vue.component('v-row', vRow)
Vue.component('v-col', vCol)
Vue.component('v-content', vContent)
Vue.component('v-scroll', vScroll)
Vue.component('v-better-scroll', vBetterScroll)
Vue.component('v-card', vCard)

Vue.component('v-popup', vPopup)

Vue.component('v-space', vSpace)
Vue.component('v-break-space', vBreakSpace)
Vue.component('v-line', vLine)
Vue.component('v-break-line', vBreakLine)

Vue.component('v-icon-arrow', vIconArrow)
Vue.component('v-icon-fold', vIconFold)
Vue.component('v-icon-back', vIconBack)
Vue.component('v-icon-close', vIconClose)

Vue.component('v-text-button', vTextButton)
Vue.component('v-title', vTitle)
Vue.component('v-select', vSelect)
Vue.component('v-check', vCheck)
Vue.component('v-label', vLabel)

Vue.component('v-colums-list-header', vColumsListHeader)
Vue.component('v-colums-list-item', vColumsListItem)

Vue.component('v-pull-down-refresh', vPullDownRefresh)
Vue.component('v-load-more', vLoadMore)

Vue.component('v-setting-row', vSettingRow)
Vue.component('v-setting-button', vSettingButton)
