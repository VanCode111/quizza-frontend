<template>
    <div class="avatar" :class="coputedClasses">
        <img class="img" :src="src" alt="avatar" />
    </div>
</template>

<script>
import anonim from "../assets/img/anonim.svg";
export default {
    props: {
        src: {
            type: String,
            default: anonim,
        },
    },
    computed: {
        coputedClasses() {
            return [
                {
                    notFound: !this.src,
                },
            ];
        },
    },
};
</script>

<style lang="scss">
.avatar {
    width: 118px;
    height: 118px;
    overflow: hidden;
    border-radius: 50%;
    & .img {
        width: 100%;
        height: 100%;
    }
}
</style>
