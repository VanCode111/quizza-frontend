<template>
    <div class="player">
        <Avatar :src="img"
            ><template v-slot:badge
                ><div :class="['counter ' + color]">{{ count }}</div></template
            ></Avatar
        >
        <p class="player__name">{{ name }}</p>
        <div class="player__score">
            <Score :value="score" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: [String, Number],
            default: "red",
        },
        count: {
            type: [String, Number],
            default: 0,
        },
        img: {
            type: String,
        },
        name: {
            type: String,
        },
        score: {
            type: [String, Number],
        },
    },
};
</script>

<style lang="scss" scoped>
.player {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    &__name {
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        text-align: center;
    }
}
.counter {
    background-color: #ea425b;
    padding: 5px;
    min-width: 44px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    height: 44px;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    &.green {
        background-color: #28d239;
    }
}
</style>
