<template>
    <div class="background-wrap">
        <!-- <QuantityCounter v-model:rounds="rounds"></QuantityCounter>

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
        <div class="slider-block">
            <Slider v-model="slider" :min="0" :max="100" />
        </div>

        {{ slider }} -->
        <div class="circle circle-top">
            <h2>Мы рады видеть вас снова!</h2>
        </div>
        <div class="form-wrapper">
            <h1>Вход</h1>
            <form action="">
                <Button @click="lala">Войти</Button>
            </form>
            <a href="">Зарегистрироваться</a>
        </div>
        <div class="circle circle-bottom">
            <p class="help-text">Войти с помощью</p>
            <div class="icons-wrapper"></div>
        </div>
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
    methods: {
        lala() {
            console.log("Ваня красавчик");
        },
    },
};
</script>

<style lang="scss">
body {
    overflow: hidden;
}

h2 {
    font-weight: bold;
    font-size: 44px;
    max-width: 500px;
    color: white;
    text-align: center;
    position: absolute;
    // top: 300px;
    bottom: 55px;
}

.background-wrap {
    background-color: #00214e;
    height: 100vh;
    width: 100vw;
}

.form-wrap {
}

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

.circle-top {
    position: absolute;
    transform: translateY(-50%);
    height: 470px;
    width: 100vw;
    background: #ea425c;
    border-radius: 100%;
    display: flex;
    justify-content: center;
}

.circle-bottom {
    position: absolute;
    transform: translateY(150%);
    height: 470px;
    width: 100vw;
    background: #ffbd00;
    border-radius: 100%;
    display: flex;
    justify-content: center;
}
</style>
