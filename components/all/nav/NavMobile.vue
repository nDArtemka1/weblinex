<template>
	<div class="nav-mobile d-md-block d-lg-none" :class="{ hidden: !showNavbar }">
		<nav class="navbar navbar-dark">
			<div class="container-fluid">
				<NavLogo />
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasDarkNavbar"
					aria-controls="offcanvasDarkNavbar"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="offcanvas offcanvas-end text-bg-dark"
					tabindex="-1"
					id="offcanvasDarkNavbar"
					aria-labelledby="offcanvasDarkNavbarLabel"
				>
					<div class="offcanvas-header">
						<NavLogo
							:data-bs-toggle="dataBsToggle"
							:data-bs-target="dataBsTarget"
							:aria-controls="ariaControls"
							:aria-label="ariaLabel"
						/>
						<button
							type="button"
							class="btn-close btn-close-white"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body">
						<NavList
							:active="active"
							:navList="navList"
							:navItem="navItem"
							:data-bs-toggle="dataBsToggle"
							:data-bs-target="dataBsTarget"
							:aria-controls="ariaControls"
							:aria-label="ariaLabel"
						/>
						<NavContacts />
					</div>
					<hr class="hr-vert" />
				</div>
			</div>
		</nav>
		<hr class="hr" />
	</div>
</template>

<script setup>
import { ref } from 'vue';

import NavLogo from '@/components/all/nav/NavLogo';
import NavList from '@/components/all/nav/NavList';
import NavContacts from '@/components/all/nav/NavContacts';

const active = ref('active');
const navList = ref('nav-list');
const navItem = ref('nav-item');
const dataBsToggle = ref('offcanvas');
const dataBsTarget = ref('#offcanvasDarkNavbar');
const ariaControls = ref('offcanvasDarkNavbar');
const ariaLabel = ref('Toggle navigation');
</script>

<script>
const OFFSET = 60;
export default {
	data() {
		return {
			isActive: false,
			showNavbar: true,
			lastScrollPosition: 0,
			scrollValue: 0,
		};
	},
	mounted() {
		this.lastScrollPosition = window.pageYOffset;
		window.addEventListener('scroll', this.onScroll);
		const viewportMeta = document.createElement('meta');
		viewportMeta.name = 'viewport';
		viewportMeta.content = 'width=device-width, initial-scale=1';
		document.head.appendChild(viewportMeta);
	},

	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll);
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
