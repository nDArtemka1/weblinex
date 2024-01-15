<template>
	<div class="tabs">
		<ul class="tabs-header">
			<li
				class="tabs-header-li"
				v-for="(title, index) in tabTitles1"
				:key="index"
				:class="{ selected: title == selectedTitle }"
				@click="selectedTitle = title"
			>
				{{ title }} <span>{{ ++index }}</span>
			</li>
		</ul>
		<div class="tabs-contents">
			<hr class="hr-vert" />
			<slot />
		</div>
	</div>
</template>

<script setup>
import { ref, useSlots, provide } from 'vue';

const props = defineProps(['tab']);
const slots = useSlots();

const tabTitles = ref(slots.default().map(tab => tab.children));
const tabTitles1 = ref(tabTitles.value[0].map(tab => tab.key.title));

const selectedTitle = ref(tabTitles1.value[0]);

provide('selectedTitle', selectedTitle);
</script>

<style lang="scss">
.tabs {
	display: flex;
	justify-content: space-between;
	justify-content: center;
	margin-top: 50px;
	&-header {
		margin-right: 30px;
		&-li {
			display: flex;
			justify-content: space-between;
			font-size: 20px;
			line-height: 25px;
			letter-spacing: 1px;
			font-weight: 600;
			color: var(--transparentWhite60);
			span {
				font-size: 24px;
				margin-left: 50px;
			}
		}
		&-li:not(:last-child) {
			margin-bottom: 20px;
		}
		.selected {
			color: var(--green);
		}
	}
	&-contents {
		position: relative;
		padding-left: 30px;
		width: 60%;
		.hr-vert {
			width: 2px;
			height: 100%;
			left: 0;
		}
	}
}
</style>
