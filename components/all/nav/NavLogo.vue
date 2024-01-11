<template>
	<NuxtLink class="nav-logo" to="/">
		<span
			class="nav-logo-text"
			:data-bs-toggle="dataBsToggle"
			:data-bs-target="dataBsTarget"
			:aria-controls="ariaControls"
			:aria-label="ariaLabel"
		>
			<b>WEB</b>
			<p>LINEX</p>
		</span>
	</NuxtLink>
</template>

<script setup>
const props = defineProps([
	'dataBsToggle',
	'dataBsTarget',
	'ariaControls',
	'ariaLabel',
]);
</script>
