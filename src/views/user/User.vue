<template>
    <div>
        user with id = {{ props.id }}

    </div>
</template>




<script setup>

//props 传递给路由组件
    const props = defineProps(['id']);
    console.log('userid='+props.id);
 
</script>

<style lang="scss" scoped>

</style>