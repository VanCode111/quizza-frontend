<template>
    <div>
        <p>
            <NuxtLink to="/Settings">жжжж гыгыгы</NuxtLink>
        </p>

        <QuantityCounter v-model:rounds="rounds"></QuantityCounter>

        <div class="buttons">
            <h3>Кнопки</h3>
            <div class="buttons__wrapper">
                <Button>Кнопка</Button>
                <Button appearance="orange">Кнопка</Button>
                <Button appearance="blank">Кнопка</Button>
                <Button appearance="selected">Кнопка</Button>
                <Button appearance="success">Кнопка</Button>
            </div>
        </div>
        <div class="slider-block">
            <Slider v-model="slider" :min="0" :max="100" />
        </div>

        {{ slider }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            rounds: 15,
            slider: 11,
        };
    },
};
</script>

<style lang="scss">
.slider-block {
    margin: 30px;
}
.buttons {
    padding: 10px;
    & h3 {
        margin-bottom: 10px;
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
}
</style>
