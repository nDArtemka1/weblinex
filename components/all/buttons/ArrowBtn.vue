<template>
	<div class="arrow-btn">
		<NuxtLink class="arrow-btn-a" :to="linkBtn"
			><span>Подробнее</span>
			<span class="fa fa-chevron-right chevron-right"></span>
		</NuxtLink>
	</div>
</template>

<script setup>
const props = defineProps(['linkBtn']);
</script>

<style lang="scss">
.arrow-btn {
	&-a {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 12px 30px;
		border-radius: 40px;
		border: 1px solid var(--green);
		color: var(--white);
		cursor: pointer;
		transition: all 0.5s ease;
		box-shadow: 0 0 20px var(--shadowGreen);
		background-color: var(--boxShadowGreen);
		.chevron-right {
			margin-left: 10px;
			font-size: 15px;
		}
		span {
			transition: all 0.5s ease;
		}
		&-text {
			margin-right: 5px;
		}
	}
	&-a:hover {
		background-color: var(--green);

		span {
			color: var(--black);
		}
	}
}
</style>
