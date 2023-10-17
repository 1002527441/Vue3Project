<template>
    <div>
        user list
        {{ name }}

        counter = {{ counter }}

        <button @click="updatename">change name</button>

        <el-button type="primary" @click="increase">add</el-button>
        
        

    </div>
   
</template>

<script setup>
import { ref } from 'vue';

   const name = ref('henry.zhang');
   const counter = ref(0);
   


   function updatename (){
     name.value = "jack.zhang"
   }

   function increase(){
    counter.value+=1;
   }

</script>

<style lang="scss" scoped>

</style>