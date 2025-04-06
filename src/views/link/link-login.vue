<script setup lang="ts">

import {ref} from "vue";
import router from "@/router";

const userName = ref<string>('admin')
const userPassword = ref<string>('123456789')

const  submitPost = ()=>{
 if (userName.value === 'admin' && userPassword.value === '123456789') {
   router.push({
     path:"/link",
     query:{
       name:userName.value,
       password:userPassword.value
     }
   })
 }else {
   alert("user or password is incorrect")
 }
}
</script>

<template>
    <div class="home">
       <h1> login </h1>
      <div class="row">
         <label > userName</label>
        <input type="text"  value="admin" class="form-control" placeholder="user password" v-model="userName">
      </div>
      <div class="row">
         <label > userPassword</label>
         <input type="password" value="123456789" placeholder="user password "  class="form-control" v-model="userPassword"></input>
      </div>
      <div class="row">
         <div class="col-3">
           <button class="btn btn-primary" @click="submitPost">
             submit
           </button>
         </div>

        <div class="col-3">
          <button class="btn btn-danger" >reset</button>
        </div>
      </div>
    </div>
</template>

<style scoped lang="scss">

</style>