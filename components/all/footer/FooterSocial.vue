<template>
	<div class="footer-social">
		<NuxtLink
			class="footer-social-item"
			v-for="(item, index) in footerSocialItems"
			:key="index"
			:to="item.href"
		>
			<nuxt-img :src="item.path" :alt="item.alt" />
		</NuxtLink>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const footerSocialItems = ref([
	{ id: 1, path: '/footer/icons/vk.png', alt: 'vk', href: '#' },
	{
		id: 2,
		path: '/footer/icons/gmail.png',
		alt: 'gmail',
		href: '#',
	},
	{ id: 3, path: '/footer/icons/telegram.png', alt: 'telegram', href: '#' },
	{
		id: 4,
		path: '/footer/icons/whatsapp.png',
		alt: 'whatsapp',
		href: '#',
	},
]);
</script>
