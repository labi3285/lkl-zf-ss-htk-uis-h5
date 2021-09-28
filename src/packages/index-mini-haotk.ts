import Vue from 'vue'

import vRow from '@/packages/lkl-layout/row.vue'
import vCol from '@/packages/lkl-layout/colum.vue'
import vContent from '@/packages/lkl-content/index.vue'
import vCard from '@/packages/lkl-card/haotk.vue'

import vSpace from '@/packages/lkl-space/index.vue'
import vBreakSpace from '@/packages/lkl-break-space/index.vue'
import vLine from '@/packages/lkl-line/index.vue'
import vBreakLine from '@/packages/lkl-break-line/index.vue'

import vIconArrow from '@/packages/lkl-icons/icon-arrow.vue'
import vIconFold from '@/packages/lkl-icons/icon-fold.vue'
import vIconBack from '@/packages/lkl-icons/icon-back.vue'
import vIconClose from '@/packages/lkl-icons/icon-close.vue'

import vTextButton from '@/packages/lkl-text-button/index.vue'
import vDotTitle from '@/packages/lkl-title/haotk.vue'
import vSelect from '@/packages/lkl-select/select.vue'
import vCheck from '@/packages/lkl-select/check.vue'
import vLabel from '@/packages/lkl-select/haotk-label.vue'

import vColumsListHeader from '@/packages/lkl-colums-list/haotk-header.vue'
import vColumsListItem from '@/packages/lkl-colums-list/haotk-item.vue'

import vPullDownRefresh from '@/packages/lkl-pull-down-refresh/index.vue'
import vLoadMore from '@/packages/lkl-load-more/index.vue'

import vSettingRow from '@/packages/lkl-setting/row.vue'
import vSettingButton from '@/packages/lkl-setting/row-button.vue'

Vue.component('v-row', vRow)
Vue.component('v-col', vCol)
Vue.component('v-content', vContent)
Vue.component('v-card', vCard)

Vue.component('v-space', vSpace)
Vue.component('v-break-space', vBreakSpace)
Vue.component('v-line', vLine)
Vue.component('v-break-line', vBreakLine)

Vue.component('v-icon-arrow', vIconArrow)
Vue.component('v-icon-fold', vIconFold)
Vue.component('v-icon-back', vIconBack)
Vue.component('v-icon-close', vIconClose)

Vue.component('v-text-button', vTextButton)
Vue.component('v-dot-title', vDotTitle)
Vue.component('v-select', vSelect)
Vue.component('v-check', vCheck)
Vue.component('v-label', vLabel)

Vue.component('v-colums-list-header', vColumsListHeader)
Vue.component('v-colums-list-item', vColumsListItem)

Vue.component('v-pull-down-refresh', vPullDownRefresh)
Vue.component('v-load-more', vLoadMore)

Vue.component('v-setting-row', vSettingRow)
Vue.component('v-setting-button', vSettingButton)
