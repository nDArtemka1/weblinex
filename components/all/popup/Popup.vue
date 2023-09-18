<template>
    <div ref="popup_wrapper" class="popup_wrapper">
        <div class="popup">
            <div class="popup-header">
                <div class="popup-header-title">{{ popupTitle }}</div>
                <div
                    class="popup-header-close"
                    @click="modalActive = !modalActive"
                ></div>
            </div>
            <div class="popup-content"><slot /></div>
        </div>
    </div>
</template>

<script setup>
const modalActive = useModalActive();
const popupTitle = usePopupTitle();
</script>

<script>
export default {
    data() {
        return {};
    },
    mounted() {
        // Клик по серой области кроме содержимого
        const vm = this;
        document.addEventListener("click", function (item) {
            if (item.target === vm.$refs.popup_wrapper) {
                vm.closePopup();
            }
        });
    },
    methods: {
        closePopup() {
            this.$emit("closePopup");
        },
    },
};
</script>

<style lang="scss">
.popup_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    background: var(--transparentBlack70);
    z-index: 151;
}
.popup {
    padding: 20px;
    position: fixed;
    color: var(--white);
    background: linear-gradient(
        90deg,
        rgba(49, 49, 52, 1) 0%,

        rgba(18, 71, 60, 1) 50%,
        rgba(18, 71, 60, 1) 75%,
        rgba(49, 49, 52, 1) 100%
    );
    box-shadow: 0 0 10px 0 rgb(46 236 198 / 30%);
    border: 0.5px solid rgb(46 236 198 / 50%);
    border-radius: 10px;
    z-index: 101;
    overflow: hidden;
    &-header {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        &-title {
            user-select: none;
            margin-left: 25px;
            height: 40px;
            margin-bottom: -50px;
            font-size: 33px;
            font-weight: 600;
            background: repeating-linear-gradient(
                -45deg,
                var(--green) 5%,
                var(--white) 10%,
                var(--green) 15%,
                var(--white) 5%,
                var(--green) 15%
            );
            background-size: 600vw 600vw;
            color: transparent;
            background-clip: text;
            animation: slide 10s linear infinite forwards;
            text-shadow: 0 0 20px var(--shadowGreen);
        }
        @keyframes slide {
            0% {
                background-position-x: 0%;
            }
            100% {
                background-position-x: 600vw;
            }
        }

        &-close:before {
            content: "✖";
            display: block;
            font-size: 30px;
            cursor: pointer;
            transition: all 0.4s;
            color: var(--green);
        }
        &-close:hover:before {
            transform: rotate(90deg);
        }
    }
    &-content {
        padding: 0 25px;
        .form {
            margin-top: 35px;
        }
    }
}
</style>
