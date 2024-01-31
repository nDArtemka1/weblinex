<template>
	<div class="uslugi-cards container">
		<div
			class="uslugi-card fadeoutbottom"
			v-for="(card, index) in uslugiCards"
			:key="index"
			v-animateonscroll="{
				enterClass: 'fadeinbottom',
			}"
			:style="{ transitionDelay: card.tabletDelay + 'ms' }"
		>
			<div class="uslugi-card-title">
				<div>
					Сайт “<span>{{ card.title }}</span
					>”
				</div>

				<div class="uslugi-card-price">
					От <span>{{ card.price }}</span> ₽
				</div>
			</div>
			<div class="uslugi-card-description" v-html="card.description"></div>
			<div class="uslugi-card-bottom">
				<div class="uslugi-card-bottom-details">
					<div class="uslugi-card-deadlines">
						От <span> {{ card.deadlines }}</span> дней.
					</div>
				</div>

				<div class="uslugi-card-btn">
					<ArrowBtn :linkBtn="card.href" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import ArrowBtn from '@/components/all/buttons/ArrowBtn';

const uslugiCards = ref([
	{
		id: 1,
		title: 'Landing page',
		description:
			'<span>Одностраничный сайт (Landing Page)</span> – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Мы умеем создавать веб-ресурсы, полностью готовые к наплыву лавины посетителей. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.',
		price: '25.000',
		deadlines: '17',
		href: '#',
		tabletDelay: 100,
	},
	{
		id: 2,
		title: 'Визитка',
		description:
			'<span>Сайт-визитка</span> - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
		price: '30.000',
		deadlines: '5',
		href: '#',
		tabletDelay: 300,
	},
	{
		id: 3,
		title: 'Каталог',
		description:
			'<span>Сайт-каталог</span> – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
		price: '60.000',
		deadlines: '15',
		href: '#',
		tabletDelay: 100,
	},
	{
		id: 4,
		title: 'Корп.сайт',
		description:
			'<span>Корпоративный сайт</span> – это крупномасштабный портал, который создается не только для контакта организации с клиентами, но и для обмена информацией, мнениями, идеями между сотрудниками и руководством. Электронный ресурс такого типа – лицо компании, солидный «костюм», вызывающий у партнёров и контрагентов уважение и интерес.',
		price: '60.000',
		deadlines: '17',
		href: '#',
		tabletDelay: 300,
	},
	{
		id: 5,
		title: 'Интернет магизин',
		description:
			'<span>Сайт-визитка</span> - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
		price: '75.000',
		deadlines: '30',
		href: '#',
		tabletDelay: 100,
	},
	{
		id: 6,
		title: 'Индивидуальный',
		description:
			'Мы готовы выслушать вашу идею, и выполнить задание. Цена проекта будет складываться от ее технического задания и сроков выполнения.',
		price: '?',
		deadlines: '?',
		href: '#',
		tabletDelay: 300,
	},
]);
</script>

<style lang="scss">
.uslugi-cards {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;
}
.uslugi-card {
	color: var(--lightGray);
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
		display: flex;
		justify-content: space-between;
		font-size: 25px;
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
		&-details {
			font-size: 25px;
			line-height: 44px;
			text-align: center;
		}
	}
	&-btn {
		.arrow-btn {
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
	}
}
.uslugi-card:hover {
	cursor: pointer;
	border: 1px solid var(--green);
	box-shadow: 0 0 20px var(--shadowGreen);
}
</style>
