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
				<span class="tabs-header-li-number">{{ ++index }}</span>
			</li>
		</ul>
		<div class="tabs-contents">
			<hr class="hr-vert" />
			<hr class="hr" />
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
	justify-content: center;
	margin-top: 50px;
	&-header {
		margin-right: 30px;
		&-li {
			position: relative;
			display: flex;
			justify-content: space-between;
			font-size: 20px;
			line-height: 35px;
			letter-spacing: 1px;
			font-weight: 600;
			color: var(--transparentWhite60);
			cursor: pointer;
			transition: all 0.4s;
			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				background-color: var(--green);
				top: 33px;
				left: 0;
				border-radius: 0 0 10px 10px;
				transform-origin: right;
				transform: scaleX(0);
				transition: transform 0.3s ease-in-out;
			}

			&:hover::before {
				transform-origin: left;
				transform: scaleX(1);
			}
			&-number {
				font-size: 24px;
			}
		}
		&-li:hover {
			color: var(--green);
		}
		&-li:not(:last-child) {
			margin-bottom: 20px;
		}
		.selected {
			color: var(--green);
			.tabs-header-li-number {
				width: 100%;
				position: relative;
				text-align: center;
				&::before {
					content: '';
					position: absolute;
					width: 100%;
					height: 2px;
					background-color: var(--green);
					top: 33px;
					left: 0;
					border-radius: 0 0 10px 10px;
					box-shadow: 0 0 20px var(--shadowGreen);
				}
			}
		}
	}
	&-contents {
		position: relative;
		padding-left: 30px;
		width: 60%;
		color: var(--transparentWhite70);
		user-select: none;
		.hr {
			height: 2px;
			margin-bottom: 20px;
			display: none;
		}
		.hr-vert {
			width: 2px;
			height: 100%;
			left: 0;
		}
	}
}
.tab-content {
	&-top {
		&-title {
			font-size: max(20px, min(30px, var(--base-scale) * 5));
			font-weight: 600;
			text-align: center;
			line-height: 35px;
			letter-spacing: 1px;
			color: var(--green);
			margin-bottom: 30px;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 2px;
				background-color: var(--transparentlightGray);
				top: 45px;
				left: 0;
				border-radius: 0 0 10px 10px;
				box-shadow: 0 0 20px var(--boxShadowGreen);
			}
		}
	}
	&-bottom {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 20px;
		margin-top: 20px;
		ul {
			li {
				position: relative;
				margin: 7px 0;
				padding-left: 35px;
				display: flex;
				svg {
					width: 25px !important;
					height: 25px !important;
					#Vector {
						stroke: var(--green);
						fill: none;
					}
				}
				span {
					margin-left: 10px;
				}
			}
		}
	}
}

@media (max-width: 1360px) {
	.tabs {
		&-contents {
			width: 70%;
		}
	}
}

@media (max-width: 1260px) {
	.tabs {
		&-contents {
			width: 80%;
		}
	}
}

@media (max-width: 1100px) {
	.tabs {
		&-contents {
			width: 90%;
		}
	}
}

@media (max-width: 992px) {
	.tabs {
		&-contents {
			width: 100%;
		}
	}
	.tab-content {
		&-top {
			&-title {
				display: block;
			}
		}
	}
}

@media (max-width: 769px) {
	.tabs {
		flex-direction: column;
		&-header {
			display: flex;
			justify-content: center;
			margin-right: 0;
			&-li {
				&-number {
					font-size: max(20px, min(30px, var(--base-scale) * 5));
				}
			}
			&-li:not(:last-child) {
				margin-right: 30px;
			}
		}
		&-contents {
			padding-left: 0;
			.hr {
				display: block;
			}
			.hr-vert {
				display: none;
			}
		}
	}

	.tab-content {
		&-top {
			&-title {
				&::before {
					display: none;
				}
				&-number {
					display: none;
				}
			}
		}
	}
}
@media (max-width: 577px) {
	.tab-content {
		&-bottom {
			grid-template-columns: repeat(1, 1fr);
			grid-gap: 0;
			ul li {
				padding-left: 0;
			}
		}
	}
}
</style>
