<template>
	<Swiper
		:spaceBetween="30"
		:hashNavigation="{
			watchState: true,
		}"
		:navigation="{
			prevEl: prev,
			nextEl: next,
		}"
		:modules="modules"
		class="rt-slider slider"
		:effect="'coverflow'"
		:grabCursor="true"
		:centeredSlides="true"
		:loop="true"
		:slidesPerView="'auto'"
		:coverflowEffect="{
			rotate: 0,
			stretch: 0,
			depth: 100,
			modifier: 2.5,
			slideShadows: true,
		}"
		:initialSlide="0"
	>
		<SwiperSlide
			class="rt-slider-item"
			v-for="(slide, index) in sliderItems"
			:key="index"
		>
			<div class="rt-slider-item-title">
				Сайт “<span>{{ slide.title }}</span
				>”
			</div>
			<div class="rt-slider-item-description" v-html="slide.description"></div>
			<div class="rt-slider-item-bottom">
				<div class="rt-slider-item-bottom-details">
					<div class="rt-slider-item-price">
						От <span>{{ slide.price }}</span> ₽
					</div>
					<div class="rt-slider-item-deadlines">
						{{ slide.deadlines }}
					</div>
				</div>

				<div class="rt-slider-item-btn">
					<ArrowBtn :linkBtn="slide.href" />
				</div>
			</div>
		</SwiperSlide>
	</Swiper>

	<div ref="prev" class="swiper-btn-prev">
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			transform="rotate(180)"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.20696 20.7071C6.81643 20.3166 6.81643 19.6834 7.20696 19.2929L14.4998 12L7.20696 4.70712C6.81643 4.3166 6.81643 3.68343 7.20696 3.29291L7.91406 2.5858C8.30459 2.19528 8.93775 2.19528 9.32827 2.5858L17.6818 10.9394C18.2676 11.5251 18.2676 12.4749 17.6818 13.0607L9.32828 21.4142C8.93775 21.8048 8.30459 21.8048 7.91406 21.4142L7.20696 20.7071Z"
				></path>
			</g>
		</svg>
	</div>
	<div ref="next" class="swiper-btn-next">
		<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M7.20696 20.7071C6.81643 20.3166 6.81643 19.6834 7.20696 19.2929L14.4998 12L7.20696 4.70712C6.81643 4.3166 6.81643 3.68343 7.20696 3.29291L7.91406 2.5858C8.30459 2.19528 8.93775 2.19528 9.32827 2.5858L17.6818 10.9394C18.2676 11.5251 18.2676 12.4749 17.6818 13.0607L9.32828 21.4142C8.93775 21.8048 8.30459 21.8048 7.91406 21.4142L7.20696 20.7071Z"
				></path>
			</g>
		</svg>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import ArrowBtn from '@/components/all/buttons/ArrowBtn';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
	Pagination,
	Navigation,
	EffectCoverflow,
	Autoplay,
} from 'swiper/modules';

const props = defineProps(['sliderItems', 'navigation', 'pagination']);

const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];

const prev = ref(null);
const next = ref(null);
</script>

<style lang="scss">
.rt-slider {
	&-item {
		user-select: none;
		border-radius: 20px;
		display: flex;
		flex-direction: column;
		padding: 30px;
		transition: all 0.4s ease;
		background: linear-gradient(
			to bottom right,
			#313134,
			#292929,
			#303030,
			#303030
		);
		border: 1px solid var(--transparentlightGray);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: var(--transparentWhite40);
		span {
			color: var(--green);
		}
		&-title {
			font-size: 30px;
			line-height: 44px;
			text-align: center;
		}
		&-description {
			font-size: 17px;
			text-align: center;
			margin: 45px 0;
		}
		&-bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			&-ditails {
				display: flex;
				flex-direction: column;
			}
		}
		&-btn {
			.arrow-btn {
				&-a {
					svg {
						stroke: var(--green);
					}
				}
				&-a:hover {
					svg {
						stroke: var(--black);
					}
				}
			}
		}
		&-price {
			font-size: 20px;
			span {
				font-size: 24px;
				font-weight: 600;
			}
		}
		&-deadlines {
			font-size: 17px;
			color: var(--darkGray);
			margin-top: 5px;
		}
	}
	.swiper-slide {
		min-width: 350px !important;
		height: 520px !important;
		max-width: 430px !important;
		color: #ffffff2d;
		transition: all 0.4s ease;
		&-shadow-coverflow {
			border-radius: 20px;
		}
	}

	.swiper-slide-active {
		transition: all 0.4s ease;
		color: var(--lightGray);
	}
}
.swiper-btn-next,
.swiper-btn-prev {
	position: absolute;
	margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
	z-index: 10;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--black);
	border: 2px solid var(--darkGreen);
	border-radius: 100%;
	color: var(--green);
	font-weight: 900;
	width: 45px;
	height: 45px;
	top: var(--swiper-navigation-top-offset, 50%);
	transition: all 0.4s;
	svg {
		width: 25px;
		fill: var(--green);
		stroke: var(--green);
	}
}

.swiper-btn-next::before {
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
.swiper-btn-prev::before {
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

.swiper-btn-prev:hover {
	transform: scale(1.1);
}
.swiper-btn-next:hover {
	transform: scale(1.1);
}

.swiper-btn-prev {
	left: var(--swiper-navigation-sides-offset, 60px);
	svg {
		margin-right: 2px;
	}
}
.swiper-btn-next {
	right: var(--swiper-navigation-sides-offset, 60px);
	svg {
		margin-left: 2px;
	}
}

// .swiper-btn-next:after {
// 	content: '❯';
// 	font-size: 22px;
// }
// .swiper-btn-prev:after {
// 	content: '❮';
// 	font-size: 22px;
// }

@media (max-width: 769px) {
	.rt-slider .swiper-slide-active {
		transform: scale(1) !important;
	}
	.swiper-btn-next,
	.swiper-btn-prev {
		top: var(--swiper-navigation-top-offset, 93%);
	}
	.swiper-btn-prev {
		left: var(--swiper-navigation-sides-offset, 30%);
	}
	.swiper-btn-next {
		right: var(--swiper-navigation-sides-offset, 30%);
	}
}
@media (max-width: 577px) {
	.rt-slider {
		.swiper-slide {
			min-width: 200px !important;
			height: 500px !important;
			width: 100% !important;
		}
		&-item {
			&-title {
				font-size: max(18px, min(25px, var(--base-scale) * 5));
			}
			&-description {
				margin: 0;
				display: -webkit-box;
				-webkit-line-clamp: 7;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
			&-bottom {
				flex-direction: column;
				align-items: unset;
				&-details {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 20px;
				}
			}
		}
	}
	.swiper-btn-next,
	.swiper-btn-prev {
		top: var(--swiper-navigation-top-offset, 88%);
	}
}
@media (max-width: 376px) {
	.swiper-btn-prev {
		left: var(--swiper-navigation-sides-offset, 20%);
	}
	.swiper-btn-next {
		right: var(--swiper-navigation-sides-offset, 20%);
	}
}
@media (max-width: 341px) {
	.rt-slider {
		.swiper-slide {
			min-width: 200px !important;
			height: 500px !important;
			width: 100% !important;
		}
		&-item {
			&-bottom {
				&-details {
					flex-direction: column;
				}
			}
		}
	}
	.swiper-btn-prev {
		left: var(--swiper-navigation-sides-offset, 10%);
	}
	.swiper-btn-next {
		right: var(--swiper-navigation-sides-offset, 10%);
	}
}
</style>
