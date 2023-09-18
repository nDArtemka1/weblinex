<template>
    <div class="header-content" v-motion="entSlideLeft">
        <div class="header-info">
            <div class="header-info-border">
                <div class="header-title-shadow">
                    <h1 class="header-title">
                        РАЗРАБОТКА САЙТОВ<br />
                        ДЛЯ ВАШЕГО БИЗНЕСА
                    </h1>
                </div>

                <div class="header-promo">
                    Мы - студия web-разработки, работаем уже более 3-х лет,<br />
                    готовы разработать для вас сайт в кротчайшие сроки.
                </div>
            </div>
        </div>

        <div class="header-modal-btn">
            <div
                @click="
                    (modalActive = !modalActive),
                        (popupTitle = 'Остались вопросы?')
                "
                class="arrow-btn"
            >
                <div class="arrow-btn-a">
                    <span>Подробнее</span>
                    <span class="material-symbols-outlined chevron-right">
                        chevron_right
                    </span>
                </div>
            </div>

            <div class="header-modal-btn-qw">Остались вопросы?</div>
        </div>
    </div>
</template>

<script setup>
import entSlideLeft from "/assets/js/motions/entSlideLeft";

const modalActive = useModalActive();
const popupTitle = usePopupTitle();
</script>

<style lang="scss">
.header {
    &-content {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        will-change: transition;
    }
    &-info {
        grid-column: 1 / span 6;
        z-index: 1;
        margin-right: 2vw;
        &-border {
            h1 {
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
        }
    }
    &-title {
        font-size: 56px;
        font-weight: 800;
        line-height: 64px;
        margin-top: 25px;
        user-select: none;
    }
    &-promo {
        font-size: 24px;
        font-weight: 300;
        line-height: 36px;
        margin: 25px 0;
        color: var(--lightGray);
        user-select: none;
    }
    &-modal-btn {
        font-size: 18px;
        font-weight: 500;
        grid-column: 1 / span 3;
        grid-row: 2 / span 2;
        margin-top: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        &-qw {
            margin-left: 25px;
            color: var(--darkGray);
            cursor: pointer;
            transition: all 0.3s ease;
        }
        &-qw:hover {
            color: var(--lightGray);
        }
    }
}
</style>
