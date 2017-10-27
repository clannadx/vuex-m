<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input :title="title" :isShow.sync="listShow"></select-input>
        <list v-show="listShow" :data="listData" @changeTitle="titleHandle"></list>
      </div>
    </section>
</template>
<script>

import selectInput from '@/components/selectInput'
import List from '@/components/list'

let listData = [
  {
    title: 'javascript'
  },
  {
    title: 'vue'
  },
  {
    title: 'node'
  }
]
export default {
  data(){
      return {
        listShow: false,
        listData: listData,
//      在父组件定义好一个状态用来传值 来改变兄弟组件中的状态
        title:''
      }

  },
  methods:{
    titleHandle(title){
//      console.log(title)
      this.title=title
    }
  },
  components: {
    selectInput,
    List

  }
}
</script>
