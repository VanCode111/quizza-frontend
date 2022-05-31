<template>
    <div class="slider-container" :class="computedClasses">
        <span class="slider-bar"
            ><span class="slider-fill-container"
                ><span
                    ref="sliderFill"
                    class="slider-fill"
                    :style="{ width: computedFillWidth }"
                ></span></span
        ></span>
        <input
            class="slider"
            type="range"
            ref="slider"
            :min="min"
            :max="max"
            :value="modelValue"
            @input="inputSlider"
        />
    </div>
</template>

<script>
export default {
    emits: ["update:modelValue"],
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        modelValue: [Number, String],
        stretched: Boolean,
    },
    methods: {
        inputSlider(e) {
            this.$emit("update:modelValue", e.target.value);
        },
    },
    computed: {
        computedFillWidth() {
            return `calc(25px + ${
                ((this.modelValue - this.min) / (this.max - this.min)) * 100 +
                "%"
            })`;
        },
        computedClasses() {
            return [{ stretched: this.stretched }];
        },
    },
};
</script>

<style lang="scss" scoped>
.slider-container {
    z-index: 5;
    &.stretched {
        width: 100%;
    }
}
.slider-container {
    position: relative;
    width: 351px;
    height: 15px;
    border-radius: 100px;
}

.slider-fill {
    position: absolute;
    background-color: #ea425c;
    left: 0;
    top: 0px;
    border-radius: 100px;
    height: 15px;
}

.slider-fill-container {
    width: calc(100% - 25px);
    height: 15px;
    overflow: hidden;
    position: absolute;
    left: 0;
    border-radius: 100px;
    top: 0px;
}

.slider-bar {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0px;
    border-radius: 100px;
    height: 15px;
    width: 100%;
    background-color: #00214e;
}

.slider {
    outline: none;
    border: none;
    width: calc(100%);
    height: 15px;
    background-color: transparent;
    box-sizing: border-box;
    -webkit-appearance: none;

    &::-webkit-slider-thumb {
        box-sizing: border-box;
        -webkit-appearance: none;
        width: 50px;
        height: 50px;
        border-radius: 100px;
        cursor: pointer;
        background: url("@/assets/img/donut.svg") no-repeat center;
        background-color: #ea425c;
        z-index: 3;
        background-size: cover;
    }
}
</style>
