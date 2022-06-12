<template>
    <div class="score">
        <div class="score__count">{{ value }}</div>
        <div class="score__icon">
            <BaseIcon width="55" height="56" viewBox="0 0 55 56"
                ><PizzaIcon
            /></BaseIcon>
        </div>
    </div>
</template>

<script>
import BaseIcon from "./icons/BaseIcon.vue";
import PizzaIcon from "./icons/PizzaIcon.vue";
export default {
    components: {
        BaseIcon,
        PizzaIcon,
    },
    props: {
        value: {
            type: [String, Number],
        },
    },
};
</script>

<style lang="scss" scoped>
.score {
    display: flex;
    &__count {
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        color: #ea425b;
        margin-right: 5px;
    }
}
</style>
