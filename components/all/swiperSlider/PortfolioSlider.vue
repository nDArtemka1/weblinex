<template>
    <Swiper
        :slidesPerView="2"
        :spaceBetween="40"
        :hashNavigation="{
            watchState: true,
        }"
        :pagination="{
            clickable: true,
        }"
        :navigation="false"
        :modules="modules"
        class="portfolio-slider"
        :initialSlide="1"
    >
        <SwiperSlide
            class="slider-item"
            v-for="(slide, index) in sliderItems"
            :key="index"
        >
            <nuxt-img :src="slide.path" :alt="slide.alt" />
            <div v-if="slide.overlay" class="overlay">
                <div class="overlay-btn">
                    <span class="underline">Подробнее</span>
                </div>
            </div></SwiperSlide
        >
    </Swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const props = defineProps(["sliderItems", "navigation", "pagination"]);

const modules = [Pagination, Navigation];
</script>

<style lang="scss">
.portfolio-slider {
    position: relative;
    max-height: 100%;
    height: 100%;
    overflow: unset;
    margin-left: 0;
    margin-right: 0;
    border-radius: 20px;
    cursor: pointer;
    user-select: none;
    &-item {
        width: 100%;
        max-height: 100%;
        height: 100%;
        user-select: auto;
        border-radius: 10px;
    }
    .swiper-slide {
        border-radius: 20px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
    .swiper-pagination-bullet {
        width: 30px;
        height: 5px;
        border-radius: 20px;
        background: var(--white);
        opacity: 1;
    }
    .swiper-pagination-bullet-active {
        background: var(--green);
    }
    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-horizontal > .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal {
        bottom: var(--swiper-pagination-bottom, -60px);
    }
}
</style>
