<template>
	<div class="uslugi">
		<Header
			:header-title="headerTitle"
			:header-description="headerDescription"
		/>
		<HeaderForm />
		<hr class="hr" />
		<main></main>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/universal/header/Header';
import HeaderForm from '@/components/universal/header/HeaderForm';

const headerTitle = ref(
	'Услуги по разработке <br /> и созданию сайтов под ключ <br /> <span>По всей России!</span>'
);
const headerDescription = ref(
	'Наша компания предлагает создание сайтов любого типа и уровня сложности: от простейшего сайта-визитки до интернет-магазина, корпоративного сайта и информационного портала. '
);
</script>
