<template>
    <div class="game">
        <div class="game__wrapper">
            <div class="left-side">
                <div class="left-side__content">
                    <div class="top-block">
                        <p class="timer">01:11</p>
                        <p class="question">Вопрос 1/10</p>
                        <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ipsum dolor sit? Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit ipsum dolor sit?Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit
                            ipsum dolor sit?
                        </p>
                    </div>
                    <img
                        class="img-question"
                        src="../assets/img/salad.png"
                        alt="img"
                    />
                </div>
            </div>
            <div class="right-side">
                <div class="right-side__content">
                    <div class="players"></div>
                    <div class="answs">
                        <Button
                            v-for="key in answs"
                            :key="key.id"
                            :appearance="
                                selected === key.id ? 'selected' : 'blank'
                            "
                            stretched
                            >Ответ 1</Button
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selected: 2,
            answs: [
                {
                    id: 1,
                    text: "Ответ 1",
                },
                {
                    id: 2,
                    text: "Ответ 1",
                },
                {
                    id: 3,
                    text: "Ответ 1",
                },
                {
                    id: 4,
                    text: "Ответ 1",
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.top-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px;
}
.answs {
    display: flex;
    flex-direction: column;

    justify-content: space-between;
    //height: 40vh;
}

.img-question {
    width: 100%;
}
.desc {
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    text-align: center;

    color: #fff8e2;
    margin-top: 52px;
    margin-bottom: 50px;
}
.timer {
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;
    margin-bottom: 28px;
    color: #ffbd00;
}
.question {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    text-align: right;

    color: #ea425b;
}
.game {
    background-color: #fff8e2;
    width: 100%;
    height: 100vh;
}
.game__wrapper {
    display: flex;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100vh;
    flex: 1 1 0px;
    grid-gap: 0;
}

.right-side {
    width: 100%;
    flex-grow: 1;
    flex-basis: 100%;
    padding: 50px;
    &__content {
        display: grid;
        grid-template-rows: 1fr 1fr;
        height: calc(100vh - 100px);
    }
}
.lll {
    background: black;
    height: 200px;
    width: 100%;
    z-index: 2;
}
.left-side {
    position: relative;
    flex-basis: 100%;
    flex-grow: 1;
    &__content {
        width: 100%;
        height: 170vh;
        border-bottom-right-radius: 50%;
        border-top-right-radius: 50%;
        overflow: hidden;
        right: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        //margin-top: 50%;
        padding: calc(35vh + 60px) 0 35vh 0;
        transform: translateY(-35vh);
        background-color: #00214e;
    }
}
</style>
