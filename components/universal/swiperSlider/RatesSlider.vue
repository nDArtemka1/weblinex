<template>
	<div>
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
				<div
					class="rt-slider-item-description"
					v-html="slide.description"
				></div>
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

		<div ref="prev" class="swiper-btn-prev"></div>
		<div ref="next" class="swiper-btn-next"></div>
	</div>
</template>

<script setup>
import { ref } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import ArrowBtn from '@/components/all/buttons/ArrowBtn';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

const props = defineProps(['sliderItems', 'navigation', 'pagination']);

const modules = [Pagination, Navigation, EffectCoverflow];

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
		color: var(--white);
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
}
.swiper-btn-next {
	right: var(--swiper-navigation-sides-offset, 60px);
}

.swiper-btn-next:after {
	content: '❯';
	font-size: 22px;
}
.swiper-btn-prev:after {
	content: '❮';
	font-size: 22px;
}

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
