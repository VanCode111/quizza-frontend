<template>
    <div class="avatar" :class="coputedClasses">
        <div class="badge">
            <slot name="badge"></slot>
        </div>

        <div class="avatar__rounded">
            <img v-if="src" class="img" :src="src" alt="avatar" />
            <div v-else class="anonim"></div>
        </div>
    </div>
</template>

<script>
import anonim from "../assets/img/anonim.svg";
export default {
    props: {
        src: {
            type: String,
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
    position: relative;
}

.badge {
    position: absolute;
    left: 70%;
}
.avatar__rounded {
    width: 118px;
    height: 118px;
    overflow: hidden;
    border-radius: 50%;
    & .img {
        width: 100%;
        height: 100%;
    }
    & .anonim {
        width: 100%;
        height: 100%;
        background: black;
    }
}
</style>
