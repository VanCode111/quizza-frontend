<template>
    <button class="icon-button" :style="{ width: `${sizeX}px` }">
        <slot class="icon"></slot>
    </button>
</template>

<script>
export default {
    props: {
        sizeX: {
            type: Number,
            default: 100,
        },
    },
};
</script>

<style lang="scss">
.icon-button {
    cursor: pointer;
    background: none;
}
svg {
    width: 100%;
}
</style>
