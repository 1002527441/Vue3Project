<template>
    <div>
        <div>From store</div>
        <div>Current Count: {{ countStore.count }}</div>
        <div>double Count: {{ countStore.getDoubleCount }}</div>

        <div>解构方法得到的</div>
        <div>Current Count: {{ count }}</div>
        <div>double Count: {{ getDoubleCount }}</div>

        
        <el-button type="primary" @click="increment()">add1</el-button>
        <el-button type="primary" @click="addOne()">add2</el-button>
       
        <el-button type="primary" @click="countStore.fetchCats()">fetch Cats</el-button>

        <el-table :data="countStore.cats" style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column label="url" width="180" >
                <template #default="scope">
                    <div>
                        <el-image style="width: 100px; height: 100px" :src="scope.row.url" :fit="fit" />
                    </div>
                </template>
              
            </el-table-column>
            <el-table-column prop="width" label="width" width="180" />
            <el-table-column prop="height" label="height" />
        </el-table>

        


    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import {useCounterStore} from '../stores/counter'


    const countStore = useCounterStore();  

    //解构
    const {count, getDoubleCount} = storeToRefs(countStore);
    const {increment} = countStore;

    function addOne(){
        countStore.count++;
        console.log(countStore.count);
    }



    
</script>

<style lang="scss" scoped>

</style>