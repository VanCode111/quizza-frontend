<template>
    <div class="background-wrap">
        <div class="circle circle-top">
            <h1>Игра с друзьями</h1>
            <h2>Пригласите своих друзей вместе играть в квиз</h2>
        </div>
        <div class="circle-middle"></div>
        <div class="wrapper">
            <div class="gamemode">
                <p class="text">Игровой режим</p>
                <Button>Режим 1</Button>
                <Button appearance="orange">Режим 2</Button>
            </div>
            <div class="rounds">
                <p class="text">Количество раундов</p>
                <QuantityCounter></QuantityCounter>
            </div>
            <div class="gametime">
                <div class="texts">
                    <p class="text">Время игры</p>
                    <p class="text">{{}}</p>
                    <Slider></Slider>
                </div>
            </div>
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
.circle-top {
    z-index: 5;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    // transform: translateY(-50%);
    height: 570px;
    width: 600px;
    background: #ea425c;
    border-radius: 100%;
    display: flex;
    justify-content: center;
}

body {
    overflow: hidden;
}

h1 {
    font-weight: bold;
    font-size: 44px;
    max-width: 500px;
    color: white;
    text-align: center;
    position: absolute;
    top: 285px + 50px;
}

h2 {
    position: absolute;
    top: 285px + 50px + 66px;
    font-weight: 400;
    font-size: 22px;
    color: white;
    max-width: 450px;
    text-align: center;
}

.background-wrap {
    background-color: #ffbd00;
    height: 100vh;
    width: 100vw;
}

.circle-middle {
    background: #00214e;
    width: 100vw;
    max-height: 1440px;
    height: 100vw;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
}

@media (max-width: 1000px) {
    .circle {
        height: 370px;
    }

    h1 {
        font-size: 36px;
    }
    a {
        font-size: 18px;
    }
    Button {
        font-size: 20px;
    }
    .help-text {
        font-size: 24px;
    }
    .icons-wrapper {
        top: 100px;
    }
}
</style>
