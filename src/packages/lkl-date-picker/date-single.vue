<template>
  <div class="lkl-date-picker-date-single">
    <div class="lkl-date-picker-date-single-button" @click="showPicker" :style="{ color }" >{{ showText }}</div>
    <lkl-icon-fold :color="color" marginLeft="5px" />
    <calendar
      :show.sync="isPopupShow"
      :default-date="defaultDate"
      :disabled-date="disabledDates"
      :min-date="minDate"
      :max-date="maxDate"
      :close-by-click-mask="closeByClickMask"
      mode="single"
      @change="onChange">
    </calendar>
    <!-- <inlineCalendar /> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { formatDate } from './date'
import LklIconFold from '../lkl-icons/fold.vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)

@Component({
  components: {
    LklIconFold
  }
})
export default class LklDatePickerDateSingle extends Vue {
  @Prop({ required: true }) pickedDate!: Date;

  @Prop({ default: '选择日期' }) defaultText!: Date;
  @Prop({ default: 'yyyy-MM-dd' }) dateFormate!: string;
  @Prop({ default: true }) closeByClickMask!: boolean;

  @Prop({ default: undefined }) disabledDates!: Date[];
  @Prop({ default: undefined }) minDate!: Date;
  @Prop({ default: undefined }) maxDate!: Date;

  @Prop({ default: 'var(--clrT2)' }) color!: string;

  private get defaultDate () {
    return this.pickedDate
  }

  private isPopupShow = false

  private get showText () {
    return this.pickedDate ? formatDate(this.pickedDate, this.dateFormate) : this.defaultText
  }

  public showPicker (): void {
    this.isPopupShow = true
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private onChange (date: any) {
    this.$emit('update:pickedDate', date.toDate())
    this.$nextTick(() => {
      this.$emit('change')
      this.isPopupShow = false
    })
  }
}
</script>

<style lang="less">
.lkl-date-picker-date-single {
  display: flex;
  align-items: center;
  height: 30px;
  flex-shrink: 0;
  &-button {
    font-size: 13px;
  }
}
</style>
