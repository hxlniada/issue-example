<template>
  <view>
    <text class="title">{{ counter.count }}</text>
    <!-- 此处tap不会触发，点击无效 -->
    <view class="button" @tap="onAdd">ADD</view>
    <!-- 此处初始值为空 -->
    <input v-model="testValue" />
  </view>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  data() {
    return {
      testValue: 'initial value'
    }
  },
  watch: {
    // 此处watch不会触发
    testValue(value) {
      console.log('value change', value)
    }
  },
  setup() {
    const counter = useCounterStore()

    const onAdd = () => {
      counter.count++

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    }

    return {
      counter,
      onAdd
    }
  }
}
</script>

<style>
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>
