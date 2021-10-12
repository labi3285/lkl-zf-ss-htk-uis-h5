<template>
  <div class="lkl-date-picker-date-range">
    <div class="lkl-date-picker-date-range-button" @click.stop="showPicker" :style="{ color }" >{{ showText }}</div>
    <v-icon-fold :color="color" marginLeft="5px" />
    <calendar
      :show.sync="isPopupShow"
      :default-date="defaultDate"
      :min-date="minDate"
      :max-date="maxDate"
      :close-by-click-mask="closeByClickMask"
      mode="during"
      @change="onChange">
    </calendar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { formatDate } from './date'
import vIconFold from '../lkl-icons/icon-fold.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)

@Component({
  components: {
    vIconFold
  }
})
export default class LklDatePickerDateRange extends Vue {
  @Prop({ required: true }) private pickedDateRange!: { start: Date, end: Date };

  @Prop({ default: '选择日期' }) private defaultText!: Date;
  @Prop({ default: 'yyyy-MM-dd' }) private dateFormate!: string;
  @Prop({ default: true }) private closeByClickMask!: boolean;

  @Prop({ default: undefined }) private minDate!: Date;
  @Prop({ default: undefined }) private maxDate!: Date;

  @Prop({ default: 'var(--clrT2)' }) private color!: string;

  private isPopupShow = false
  private get defaultDate (): Date[] | undefined {
    return this.pickedDateRange ? [this.pickedDateRange.start, this.pickedDateRange.end] : undefined
  }

  private get showText () {
    return this.pickedDateRange ? formatDate(this.pickedDateRange.start, this.dateFormate) + ' -- ' + formatDate(this.pickedDateRange.end, this.dateFormate) : this.defaultText
  }

  public showPicker (): void {
    this.isPopupShow = true
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onChange (arr: any[]) {
    if (arr.length < 2) {
      return
    }
    this.$emit('update:pickedDateRange', { start: arr[0].toDate(), end: arr[1].toDate() })
    this.$nextTick(() => {
      this.$emit('change')
      this.isPopupShow = false
    })
  }
}
</script>

<style lang="less">
.lkl-date-picker-date-range {
  display: flex;
  align-items: center;
  height: 30px;
  flex-shrink: 0;
  &-button {
    font-size: 13px;
  }
}
</style>
