<template>
	<div class="sections-menus" v-if="viewport.isGreaterThan('tablet')">
		<hr class="hr-vert" />
		<div class="sections-menu">
			<NuxtLink
				class="menu-point"
				:class="{ 'active-tab': currentSection == offset }"
				v-for="(offset, index) in offsets"
				:key="index"
				:id="`menu-point-${++index}`"
				:to="`#${offset}`"
			>
				<span>{{ '0' + index }}</span>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
const viewport = useViewport();

const offsets = [1, 2, 3, 4, 5];

const currentSection = ref('');

onMounted(() => {
	setTimeout(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.intersectionRatio > 0) {
						currentSection.value = entry.target.getAttribute('id');
					}
				});
			},
			{
				rootMargin: ' 0px 0px -70% 0px',
			}
		);

		document.querySelectorAll('section').forEach(section => {
			observer.observe(section);
		});
	}, 400);
});
</script>

<style lang="scss">
.sections-menus {
	position: fixed;
	z-index: 100;
	.hr-vert {
		left: -38px;
	}
}
.sections-menu {
	position: absolute;
	z-index: 100;
	left: -46px;
	transform: translateY(70vh);

	a {
		display: block;
	}
}

.menu-point {
	width: 18px;
	height: 37px;
	background: linear-gradient(180deg, #5d7c76, #0a3028);
	margin: 1rem 0;
	border-radius: 9px;
	cursor: pointer;
	position: relative;
	span {
		background: linear-gradient(180deg, #5d7c76, #0a3028);
		background-clip: text;
		-webkit-text-fill-color: transparent;
		position: absolute;
		top: 5px;
		right: 30px;
		font-size: 20px;
		font-weight: bold;
	}
}

.menu-point:hover {
	background: linear-gradient(180deg, #b5feef, #22a98d) border-box;
	span {
		background: linear-gradient(180deg, #b5feef, #22a98d) border-box;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}

.menu-point.active-tab {
	position: absolute;
	background: linear-gradient(180deg, #b5feef, #22a98d) border-box;
	opacity: 0;
	bottom: 0;
	animation: ani 1s forwards;

	span {
		background: linear-gradient(180deg, #b5feef, #22a98d) border-box;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}
@keyframes ani {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
		bottom: 75vh;
	}
}

.menu-point.active-tab::before {
	content: '';
	width: 25px;
	height: 45px;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -10%);
	border-radius: 50px; /*1*/
	border: 2px solid transparent; /*2*/
	background: linear-gradient(180deg, #b5feef, #22a98d) border-box; /*3*/
	mask: /*4*/ linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	mask-composite: xor; /*5'*/
	mask-composite: exclude; /*5*/
}

.menu-point::before {
	content: '';
	width: 25px;
	height: 45px;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -10%);
	border-radius: 50px; /*1*/
	border: 2px solid transparent; /*2*/
	background: linear-gradient(180deg, #5d7c76, #0a3028) border-box; /*3*/
	mask: /*4*/ linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
	mask-composite: xor; /*5'*/
	mask-composite: exclude; /*5*/
}

.menu-point:hover::before {
	background: linear-gradient(180deg, #b5feef, #22a98d) border-box;
}

@media screen and (min-height: 450px) {
	.sections-menu {
		transform: translateY(55vh);
	}
	@keyframes ani {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			bottom: 65vh;
		}
	}
}

@media screen and (min-height: 650px) {
	.sections-menu {
		transform: translateY(65vh);
	}
	@keyframes ani {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
			bottom: 65vh;
		}
	}
}

@media (min-width: 1450px) {
	.sections-menus {
		.hr-vert {
			left: -82.5px;
		}
	}
	.sections-menu {
		left: -90px;
	}
}

@media only screen and (min-width: 992px) and (max-width: 149px) {
	.sections-menus {
		.hr-vert {
			left: -38px;
		}
	}
	.sections-menu {
		left: -46px;
	}
}
</style>
