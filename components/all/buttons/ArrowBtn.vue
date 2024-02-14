<template>
	<div class="arrow-btn">
		<NuxtLink class="arrow-btn-a" :to="linkBtn"
			><span>Подробнее</span>
			<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g
					id="SVGRepo_tracerCarrier"
					stroke-linecap="round"
					stroke-linejoin="round"
				></g>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M9 6L15 12L9 18"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					></path>
				</g>
			</svg>
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

		span {
			transition: all 0.5s ease;
		}
		svg {
			width: 25px;
			height: 25px;
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
		svg {
			stroke: var(--black);
		}
	}
}
</style>
