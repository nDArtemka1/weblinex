<template>
	<div class="nav-contacts">
		<NuxtLink to="tel:+79177023497" class="phone-link d-md-block d-lg-none"
			>+7 (917) 702-34-97</NuxtLink
		>
		<div class="nav-contacts-items">
			<NavSocial />
		</div>
	</div>
</template>

<script setup>
import NavSocial from '@/components/all/nav/NavSocial';
</script>
