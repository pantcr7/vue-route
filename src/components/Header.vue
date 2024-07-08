<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{name:'about'}">About</router-link> |
      <router-link :to="{name:'careers'}">Careers</router-link>
      <button @click="router.push({'name':'home'})">Home</button>
    </nav>
    
    </template>
    <script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();
    </script>
