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
            <h2>Добро пожаловать в Quizza!</h2>
        </div>
        <div class="form-wrapper">
            <h1>Вход</h1>
            <form action="">
                <Input :placeholder="'Почта'" v-model:text="email"></Input>
                <Input :placeholder="'Пароль'" v-model:text="password"></Input>
                <Button @click="lala">Зарегистрироваться</Button>
            </form>
            <NuxtLink to="/login">Войти</NuxtLink>
        </div>
        <div class="circle circle-bottom">
            <p class="help-text">Войти с помощью</p>
            <div class="icons-wrapper">
                <button>
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="30" cy="30" r="30" fill="white" />
                        <path
                            d="M54 30.4459C54 28.872 53.8605 27.3777 53.6214 25.9233H31.108V34.9088H43.9985C43.4207 37.8574 41.7272 40.3479 39.2168 42.0413V48.0184H46.9073C51.4099 43.8544 54 37.718 54 30.4459Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M31.1081 53.8162C37.5632 53.8162 42.9625 51.6644 46.9073 48.0185L39.2169 42.0415C37.0652 43.4759 34.3357 44.3526 31.1081 44.3526C24.8721 44.3526 19.5924 40.1487 17.6996 34.4706H9.77014V40.6269C13.695 48.4369 21.764 53.8162 31.1081 53.8162Z"
                            fill="#34A853"
                        />
                        <path
                            d="M17.6997 34.4703C17.2016 33.0358 16.9426 31.5017 16.9426 29.9079C16.9426 28.314 17.2215 26.7799 17.6997 25.3454V19.1891H9.77019C8.13647 22.4167 7.20007 26.0427 7.20007 29.9079C7.20007 33.773 8.13647 37.399 9.77019 40.6266L17.6997 34.4703Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M31.1081 15.4636C34.6345 15.4636 37.7824 16.6789 40.2728 19.0498L47.0866 12.236C42.9625 8.37088 37.5632 6 31.1081 6C21.764 6 13.695 11.3793 9.77014 19.1893L17.6996 25.3456C19.5924 19.6674 24.8721 15.4636 31.1081 15.4636Z"
                            fill="#EA4335"
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.8 0H39.2C56 0 60 4 60 20.8V39.2C60 56 56 60 39.2 60H20.8C4 60 0 56 0 39.2V20.8C0 4 4 0 20.8 0Z"
                            fill="#2787F5"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M49.1357 20.6707C49.4137 19.7437 49.1357 19.0625 47.8126 19.0625H43.4376C42.3252 19.0625 41.8124 19.6509 41.5342 20.2998C41.5342 20.2998 39.3094 25.7228 36.1576 29.2454C35.1379 30.2651 34.6744 30.5895 34.1182 30.5895C33.8401 30.5895 33.4376 30.265 33.4376 29.3381V20.6707C33.4376 19.5583 33.1147 19.0625 32.1876 19.0625H25.3126C24.6175 19.0625 24.1994 19.5788 24.1994 20.0681C24.1994 21.1227 25.7752 21.3659 25.9376 24.3323V30.775C25.9376 32.1875 25.6825 32.4436 25.1263 32.4436C23.6432 32.4436 20.0354 26.9964 17.8957 20.7634C17.4764 19.5519 17.0558 19.0625 15.9376 19.0625H11.5626C10.3126 19.0625 10.0626 19.6509 10.0626 20.2998C10.0626 21.4586 11.5458 27.206 16.9688 34.8074C20.584 39.9985 25.6776 42.8125 30.3126 42.8125C33.0936 42.8125 33.4376 42.1875 33.4376 41.1109V37.1875C33.4376 35.9375 33.7011 35.688 34.5817 35.688C35.2306 35.688 36.343 36.0125 38.9387 38.5154C41.905 41.4817 42.3941 42.8125 44.0626 42.8125H48.4376C49.6876 42.8125 50.3126 42.1875 49.9521 40.9541C49.5575 39.7248 48.1413 37.9413 46.262 35.8271C45.2422 34.622 43.7127 33.3242 43.2492 32.6752C42.6003 31.841 42.7857 31.4701 43.2492 30.7286C43.2492 30.7286 48.5795 23.2199 49.1357 20.6707Z"
                            fill="white"
                        />
                    </svg>
                </button>
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

<style lang="scss" scoped>
.body {
    overflow: hidden;
}

h1 {
    font-size: 48px;
    margin-bottom: 35px;
    color: #ffbd00;
}

Input {
    margin-bottom: 20px;
}

h2 {
    font-weight: bold;
    font-size: 44px;
    max-width: 500px;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 55px;
}

.background-wrap {
    background-color: #00214e;
    height: 100vh;
    width: 100vw;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    & button {
        margin-top: 25px;
    }
}

.form-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & NuxtLink {
        color: white;
        font-size: 20px;
        font-weight: 300;
        text-decoration: none;
    }
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
    left: 0;
    height: 470px;
    width: 100vw;
    background: #ea425c;
    border-radius: 100%;
    display: flex;
    justify-content: center;
}

.circle-bottom {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    height: 470px;
    width: 100vw;
    background: #ffbd00;
    border-radius: 100%;
    display: flex;
    justify-content: center;
}

.help-text {
    position: absolute;
    top: 55px;
    font-weight: 600;
    font-size: 32px;
}

.icons-wrapper {
    width: 160px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 125px;
    & button {
        background: none;
        cursor: pointer;
    }
}

@media (max-width: 1000px) {
    .circle {
        height: 370px;
    }
    h2 {
        font-size: 32px;
        max-width: 320px;
    }
    h1 {
        font-size: 36px;
    }
    NuxtLink {
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

@media (max-width: 1250px) {
    .circle-top h2 {
        bottom: 55px;
    }
}
</style>
