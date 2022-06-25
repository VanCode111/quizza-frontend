<template>
    <div class="wrapper">
      <h1 class="circle-heading">Игра с друзьями</h1>
      <h2>Пригласите своих друзей вместе играть в квиз</h2>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col cols="6">
            <div class="gamemode">
              <p class="text">Игровой режим</p>
              <div>
                  <Button class="modebtn">Режим 1</Button>
                  <Button class="modebtn" appearance="orange">Режим 2</Button>
              </div>
            </div>
        </v-col>
        <v-col>
            <div class="gametime">
                <div class="texts">
                    <p class="text">Количество раундов</p>
                    <p class="text">{{ rounds }}</p>
                </div>
                <div class="slider-container">
                    <Slider
                        class="slider"
                        v-model:modelValue="rounds"
                        :min="3"
                        :max="20"
                    ></Slider>
                </div>
            </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
        >
          <div class="createRoom">
            <Button @click="createLink" class="link-btn">Создать комнату</Button>
            <nuxt-link class="createRoom__link" v-if="roomID" :to="`/game/${roomID}`" @click="copyLink">Ссылка: {{ roomID }}</nuxt-link>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
            <div class="joinRoom">
                <Input :placeholder="'Ссылка комнаты'" v-model:text="roomLink"></Input>
                <Button @click="joinRoom(roomLink)">Присоединиться</Button>
            </div>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
            rounds: 15,
            slider: 11,
            roomLink: null,
            roomID: null,
            userID: null
        };
    },
    mounted() {
        if (!localStorage.userID) {
            localStorage.userID = uuidv4();
        }
        this.userID = localStorage.userID;
        this.socket = this.$nuxtSocket({
            name: 'main',
        });
        /* Listen for events: */
        this.socket
        .on('startGame', (msg, cb) => {
            this.$router.push({path: `/game/${msg.roomID}`, params: {id: msg.roomID}})
            console.log(msg, cb);
        });
    },
    methods: {
        lala() {
            console.log("Ваня красавчик");
        },
        createLink() {
          let roomID = uuidv4();
          this.roomID = roomID;
        //   this.joinRoom(roomID);
        },
        copyLink() {
          navigator.clipboard.writeText(this.roomID);
        //   this.joinRoom(this.roomID);
        },
        async joinRoom(roomID) {
          if (roomID) {
            this.messageRxd = await this.socket.emitP('joinGameRoom', { userID: this.userID, roomID });
          }
        },
    },
};
</script>

<style lang="scss" scoped>
.createRoom {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
}

h2 {
  text-align: center;
  max-width: 50%;
  margin: 0 auto;
  color: #fff;
}
.middle-wrapper {
    display: flex;
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
    background-color: #ffbd00;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    gap: 20px;
    padding-top: 40px;
    flex-direction: column;
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

.joinRoom {
  display: flex;
  gap: 5px;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
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
    color: white;
    text-align: center;
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
    font-weight: 400;
    font-size: 22px;
    color: white;
    text-align: center;
}

.vs-letters {
    font-size: 44px;
    font-weight: bold;
    color: #ea425b;
}

.createRoom__link {
  cursor: pointer;
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
    }
    h2.circle-subheading {
        font-size: 20px;
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
