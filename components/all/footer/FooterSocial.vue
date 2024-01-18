<template>
	<div class="footer-social">
		<NuxtLink
			class="footer-social-item"
			v-for="(item, index) in footerSocialItems"
			:key="index"
			:to="item.href"
		>
			<nuxt-img
				sizes="28px md:28px"
				width="28"
				height="28"
				:src="item.path"
				:alt="item.alt"
			/>
		</NuxtLink>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const footerSocialItems = ref([
	{ id: 1, path: '/footer/icons/vk.webp', alt: 'vk', href: '#' },
	{
		id: 2,
		path: '/footer/icons/gmail.webp',
		alt: 'gmail',
		href: '#',
	},
	{ id: 3, path: '/footer/icons/telegram.webp', alt: 'telegram', href: '#' },
	{
		id: 4,
		path: '/footer/icons/whatsapp.webp',
		alt: 'whatsapp',
		href: '#',
	},
]);
</script>
