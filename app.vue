<template>
  <NuxtPage />
</template>

<script setup>
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCg9ZsvpeikE5w6cGb3Q428MF43TN-7_3Q",
  authDomain: "quizza-915c1.firebaseapp.com",
  projectId: "quizza-915c1",
  storageBucket: "quizza-915c1.appspot.com",
  messagingSenderId: "670860389883",
  appId: "1:670860389883:web:db8150a4bc04cf9181ef5e"
};

const app = initializeApp(firebaseConfig);
</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;600;700;800&display=swap");
* {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  border-radius: none;
  outline: none;
  border: none;
  box-sizing: border-box;
}
</style>
