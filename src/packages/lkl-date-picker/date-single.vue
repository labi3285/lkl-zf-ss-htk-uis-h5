<template>
  <div class="lkl-date-picker-date-single">
    <div class="lkl-date-picker-date-single-button" @click="showPicker" >{{ showText }}</div>
    <v-icon-fold marginLeft="5px" />
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
import vArrowTriangle from '../lkl-icons/triangle.vue'
import Calendar from 'vue-mobile-calendar'
Vue.use(Calendar)

@Component({
  components: {
    vArrowTriangle
  }
})
export default class LklDatePickerDateSingle extends Vue {
  @Prop({ required: true }) private pickedDate!: Date;

  @Prop({ default: undefined }) private defaultDate!: Date;
  @Prop({ default: '选择日期' }) private defaultText!: Date;
  @Prop({ default: 'yyyy-MM-dd' }) private dateFormate!: string;
  @Prop({ default: true }) private closeByClickMask!: boolean;

  @Prop({ default: undefined }) private disabledDates!: Date[];
  @Prop({ default: undefined }) private minDate!: Date;
  @Prop({ default: undefined }) private maxDate!: Date;

  private isPopupShow = false

  private get showText () {
    return this.pickedDate ? formatDate(this.pickedDate, this.dateFormate) : this.defaultText
  }

  private mounted () {
    if (this.defaultDate) {
      this.$emit('update:pickedDate', this.defaultDate)
      this.$nextTick(() => {
        this.$emit('change')
      })
    }
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
    color: var(--clrT2);
  }
}
</style>
