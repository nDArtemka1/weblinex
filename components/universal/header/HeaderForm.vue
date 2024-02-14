<template>
	<div class="header-form container">
		<div
			class="header-form-title fadeoutbottom"
			v-animateonscroll="{
				enterClass: 'fadeinbottom',
			}"
		>
			Решим любую задачу в интернет - маркетинге
		</div>
		<Form
			:budgetActive="false"
			:commentActive="false"
			:emailActive="false"
			class="fadeoutbottom"
			v-animateonscroll="{
				enterClass: 'fadeinbottom',
			}"
			:style="{ transitionDelay: '150ms' }"
		/>
	</div>
</template>

<script setup>
import Form from '@/components/all/form/Form';
</script>

<style lang="scss"></style>
