<template>
    <div class="arrows">
        <button @click="decrease">
            <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10.5468 18.567C11.2062 17.9155 11.2068 16.8509 10.5481 16.1987L5.48681 11.1872C4.69641 10.4046 4.69641 9.12747 5.48681 8.34485L10.5481 3.33338C11.2068 2.68116 11.2062 1.61662 10.5468 0.965107V0.965107C9.89804 0.324137 8.85444 0.324136 8.20568 0.965107L0.737856 8.34332C-0.0546086 9.12627 -0.0546089 10.4058 0.737856 11.1888L8.20568 18.567C8.85444 19.2079 9.89804 19.2079 10.5468 18.567V18.567Z"
                    fill="white"
                />
            </svg>
        </button>
        <p>{{ rounds }}</p>
        <button @click="increase">
            <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1.34663 18.567C0.687211 17.9155 0.68663 16.8509 1.34534 16.1987L6.40662 11.1872C7.19702 10.4046 7.19702 9.12747 6.40662 8.34485L1.34534 3.33338C0.686629 2.68116 0.687211 1.61662 1.34663 0.965107C1.99539 0.324137 3.039 0.324136 3.68775 0.965107L11.1556 8.34332C11.948 9.12627 11.948 10.4058 11.1556 11.1888L3.68775 18.567C3.039 19.2079 1.99539 19.2079 1.34663 18.567Z"
                    fill="white"
                />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    emits: ["update:rounds"],
    methods: {
        increase() {
            if (this.rounds < 30) {
                this.$emit("update:rounds", this.rounds + 1);
            }
        },
        decrease() {
            if (this.rounds > 5) {
                this.$emit("update:rounds", this.rounds - 1);
            }
        },
    },
    props: {
        rounds: Number,
    },
};
</script>

<style lang="scss">
.arrows {
    height: 35px;
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & button {
        background-color: #ea425b;
        width: 31px;
        height: 31px;
        border-radius: 50%;
        display: flex;
        justify-content: center;

        align-items: center;
        cursor: pointer;
    }
    & p {
        font-size: 22px;
        font-weight: 600;
    }
}
</style>
