<template>
    <button @click="click" class="btn" :class="computedClasses">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        appearance: {
            type: String,
            default: "error",
        },
        stretched: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        computedClasses() {
            return [
                `btn_appearance_${this.appearance}`,
                {
                    stretched: this.stretched,
                },
            ];
        },
    },
    methods: {
        click() {},
    },
};
</script>

<style lang="scss">
.btn {
    white-space: nowrap;
    padding: 16px 49px;
    border-radius: 100px;
    border: none;
    border-bottom: 6px solid;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    background-color: #ea425b;
    color: #fff;
    border-bottom-color: #b5283e;
    &:active {
        transform: translateY(3px);
        border-bottom-width: 3px;
        margin-bottom: 3px;
    }
    &_appearance {
        &_orange {
            background-color: #f4802e;
            border-bottom-color: rgba(181, 40, 62, 0.5);
        }
        &_blank {
            background-color: #fff8e2;
            color: #00214e;
            border-bottom-color: #ffbd00;
        }
        &_selected {
            background-color: #ffbd00;
            border-bottom-color: #c68754;
        }
        &_success {
            background-color: #28d239;
            border-bottom-color: #1d9c2a;
        }
    }
    &.stretched {
        width: 100%;
    }
}
</style>
