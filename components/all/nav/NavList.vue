<template>
	<ul :class="navList">
		<li v-for="link in links" :key="link.name" :class="navItem">
			<NuxtLink
				class="nav-link"
				exact
				no-prefetch
				:active-class="active"
				:to="link.path"
				><span
					:data-bs-toggle="dataBsToggle"
					:data-bs-target="dataBsTarget"
					:aria-controls="ariaControls"
					:aria-label="ariaLabel"
				>
					{{ link.name }}
				</span></NuxtLink
			>
		</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps([
	'active',
	'navItem',
	'navList',
	'dataBsToggle',
	'dataBsTarget',
	'ariaControls',
	'ariaLabel',
]);

const links = ref([
	{ name: 'Главная', path: '/' },
	{ name: 'Услуги', path: '/uslugi' },
	{ name: 'Портфолио', path: '/portfolio' },
	{ name: 'Контакты', path: '/contacts' },
]);
</script>
