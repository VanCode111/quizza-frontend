<template>
    <div class="background-wrap">
        <div class="circle circle-top">
            <h1 class="circle-heading">Игра с друзьями</h1>
            <h2 class="circle-subheading">
                Пригласите своих друзей вместе играть в квиз
            </h2>
        </div>
        <div class="circle-middle">
            <div class="middle-wrapper">
                <div class="versus">
                    <div class="ava"></div>
                    <p class="vs-letters">VS</p>
                    <div class="ava"></div>
                </div>
                <Button class="link-btn">Копирование ссылки</Button>
            </div>
        </div>
        <div class="wrapper">
            <div class="gamemode">
                <p class="text">Игровой режим</p>
                <div>
                    <Button class="modebtn">Режим 1</Button>
                    <Button class="modebtn" appearance="orange">Режим 2</Button>
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
.middle-wrapper {
    display: flex;
    position: absolute;
    bottom: 100px;
    justify-content: center;
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%);
}

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
    gap: 12vw;
    justify-content: center;
}

@media (max-width: 1400px) {
    .wrapper {
        gap: 7vw;
    }
}

@media (max-width: 1250px) {
    .wrapper {
        gap: 3vw;
    }
}

@media (max-width: 1200px) {
    .wrapper {
        // flex-direction: column;
        bottom: 130px;
    }
    .text {
        font-size: 22px;
    }
    h1 {
        font-size: 32px;
    }
    h2 {
        font-size: 20px;
    }
    .modebtn {
        padding: 16px 20px;
        width: 167px;
    }
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

h1.circle-heading {
    font-weight: bold;
    font-size: 44px;
    max-width: 500px;
    color: white;
    text-align: center;
    position: absolute;
    top: 285px + 50px;
}

.ava {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    background: black;
}

.versus {
    display: flex;
    max-width: 530px;
    min-width: 340px;
    gap: 70px;
    margin-bottom: 35px;
    align-items: center;
}

.circle-middle {
    background: #00214e;
    width: 100vw;
    max-height: 1340px;
    height: 100vw;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    & Button {
        width: 416px;
        margin: 0 auto;
    }
}

h2.circle-subheading {
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

.vs-letters {
    font-size: 44px;
    font-weight: bold;
    color: #ea425b;
}

@media (max-width: 1000px) {
    .vs-letters {
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

@media (max-width: 1125px) {
    .wrapper {
        flex-direction: column;
        justify-content: center;
        & .text {
            text-align: left;
            margin-bottom: 0;
        }
        padding-left: 35px;
        padding-right: 35px;
        gap: 0;
    }
    .gamemode {
        margin-bottom: 25px;
        & .text {
            margin-bottom: 25px;
        }
    }
    .rounds {
        display: flex;
        flex-direction: row;
        margin-bottom: 25px;
    }

    .ava {
        width: 120px;
        height: 120px;
    }
    .versus {
        gap: 30px;
        justify-content: center;
    }
    .wrapper {
        bottom: 90px;
    }
}

@media (max-width: 800px) {
    .gametime {
        padding-right: 35px;
    }
    //gametime padding
}

@media (max-width: 1250px) {
    .circle-top {
        transform: translate(-50%, -65%);
        & h1 {
            top: 380px;
        }
        & h2 {
            top: 380px + 70px;
        }
    }
}

@media (max-width: 440px) {
    .wrapper {
        padding-left: 10px;
        padding-right: 10px;
    }
    .gametime {
        padding-right: 10px;
    }
}

@media (max-width: 1000px) {
    .wrapper {
        bottom: 50px;
    }

    .circle-middle Button {
        width: 320px;
    }
}
@media (max-width: 1125px) {
    .circle-top {
        height: 370px;
        width: 428px;
        transform: translate(-50%, -50%);
    }
    h1.circle-heading {
        font-size: 36px;
        top: 220px;
    }
    h2.circle-subheading {
        font-size: 20px;
        top: 220px + 50px;
        width: 345px;
    }
    .circle-middle {
        border-radius: 0;
        transform: translate(0, 0);
        top: 0;
        left: 0;
        height: 58vh;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }
}
</style>
