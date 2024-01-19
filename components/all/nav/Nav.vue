<template>
	<nav class="nav d-none d-lg-block">
		<NavLogo />
		<NavList :active="active" :navList="navList" :navItem="navItem" />
		<NavContacts />
	</nav>
</template>

<script setup>
import { ref } from 'vue';

import NavLogo from '@/components/all/nav/NavLogo';
import NavList from '@/components/all/nav/NavList';
import NavContacts from '@/components/all/nav/NavContacts';

const active = ref('active');
const navList = ref('nav-list');
const navItem = ref('nav-item');
</script>

<style lang="scss">
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 50;
	&-logo {
		display: flex;
		align-items: center;
		margin: 30px 0;
		&-text {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			b {
				font-family: 'Kanit', sans-serif;
				font-size: 40px;
				color: var(--white);
				letter-spacing: -3px;
				transition: all 0.5s ease;
				text-shadow: 0 0 20px var(--shadowGreen);
			}
			p {
				font-size: 20px;
				color: var(--white);
				letter-spacing: 5px;
				margin-left: 10px;
				transition: all 0.5s ease;
			}
		}
		&-text:hover {
			p {
				color: var(--green);
			}
		}
	}
	&-list {
		display: flex;
	}
	&-item {
		font-size: 18px;
		a {
			position: relative;
			transition: all 0.3s ease;

			&::before {
				content: '';
				position: absolute;
				width: 100%;
				height: 8px;
				background-color: var(--green);
				top: -45px;
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
		}
		.active {
			position: relative;
			color: var(--green);
			span {
				position: relative;
				&::before {
					content: '';
					position: absolute;
					width: 100%;
					height: 8px;
					background-color: var(--green);
					top: -45px;
					left: 0;
					border-radius: 0 0 10px 10px;
					box-shadow: 0 0 20px var(--shadowGreen);
				}
			}
		}
		a:hover {
			color: var(--green);
		}
	}
	&-item:not(:last-child) {
		margin-right: 40px;
	}
	&-social {
		display: flex;
		&-svg:first-child {
			svg {
				left: 46%;
			}
		}
		&-svg {
			position: relative;
			width: 40px;
			height: 40px;
			border-radius: 100%;
			box-shadow: 0 0 20px var(--shadowGreen);
			background-color: var(--boxShadowGreen);
			transition: all 0.5s ease;
			border: 1px solid var(--green);
			cursor: pointer;
			margin-right: 15px;
			svg {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				display: inline-block;
				width: 20px;
				height: 20px;
				transition: all 0.5s ease;
				path {
					fill: var(--green);
					transition: all 0.5s ease;
				}
			}
		}
		&-svg:hover {
			background-color: var(--green);
			svg path {
				fill: var(--black);
				transition: all 0.5s ease;
			}
		}
		&-item {
			border-radius: 40px;
			padding: 7px 20px;
			border: 1px solid var(--green);
			color: var(--white);
			cursor: pointer;
			transition: all 0.5s ease;
			box-shadow: 0 0 20px var(--shadowGreen);
			background-color: var(--boxShadowGreen);
			span {
				font-size: 15px;
				font-weight: 600;
				line-height: 22px;
			}
		}
		&-item:hover {
			background-color: var(--green);
			color: var(--black);
		}
	}
	&-contacts {
		.phone-link {
			font-size: 25px;
		}
	}
	&-mobile {
		position: fixed;
		z-index: 50;
		background-color: var(--black);
		width: 100%;
		top: 0;
		opacity: 1;
		transition: 0.2s ease-out;

		.navbar {
			padding: 0 20px;
			&-toggler {
				border: 1px solid var(--shadowGreen);
				border-radius: 5px;
				&-icon {
					background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2030'%3E%3Cpath%20stroke='rgba(44,%20232,%20194,%201)'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M4%207h22M4%2015h22M4%2023h22'/%3E%3C/svg%3E");
				}
			}
			&-toggler:focus {
				box-shadow: 0 0 0 0.25rem;
				color: var(--boxShadowGreen);
			}
		}

		.nav-logo {
			margin: 15px 0;
		}
		.hr {
			height: 1px;
		}
		.hr-vert {
			width: 1.5px;
			left: 0;
		}
	}
	&-mobile.hidden {
		opacity: 0;
		transform: translate3d(0, -100%, 0);
	}
}

.offcanvas {
	background-color: #1c1c1c !important;
	&-header {
		.nav-logo {
			margin: 0;
		}
	}
	&-body {
		.nav-list {
			flex-direction: column;
			.nav-item {
				margin: 12px 0;
			}
			.nav-item a::before {
				height: 4px;
				top: 27px;
			}
			.nav-item .active span::before {
				height: 4px;
				top: 27px;
			}
		}
		.nav-contacts {
			margin-bottom: 20px;
		}
	}
}

@media (min-width: 992px) {
	.nav.d-lg-block {
		display: flex !important;
	}
}

@media (max-width: 992px) {
	.nav {
		&-contacts {
			&-items {
				margin-top: 20px;
			}
		}
	}
}

@media (max-width: 577px) {
	.nav-mobile .navbar {
		padding: 0 10px;
	}
}
</style>
