<template>
	<nav class="nav-fix d-none d-lg-block" :class="{ hidden: !showNavbar }">
		<div class="container nav">
			<NavLogo />
			<NavList :active="active" :navList="navList" :navItem="navItem" />
			<NavContacts />
		</div>
		<hr class="hr" />
	</nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

import NavLogo from '@/components/all/nav/NavLogo';
import NavList from '@/components/all/nav/NavList';
import NavContacts from '@/components/all/nav/NavContacts';

const active = ref('active');
const navList = ref('nav-list');
const navItem = ref('nav-item');
</script>

<script>
const OFFSET = 110;
export default {
	data() {
		return {
			showNavbar: true,
			lastScrollPosition: 0,
		};
	},
	components: {},
	mounted() {
		this.lastScrollPosition = window.pageYOffset;
		window.addEventListener('scroll', this.onScroll);
		const viewportMeta = document.createElement('meta');
		viewportMeta.name = 'viewport';
		viewportMeta.content = 'width=device-width, initial-scale=1';
		document.head.appendChild(viewportMeta);
	},
	beforeDestroy() {
		// window.removeEventListener("scroll", this.onScroll);
	},
	methods: {
		onScroll() {
			if (window.pageYOffset < 0) {
				return;
			}
			if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
				return;
			}
			this.showNavbar = window.pageYOffset < this.lastScrollPosition;
			this.lastScrollPosition = window.pageYOffset;
		},
	},
};
</script>

<style lang="scss">
.nav {
	&-fix {
		position: fixed;
		z-index: 50;
		background-color: var(--black);
		width: 100%;
		transform: translate3d(0, -100%, 0);
		opacity: 0;
		transition: all 0.4s ease-out;
		.nav-logo {
			margin: 15px 0;
		}
		.hr {
			height: 1px;
		}
		.nav-item a::before {
			top: -30px;
		}
		.nav-item .active span::before {
			top: -30px;
		}
	}
	&-fix.hidden {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>
