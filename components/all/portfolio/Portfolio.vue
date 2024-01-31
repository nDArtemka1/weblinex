<template>
	<section id="3" class="portfolio container-content">
		<div
			class="section-title fadeoutbottom"
			v-animateonscroll="{
				enterClass: 'fadeinbottom',
			}"
			:style="{ transitionDelay: '50ms' }"
		>
			<div class="title">
				<h2>Наше портфолио</h2>
				<div class="title-info">
					<p>
						В данном портфолио вы сможете увидеть кейсы наших работ на 2022 -
						2023 год
					</p>
				</div>
			</div>
		</div>
		<div
			class="portfolio-sliders fadeoutbottom"
			v-animateonscroll="{
				enterClass: 'fadeinbottom',
			}"
			:style="{ transitionDelay: '50ms' }"
		>
			<div class="portfolio-slider">
				<PortfolioSlider
					:navigation="true"
					:sliderItems="portfolioSliderItems"
				/>
			</div>
		</div>

		<div class="portfolio-btn">
			<PrimaryBtn :textBtn="textBtn" :linkBtn="linkBtn" />
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import PortfolioSlider from '@/components/universal/swiperSlider/PortfolioSlider';
import PrimaryBtn from '@/components/all/buttons/PrimaryBtn';

const textBtn = ref('Смотреть все проекты');
const linkBtn = ref('#');

const portfolioSliderItems = ref([
	{ id: 1, path: '/portfolio/1.webp', alt: '1', overlay: true },
	{
		id: 2,
		path: '/portfolio/2.webp',
		alt: '2',
		overlay: true,
	},
	{ id: 3, path: '/portfolio/3.webp', alt: '3', overlay: true },
	{
		id: 4,
		path: '/portfolio/4.webp',
		alt: '4',
		overlay: true,
	},
	{
		id: 5,
		path: '/portfolio/5.webp',
		alt: '5',
		overlay: true,
	},
	{
		id: 6,
		path: '/portfolio/6.webp',
		alt: '6',
		overlay: true,
	},
	{
		id: 7,
		path: '/portfolio/7.webp',
		alt: '7',
		overlay: true,
	},
]);
</script>

<style lang="scss">
.portfolio {
	&-title {
		flex-direction: column;
		grid-column: 1 / span 7;
		text-align: center;
	}
	&-btn {
		margin-top: 100px;
		display: flex;
		justify-content: center;
	}
}
</style>
