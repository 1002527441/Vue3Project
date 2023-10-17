import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import request from '../utils/request'
import {counterSearch} from '../api/counter'

export const useCounterStore = defineStore('counterStore', () => {
  
  // states
  const count = ref(0)
  const cats = ref(null)



  // getters
  const getDoubleCount = computed(() => {
    return count.value * 2;
  })

  // actions
  function increment() {
    count.value++
  }

  function $reset() {
    count.value = 0;
  }

  function fetchCats() {   

    counterSearch({
      limit:10
    }).then( res => {
        cats.value = res;
        console.log(res);
    }).catch(error => {
        console.log('error='+ error);
    })

    // request({
    //   url:'/v1/images/search?limit=10'
    // }).then( res => {
    //   cats.value = res;
    //   console.log(res);
    // }).catch(error => {
    //   console.log('error='+ error);
    // })
        

  
  }


  return { count, cats, getDoubleCount, increment, fetchCats, $reset,  }
})


