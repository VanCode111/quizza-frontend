<template>
    <div class="background-wrap">
        <div class="circle circle-top">
            <h1>Игра с друзьями</h1>
            <h2>Пригласите своих друзей вместе играть в квиз</h2>
        </div>
        <div class="circle-middle">
            <div class="middle-wrapper"></div>
        </div>
        <div class="wrapper">
            <div class="gamemode">
                <p class="text">Игровой режим</p>
                <div>
                    <Button>Режим 1</Button>
                    <Button appearance="orange">Режим 2</Button>
                </div>
            </div>
            <div class="rounds">
                <p class="text">Количество раундов</p>
                <QuantityCounter
                    v-model:rounds="rounds"
                    class="arrows"
                ></QuantityCounter>
            </div>
            <div class="gametime">
                <div class="texts">
                    <p class="text">Время игры</p>
                    <p class="text">{{ slider }} мин</p>
                </div>
                <div class="slider-container">
                    <Slider
                        class="slider"
                        v-model:modelValue="slider"
                        :min="1"
                        :max="20"
                    ></Slider>
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
.arrows {
    height: 62px;
}

.gametime {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-width: 400px; //в медиа тут уменьшить
}

.wrapper {
    position: absolute;
    bottom: 150px;
    width: 100vw;
    display: flex;
    gap: 18vw;
    justify-content: center;
}

.slider-container {
    height: 62px;
    width: 100%;
    display: flex;
    align-items: center;
}

.texts {
    display: flex;
    justify-content: space-between;
    width: 100%;
    & .text {
    }
}

.rounds {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
}

.gamemode {
    & div {
        display: flex;
        gap: 25px;
    }
}

.text {
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 27px;
}

@media (max-width: 900px) {
    .wrapper {
        bottom: 130px;
    }
    .text {
        font-size: 22px;
    }
}

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

.circle-middle {
    background: #00214e;
    width: 100vw;
    max-height: 1240px;
    height: 100vw;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
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
