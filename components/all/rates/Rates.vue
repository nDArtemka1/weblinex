<template>
    <section id="4" class="rates">
        <Canvas :id="canvas.id" />
        <div class="container-content">
            <div class="rates-title" v-motion="visOnceBottom">
                <div class="title">
                    <h2>Тарифы</h2>
                </div>
            </div>
            <div class="container" v-motion="visOnceBottom">
                <div class="rates-slider">
                    <RatesSlider
                        :navigation="true"
                        :sliderItems="ratesSliderItems"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import RatesSlider from "@/components/all/swiperSlider/RatesSlider";
import Canvas from "@/components/all/canvas/Canvas";
import visOnceBottom from "/assets/js/motions/visOnceBottom";

const canvas = ref({
    id: "two",
});

const ratesSliderItems = ref([
    {
        id: 1,
        title: "Landing page",
        description:
            "<span>Одностраничный сайт (Landing Page)</span> – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Мы умеем создавать веб-ресурсы, полностью готовые к наплыву лавины посетителей. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.",
        price: "25.000",
        deadlines: "От 17 дней",
        href: "#",
    },
    {
        id: 2,
        title: "Визитка",
        description:
            "<span>Сайт-визитка</span> - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.",
        price: "30.000",
        deadlines: "От 5 дней",
        href: "#",
    },
    {
        id: 3,
        title: "Каталог",
        description:
            "<span>Сайт-каталог</span> – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.",
        price: "60.000",
        deadlines: "От 15 дней",
        href: "#",
    },
    {
        id: 4,
        title: "Корп.сайт",
        description:
            "<span>Корпоративный сайт</span> – это крупномасштабный портал, который создается не только для контакта организации с клиентами, но и для обмена информацией, мнениями, идеями между сотрудниками и руководством. Электронный ресурс такого типа – лицо компании, солидный «костюм», вызывающий у партнёров и контрагентов уважение и интерес.",
        price: "60.000",
        deadlines: "От 17 дней",
        href: "#",
    },
    {
        id: 5,
        title: "Интернет магизин",
        description:
            "<span>Сайт-визитка</span> - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.",
        price: "75.000",
        deadlines: "От 30 дней",
        href: "#",
    },
    {
        id: 6,
        title: "Индивидуальный",
        description:
            "Мы готовы выслушать вашу идею, и выполнить задание. Цена проекта будет складываться от ее технического задания и сроков выполнения.",
        price: "?",
        deadlines: "От ? дней",
        href: "#",
    },
]);
</script>

<style lang="scss">
.rates {
    position: relative;

    &-title {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &-slider {
        height: 650px;
        margin: 7% 10%;
        overflow: hidden;
    }
}
</style>
