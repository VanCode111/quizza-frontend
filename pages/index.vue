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
                <Button @click="lala" appearance="orange">Кнопка</Button>
                <Button appearance="blank">Кнопка</Button>
                <Button appearance="selected">Кнопка</Button>
                <Button appearance="success">Кнопка</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rounds: 15,
        };
    },
    methods: {
        lala() {
            console.log("Ваня красавчик");
        },
    },
};
</script>

<style lang="scss">
.buttons {
    padding: 10px;
    & h3 {
        margin-bottom: 10px;
    }
    &__wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: start;
    }
}
</style>
