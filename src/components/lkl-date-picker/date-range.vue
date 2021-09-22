<template>
  <div class="lkl-date-picker-date-range">
    <div class="lkl-date-picker-date-range-button" @click="showPicker" >{{ showText }}</div>
    <v-arrow-triangle marginLeft="5px" />
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
import vArrowTriangle from '../lkl-arrow/triangle.vue'
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)

@Component({
  components: {
    vArrowTriangle
  }
})
export default class LklDatePickerDateRange extends Vue {
  @Prop({ default: undefined }) private pickedDateRange!: { start: Date, end: Date };

  @Prop({ default: undefined }) private defaultDateRange!: { start: Date, end: Date };
  @Prop({ default: '选择日期' }) private defaultText!: Date;
  @Prop({ default: 'yyyy-MM-dd' }) private dateFormate!: string;
  @Prop({ default: true }) private closeByClickMask!: boolean;

  @Prop({ default: undefined }) private minDate!: Date;
  @Prop({ default: undefined }) private maxDate!: Date;

  private isPopupShow = false
  private get defaultDate (): Date[] | undefined {
    return this.defaultDateRange ? [this.defaultDateRange.start, this.defaultDateRange.end] : undefined
  }

  private get showText () {
    return this.pickedDateRange ? formatDate(this.pickedDateRange.start, this.dateFormate) + ' -- ' + formatDate(this.pickedDateRange.end, this.dateFormate) : this.defaultText
  }

  private mounted () {
    if (this.defaultDateRange) {
      this.$emit('update:pickedDateRange', this.defaultDateRange)
      this.$nextTick(() => {
        this.$emit('change')
      })
    }
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
    color: var(--clrT2);
  }
}
</style>
