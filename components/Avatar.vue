<template>
    <div class="avatar">
        <img class="img" :class="computedClasses" :src="src" alt="avatar" />
    </div>
</template>

<script>
export default {
    props: {
        src: String,
    },
    computed: {
        computedClasses() {
            const notFound = !file_exists(src) || !src;
            return [
                {
                    notFound,
                },
            ];
        },
    },
};
</script>

<style lang="scss">
.avatar {
    border-radius: 50%;
    width: 163px;
    height: 163px;
    overflow: hidden;
    & .img {
        width: 100%;
        height: auto;
    }
    &.notFound {
        background-color: black;
    }
}
</style>
