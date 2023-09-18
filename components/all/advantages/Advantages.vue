<template>
    <section ref="main1" id="2" class="advantages">
        <Canvas :id="canvas.id" />
        <div class="container-content advantages-wrap">
            <div class="advantages-title" v-motion="visOnceLeft">
                <div class="title">
                    <h2>
                        Причины сотрудничать <br />
                        с нами
                    </h2>
                    <div class="title-info">
                        <p>
                            Пока конкуренты говорят о том, что они лучшие - мы
                            это доказываем <br />
                            делом.
                        </p>
                        <p>
                            Вы можете ознакомиться с информацией о нас и
                            посмотреть наше <br />
                            портфолио
                        </p>
                    </div>
                </div>
                <div class="advantages-title-btn-mt">
                    <NuxtLink class="advantages-title-btn" to="#"
                        ><span>Портфолио</span>
                        <div class="advantages-title-btn-wrapper">
                            Портфолио
                        </div></NuxtLink
                    >
                </div>
            </div>
            <div class="advantages-item-main" v-motion="visOnceRight">
                <div class="advantages-item">
                    <div class="advantages-item-title">Приемлимые цены</div>
                    <div class="advantages-item-description">
                        Мы максимально оптимизируем наш труд, для того, чтобы
                        цены были доступными.
                    </div>
                    <div class="advantages-item-img">
                        <nuxt-img src="/advantages/money.png" alt="money" />
                    </div>
                </div>
            </div>

            <div class="advantages-items">
                <div
                    class="advantages-item"
                    v-for="(item, index) in advantagesItems"
                    :key="index"
                    :data-index="index"
                >
                    <div class="advantages-item-title">{{ item.title }}</div>
                    <div class="advantages-item-description">
                        {{ item.description }}
                    </div>
                    <div class="advantages-item-img">
                        <nuxt-img
                            :src="'/advantages/' + item.imgPath"
                            :alt="item.imgAlt"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onUpdated, onUnmounted, ref, watch } from "vue";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import visOnceLeft from "/assets/js/motions/visOnceLeft";
import visOnceRight from "/assets/js/motions/visOnceRight";
import Canvas from "@/components/all/canvas/Canvas";

import { useTransitionComposable } from "@/composables/transition-composable";

const { transitionState } = useTransitionComposable();
const main1 = ref();
let ctx;
let smoother;

const canvas = ref({
    id: "can-One",
});

const advantagesItems = ref([
    {
        id: 2,
        title: "В сроки сдаем работу!",
        description:
            "Расписываем каждый этап по срокам, и придерживаемся дедлайнов.",
        imgPath: "watch.png",
        imgAlt: "watch",
    },
    {
        id: 3,
        title: "Команда специалистов",
        description:
            "В нашей команде множество специалистов, и каждый из них хорошо знает свое дело.",
        imgPath: "comand.png",
        imgAlt: "comand",
    },
    {
        id: 4,
        title: "Консультация перед заказом",
        description:
            "Наши менеджеры готовы помочь вам, а так же ответить на ваши вопросы.",
        imgPath: "support.png",
        imgAlt: "support",
    },
]);

watch(
    () => transitionState.transitionComplete,
    (newValue) => {
        if (newValue) {
            ctx = gsap.context((self) => {
                let itemsL = gsap.utils.toArray(
                    ".advantages-items .advantages-item"
                );
                gsap.to(itemsL, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: ".advantages-items",
                        start: "20% 100%",
                        //   scrub: true,
                    },
                });
            }, main1.value); // <- Scope!
        }
    }
);

onUnmounted(() => {
    ctx.revert();
});
</script>

<style lang="scss">
.advantages {
    position: relative;

    &-wrap {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 35px;
        position: relative;
    }
    &-title {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
        padding-top: 50px;
        position: relative;
        will-change: transform;
        &-btn {
            cursor: pointer;
            margin-top: 70px;
            position: relative;
            padding: 30px;
            span {
                padding: 15px 43px;
                border: 1.5px solid var(--green);
                border-radius: 5px;
                color: var(--white);
                transition: all 0.5s ease;
                box-shadow: 0 0 20px var(--shadowGreen);
                background-color: var(--black);
            }
            &-wrapper {
                position: absolute;
                padding: 15px 43px;
                border: 1.5px solid var(--green);
                border-radius: 2px;
                background-color: var(--black);
                color: var(--black);
                z-index: -1;
                bottom: 0;
                left: 40px;
            }
            &-mt {
                margin-top: 70px;
            }
        }
        &-btn:hover {
            span {
                background-color: var(--green);
                color: var(--black);
            }
        }
    }
    &-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column: 1 / span 3;
        grid-gap: 35px;
        margin-top: -35px;
        user-select: none;
    }
    &-item {
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 20px;
        height: 400px;
        background: linear-gradient(
            to bottom right,
            rgba(130, 130, 130, 1),
            rgba(50, 50, 50, 1)
        );
        border: 1px solid var(--transparentlightGray);
        overflow: hidden;
        transform: translate(0px, 150px);
        opacity: 0;
        &-title {
            font-size: 26px;
            font-weight: 700;
            line-height: 32px;
        }
        &-description {
            margin: 25px 0;
            line-height: 20px;
        }
        &-main {
            margin-top: 50px;
            will-change: transform;
            user-select: none;
            .advantages-item {
                opacity: 1;
                background: linear-gradient(
                    to bottom right,
                    #527791,
                    #325597,
                    #193895
                );
                transform: translate(0px, 0px);
            }
        }
        &-img {
            display: flex;
            justify-content: flex-end;
            margin-right: -20px;
            margin-top: 47px;
        }
    }
    &-item:first-child {
        img {
            margin-top: 20px;
        }
    }
}
</style>
