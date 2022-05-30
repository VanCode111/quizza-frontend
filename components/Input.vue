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
</style>
