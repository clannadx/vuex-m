<template>
    <ul class="list">
      <li v-for="item in data" @click="chooseHandle(item.title)">{{item.title}}</li>
    </ul>
</template>

<script>
export default {
//  接收
    props:['data'],
    methods:{
      chooseHandle(title){
        console.log(2)
        this.$emit('changeTitle',title)

      }
    }
}
</script>
