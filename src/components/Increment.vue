<template>
  <div>
    <h2>简易加法计算器</h2>
    <div>
      <input type="button" value="-" @click="de"/>
      <span>{{num}}</span>
      <input type="button" value="+" @click="add"/>
      <p>{{num2}}</p>
    </div>
  </div>
</template>

<script>


  export default {
    computed: {
      num () {
        return this.$store.state.count
      },
      num2 () {
        return this.$store.getters.filterCount
      }
    },
    methods: {
      add () {
//        改变状态,提交一个mutation
//        this.$store.commit('addIncrement', {
//          n: 5
//      })
//        触发一个action
        this.$store.dispatch('addAction')

      },
      de () {
        this.$store.commit({
          type: 'deIncrement',
          n: 5
        })
      }
    }
  }
</script>
<style>

</style>
