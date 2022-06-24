<template>
    <div class="game">
        <div class="game__wrapper">
            <div class="left-side">
                <div class="left-side__content">
                    <div class="top-block" v-if="questions.length">
                        <p class="timer">
                            <BaseIcon viewBox="0 0 51 85" width="51" height="85"
                                ><LogoIcon></LogoIcon></BaseIcon
                            >{{ time }}
                        </p>
                        <p class="question">
                            Вопрос {{ step + 1 }}/{{
                                questions.length
                            }}
                        </p>
                        <p class="desc">
                            {{ questions[step].question }}
                        </p>
                    </div>
                    <img class="img-question" :src="'../assets/img/salad.png'" alt="img" />
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
                                name="Вы"
                                :score="me.score"
                                count="0"
                                color="green"
                                img="../assets/img/ivan.png"
                            />
                            <p class="vs">VS</p>
                            <Player
                                name="Соперник"
                                :score="other.score"
                                count="0"
                                color="red"
                                img="../assets/img/ivan.png"
                            />
                        </div>
                    </div>

                    <div class="answs" v-if="questions.length">
                        <Button
                            @click="chooseAnswer(i)"
                            :disabled="me.selected !== null"
                            v-for="(question, i) in questions[step].answers"
                            :key="i"
                            :appearance="
                                me.selected === i ? 'selected' : 'blank'
                            "
                            stretched
                            >
                                <div class="answer__inner">
                                    {{question}}
                                    <span class="otherSelected" v-if="other.selected !== null && other.selected === i"></span>
                                </div>
                            </Button
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
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        BaseIcon,
        BurgerMenuIcon,
        LogoIcon,
    },
    data() {
        return {
            questions: [],
            time: "01:11",
            numberOfQuestion: 1,
            amountOfQuestions: 10,
            step: 0,
            me: {
                score: 0,
                selected: null,
            },
            other: {
                score: 0,
                selected: null
            }
        };
    },
    mounted() {
        this.socket = this.$nuxtSocket({
            name: 'main',
        });
        this.joinRoom(this.$route.params.id);
        this.socket.on('pushGameInfo', (msg, cb) => {
            console.log(msg);
            this.questions = msg.questions;
        });
        this.socket.on('otherPlayerChoseAnswer', ({ answerID }) => {
            this.other.selected = answerID;
            if (this.me.selected !== null) this.nextStep();
        })
    },
    methods: {
        async joinRoom(roomID) {
          if (roomID) {
            let userID = uuidv4();
            this.messageRxd = await this.socket.emitP('joinGameRoom', { userID, roomID });
          }
        },
        async chooseAnswer(i) {
            this.me.selected = i;
            this.socket.emitP('chooseAnswer', { answerID: i, roomID: this.$route.params.id });
            if (this.other.selected !== null) this.nextStep();
        },
        nextStep() {
            if (this.step < this.questions.length - 1) {
                if (this.me.selected === this.questions[this.step].rightAnswerID) {
                    this.me.score += 1;
                }
                if (this.other.selected === this.questions[this.step].rightAnswerID) {
                    this.other.score += 1;
                }
                setTimeout(() => {
                    this.me.selected = null;
                    this.other.selected = null;
                    this.step++;
                }, 2000);
            }
        }
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

.answer__inner {
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: center;
}
.otherSelected {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color:#ea425b;
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
