<template>
	<section id="2" class="advantages">
		<div class="container-content advantages-wrap">
			<div class="advantages-title" v-if="viewport.isGreaterThan('tablet')">
				<div class="title">
					<h2 v-motion="visOnceLeft">
						Причины сотрудничать <br />
						с нами
					</h2>
					<div class="title-info">
						<p v-motion="visOnceLeft">
							Пока конкуренты говорят о том, что они лучшие - мы это доказываем
							<br />
							делом.
						</p>
						<p v-motion="visOnceLeft">
							Вы можете ознакомиться с информацией о нас и посмотреть наше
							<br />
							портфолио
						</p>
					</div>
				</div>
				<div class="advantages-title-btn-mt" v-motion="visOnceBottom">
					<NuxtLink class="advantages-title-btn" to="#"
						><span>Портфолио</span>
						<div class="advantages-title-btn-wrapper">Портфолио</div></NuxtLink
					>
				</div>
			</div>
			<div class="advantages-title" v-if="viewport.isLessThan('tablet')">
				<div class="title">
					<h2>
						Причины сотрудничать <br />
						с нами
					</h2>
					<div class="title-info">
						<p>
							Пока конкуренты говорят о том, что они лучшие - мы это доказываем
							<br />
							делом.
						</p>
						<p>
							Вы можете ознакомиться с информацией о нас и посмотреть наше
							<br />
							портфолио
						</p>
					</div>
				</div>
				<div class="advantages-title-btn-mt">
					<NuxtLink class="advantages-title-btn" to="#"
						><span>Портфолио</span>
						<div class="advantages-title-btn-wrapper">Портфолио</div></NuxtLink
					>
				</div>
			</div>
			<div class="advantages-item-main" v-motion="visOnceRight">
				<div class="advantages-item">
					<div class="advantages-item-title">Приемлимые цены</div>
					<div class="advantages-item-description">
						Мы максимально оптимизируем наш труд, для того, чтобы цены были
						доступными.
					</div>
					<div
						class="advantages-item-img"
						:style="{
							backgroundImage: `url('/images/advantages/money.png')`,
						}"
					></div>
				</div>
			</div>

			<div class="advantages-items" v-if="viewport.isGreaterThan('tablet')">
				<div
					class="advantages-item"
					v-for="(item, index) in advantagesItems"
					:key="index"
					v-motion
					:initial="{
						opacity: 0,
						y: 100,
					}"
					:visibleOnce="{
						opacity: 1,
						y: 0,
						transition: {
							type: 'damping',
							damping: 15,
						},
					}"
					:delay="++index * 200"
				>
					<div class="advantages-item-title">{{ item.title }}</div>
					<div class="advantages-item-description">
						{{ item.description }}
					</div>
					<div
						class="advantages-item-img"
						:style="{
							backgroundImage: `url('/images/advantages/${item.imgPath}')`,
						}"
					></div>
				</div>
			</div>
			<div
				class="advantages-items"
				v-if="viewport.matches('tablet', 'mobileWide')"
			>
				<div
					class="advantages-item"
					v-for="(item, index) in advantagesItems"
					:key="index"
					v-motion
					:initial="{
						opacity: 0,
						y: 100,
					}"
					:visibleOnce="{
						opacity: 1,
						y: 0,
						transition: {
							type: 'damping',
							damping: 15,
						},
					}"
					:delay="item.tabletDelay"
				>
					<div class="advantages-item-title">{{ item.title }}</div>
					<div class="advantages-item-description">
						{{ item.description }}
					</div>
					<div
						class="advantages-item-img"
						:style="{
							backgroundImage: `url('/images/advantages/${item.imgPath}')`,
						}"
					></div>
				</div>
			</div>
			<div class="advantages-items" v-if="viewport.isLessThan('mobileWide')">
				<div
					class="advantages-item"
					v-for="(item, index) in advantagesItems"
					:key="index"
					v-motion
					:initial="{
						opacity: 0,
						y: 100,
					}"
					:visibleOnce="{
						opacity: 1,
						y: 0,
						transition: {
							type: 'damping',
							damping: 15,
						},
					}"
				>
					<div class="advantages-item-title">{{ item.title }}</div>
					<div class="advantages-item-description">
						{{ item.description }}
					</div>
					<div
						class="advantages-item-img"
						:style="{
							backgroundImage: `url('/images/advantages/${item.imgPath}')`,
						}"
					></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import visOnceLeft from '/assets/js/motions/visOnceLeft';
import visOnceRight from '/assets/js/motions/visOnceRight';
import visOnceBottom from '/assets/js/motions/visOnceBottom';
const viewport = useViewport();

const advantagesItems = ref([
	{
		id: 1,
		title: 'Приемлимые цены',
		description:
			' Мы максимально оптимизируем наш труд, для того, чтобы цены были доступными. ',
		imgPath: 'money.png',
		imgAlt: 'money',
		tabletDelay: 200,
	},
	{
		id: 2,
		title: 'В сроки сдаем работу!',
		description:
			'Расписываем каждый этап по срокам, и придерживаемся дедлайнов.',
		imgPath: 'watch.png',
		imgAlt: 'watch',
		tabletDelay: 400,
	},
	{
		id: 3,
		title: 'Команда специалистов',
		description:
			'В нашей команде множество специалистов, и каждый из них хорошо знает свое дело.',
		imgPath: 'comand.png',
		imgAlt: 'comand',
		tabletDelay: 200,
	},
	{
		id: 4,
		title: 'Консультация перед заказом',
		description:
			'Наши менеджеры готовы помочь вам, а так же ответить на ваши вопросы.',
		imgPath: 'support.png',
		imgAlt: 'support',
		tabletDelay: 400,
	},
]);
</script>

<style lang="scss">
.advantages {
	max-width: 1920px;
	margin: 0 auto;
	position: relative;
	background: url(https://weblinex.ru/images/advantages/adv-bg.webp) no-repeat
		center center;
	background-position: bottom -75px right 0px;

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
		position: relative;
		border-radius: 6px;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 20px;
		height: 390px;
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
			max-width: 260px;
		}
		&-description {
			font-size: 17px;
			margin: 25px 0;
			line-height: 20px;
			max-width: 310px;
			color: hsla(0, 0%, 100%, 0.7);
		}
		&-img {
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-position: bottom 0px right 0px;
			z-index: -1;
		}
	}
	&-item:first-child {
		background: linear-gradient(to bottom right, #527791, #325597, #193895);
		transform: translate(0px, 0px);
		display: none;
	}
	&-item {
		&-main {
			margin-top: 50px;
			will-change: transform;
			user-select: none;
			.advantages-item {
				display: flex;
				opacity: 1;
				background: linear-gradient(to bottom right, #527791, #325597, #193895);
				transform: translate(0px, 0px);
			}
		}
	}
}

@media (max-width: 992px) {
	.advantages {
		&-title {
			grid-column: 1 / span 3;
			grid-row: 1 / span 1;
			padding-top: 0;
			text-align: center;
			.title-info {
				p {
					text-align: center;
				}
			}
			&-btn-mt {
				margin-top: 0;
			}
		}
		&-items {
			margin: 35px 0;
			grid-template-columns: repeat(2, 1fr);
		}
		&-item {
			&-main {
				display: none;
			}
		}
		&-item:first-child {
			background: linear-gradient(to bottom right, #527791, #325597, #193895);
			transform: translate(0px, 0px);
			display: block;
		}
	}
}
@media (max-width: 577px) {
	.advantages {
		background: none;
		&-items {
			grid-template-columns: repeat(1, 1fr);
		}
		&-item {
			height: 350px;
			&-img {
				background-size: clamp(140px, 100%, 160px);
			}
		}
	}
}
</style>
