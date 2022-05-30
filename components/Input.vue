<template>
    <input
        class="input"
        :class="computedClasses"
        type="text"
        :placeholder="placeholder"
        :value="text"
        @input="changeInput"
    />
</template>

<script>
export default {
    emits: ["update:text"],
    props: {
        placeholder: {
            type: String,
        },
        stretched: {
            type: Boolean,
        },
        text: {
            type: String,
        },
    },
    methods: {
        changeInput(e) {
            this.$emit("update:text", e.target.value);
        },
    },
    computed: {
        computedClasses() {
            return [
                {
                    stretched: this.stretched,
                },
            ];
        },
    },
};
</script>

<style lang="scss">
.input {
    padding: 15px 30px;
    border-radius: 100px;
    border: none;
    width: 547px;
    border-bottom: 6px solid;
    font-size: 22px;
    font-weight: 500;
    background-color: #fff8e2;
    border-bottom-color: #ffbd00;
    &.stretched {
        width: 100%;
    }
}

// &:active {
//     transform: translateY(3px);
//     border-bottom-width: 3px;
//     margin-bottom: 3px;
// }
// &_appearance {
//     &_orange {
//         background-color: #f4802e;
//         border-bottom-color: rgba(181, 40, 62, 0.5);
//     }
//     &_blank {
//         background-color: #fff8e2;
//         color: #00214e;
//         border-bottom-color: #ffbd00;
//     }
//     &_selected {
//         background-color: #ffbd00;
//         border-bottom-color: #c68754;
//     }
//     &_success {
//         background-color: #28d239;
//         border-bottom-color: #1d9c2a;
//     }
// }
// &.stretched {
//     width: 100%;
// }
</style>
