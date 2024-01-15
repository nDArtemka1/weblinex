<template>
	<section id="4" class="stages-works container-content">
		<div class="section-title" v-motion="visOnceBottom">
			<div class="title">
				<h2>Этапы работ по созданию сайта</h2>
			</div>
		</div>
		<TabsWrapper v-motion="visOnceBottom">
			<Tab v-for="tab in stages" :key="tab" :title="tab.title">
				<div class="tab-content-top"></div>
				<div class="tab-content-bottom"></div>
				{{ tab.tabContent }}</Tab
			>
		</TabsWrapper>
	</section>
</template>

<script setup>
import { ref } from 'vue';
import Tab from '@/components/universal/tabs/Tab';
import TabsWrapper from '@/components/universal/tabs/TabsWrapper';

import visOnceBottom from '/assets/js/motions/visOnceBottom';

const stages = ref([
	{
		title: 'Сбор данных и аналитика',
		tabContent:
			'Самое важное на этом этапе — получить ясное и полное понимание того, каким будет назначение вашего будущего сайта, каких целей вы хотите достичь с его помощью, а также какова целевая аудитория, которую вы хотите на него привлечь.',
	},
	{ title: 'Макетирование и подготовка ТЗ', tabContent: 'This is tab-2' },
	{ title: 'Разработка дизайна страниц сайта', tabContent: 'This is tab-3' },
	{ title: 'Вёрстка', tabContent: 'This is tab-4' },
	{ title: 'Программирование и интеграция', tabContent: 'This is tab-5' },
	{ title: 'Наполнение сайта контентом', tabContent: 'This is tab-6' },
	{ title: 'Тестирование и запуск проекта', tabContent: 'This is tab-7' },
]);
</script>
