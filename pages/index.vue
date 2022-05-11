<template>
  <div>
    <p>
      <NuxtLink to="/Settings">жжжж гыгыгы</NuxtLink>
    </p>

    <QuantityCounter v-model:rounds="rounds"></QuantityCounter>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rounds: 15,
    };
  },
};
</script>

<style></style>
