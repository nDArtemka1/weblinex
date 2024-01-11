<template>
	<Swiper
		:slidesPerView="'auto'"
		:spaceBetween="70"
		:hashNavigation="{
			watchState: true,
		}"
		:pagination="{
			clickable: true,
		}"
		:navigation="navigation"
		:modules="modules"
		class="slider"
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
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const props = defineProps(['sliderItems', 'navigation', 'pagination']);

const modules = [Pagination, Navigation];
</script>

<style lang="scss">
.slider {
	position: relative;
	max-height: 100%;
	height: 100%;
	overflow: unset;
	margin-left: 0;
	margin-right: 0;
	border-radius: 20px;
	cursor: pointer;
	&-item {
		width: 100%;
		max-height: 100%;
		height: 100%;
		img {
			min-width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 20px;
		}
	}

	.swiper-button-next,
	.swiper-button-prev {
		background-color: var(--black);
		border: 2px solid var(--darkGreen);
		border-radius: 100%;
		color: var(--green);
		font-weight: 900;
		width: 45px;
		height: 45px;
		top: var(--swiper-navigation-top-offset, 50%);
		transition: all 0.4s;
	}

	.swiper-button-next::before {
		content: '';
		border-radius: 100%;
		width: 55px;
		height: 55px;
		border: 1px solid var(--darkGreen);
		position: absolute;
		top: 50%;
		left: 49.5%;
		transform: translate(-50%, -50%);
		opacity: 1;
		transition: all 0.3s ease-in-out 0s;
	}
	.swiper-button-prev::before {
		content: '';
		border-radius: 100%;
		width: 55px;
		height: 55px;
		border: 1px solid var(--darkGreen);
		position: absolute;
		top: 50%;
		left: 49.5%;
		transform: translate(-50%, -50%);
		opacity: 1;
		transition: all 0.3s ease;
	}

	.swiper-button-prev:hover:before {
		width: 60px;
		height: 60px;
	}
	.swiper-button-next:hover:before {
		width: 60px;
		height: 60px;
	}

	.swiper-button-prev {
		left: var(--swiper-navigation-sides-offset, 15px);
	}
	.swiper-button-next {
		right: var(--swiper-navigation-sides-offset, 15px);
	}

	.swiper-button-next:after {
		content: '❯';
		font-size: 22px;
	}
	.swiper-button-prev:after {
		content: '❮';
		font-size: 22px;
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
}
</style>
