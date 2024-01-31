<template>
	<div class="header-form container">
		<div class="header-form-title">
			Решим любую задачу в интернет - маркетинге
		</div>
		<Form :budgetActive="false" :commentActive="false" :emailActive="false" />
	</div>
</template>

<script setup>
import Form from '@/components/all/form/Form';
</script>

<style lang="scss"></style>
