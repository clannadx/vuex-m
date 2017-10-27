<template>
    <div class="clearFix">
      <input
      readonly='readonly'
      class="keyWord"
      @click="showListHandle"
      :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  props:['isShow','title'],
//  根据已有的属性计算属性
  computed:{
    initShow(){
      return this.isShow
    }
  },
  methods: {
    showListHandle(){
      console.log(1)
       this.$emit("update:isShow", !this.initShow)
    }
  }
}
</script>
