<template>
    <div class="game">
        <div class="game__wrapper">
            <div class="left-side">
                <div class="left-side__content">
                    <div class="top-block">
                        <p class="timer">
                            <BaseIcon viewBox="0 0 51 85" width="51" height="85"
                                ><LogoIcon></LogoIcon></BaseIcon
                            >{{ time }}
                        </p>
                        <p class="question">
                            Вопрос {{ numberOfQuestion }}/{{
                                amountOfQuestions
                            }}
                        </p>
                        <p class="desc">
                            {{ question.description }}
                        </p>
                    </div>
                    <img class="img-question" :src="question.img" alt="img" />
                </div>
            </div>
            <div class="right-side">
                <div class="right-side__content">
                    <div class="top_block">
                        <div class="burger-menu">
                            <IconButton
                                ><BaseIcon
                                    width="78"
                                    height="60"
                                    viewBox="0 0 78 60"
                                    ><BurgerMenuIcon /></BaseIcon
                            ></IconButton>
                        </div>
                        <div class="players">
                            <Player
                                name="Иван"
                                score="10"
                                count="10"
                                img="../assets/img/ivan.png"
                            />
                            <p class="vs">VS</p>
                            <Player
                                name="Иван"
                                score="20"
                                count="1000"
                                color="green"
                                img="../assets/img/ivan.png"
                            />
                        </div>
                    </div>

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
import BaseIcon from "../../components/icons/BaseIcon";
import LogoIcon from "../../components/icons/LogoIcon.vue";
import BurgerMenuIcon from "../../components/icons/BurgerMenuIcon.vue";

export default {
    components: {
        BaseIcon,
        BurgerMenuIcon,
        LogoIcon,
    },
    data() {
        return {
            question: {
                img: "../assets/img/salad.png",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit? Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit?Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit?",
            },
            selected: 2,
            time: "01:11",
            numberOfQuestion: 1,
            amountOfQuestions: 10,

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
.burger-menu {
    display: flex;
    flex-direction: row-reverse;
}
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
.players {
    display: flex;
    justify-content: space-between;
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
.top_block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.timer {
    font-weight: 600;
    font-size: 50px;
    line-height: 61px;
    margin-bottom: 28px;
    display: flex;
    align-items: center;
    gap: 26px;
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
    width: 100%;
    height: 100vh;
    flex: 1 1 0px;
    grid-gap: 0;
}

.right-side {
    width: 100%;
    flex-grow: 1;
    flex-basis: 100%;
    padding: 30px 89px;
    &__content {
        display: grid;
        gap: 5vh;
        grid-template-rows: 1fr 1fr;
        height: calc(100vh - 60px);
    }
}
.vs {
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    margin-top: 20px;
    /* identical to box height */

    text-align: center;

    color: #ea425b;
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
    overflow: hidden;
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
