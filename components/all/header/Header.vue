<template>
	<header class="header">
		<section id="1">
			<div class="header-intro">
				<div class="header-intro-wrap container">
					<HeaderContent />
				</div>
			</div>
			<div class="container"><Preloader /></div>
		</section>
	</header>
</template>

<script setup>
import HeaderContent from '@/components/all/header/HeaderContent';
import Preloader from '@/components/all/header/Preloader';
</script>

<style lang="scss">
.header {
	width: 100%;
	height: 100%;
	background-image: url('https://weblinex.ru/images/header/header-bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
	margin-top: -115px;
	overflow: hidden;
	&-intro {
		height: 100vh;
		max-height: 958px;
		&-wrap {
			position: relative;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			background-image: url('https://weblinex.ru/images/header/developer.png');
			background-repeat: no-repeat;
			background-position: bottom -3vw right 0px;
			background-size: clamp(400px, 100%, 600px);
			z-index: 1;
		}
	}
	&-content {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		will-change: transition;
	}
	&-info {
		grid-column: 1 / span 6;
		z-index: 1;
		margin-right: 2vw;
		&-border {
			h1 {
				background: repeating-linear-gradient(
					-45deg,
					var(--green) 5%,
					var(--white) 10%,
					var(--green) 15%,
					var(--white) 5%,
					var(--green) 15%
				);
				background-size: 600vw 600vw;
				color: transparent;
				background-clip: text;
				animation: slide 10s linear infinite forwards;
				text-shadow: 0 0 20px var(--shadowGreen);
			}
			@keyframes slide {
				0% {
					background-position-x: 0%;
				}
				100% {
					background-position-x: 600vw;
				}
			}
		}
	}
	&-title {
		font-size: 60px;
		font-weight: 800;
		line-height: 64px;
		margin-top: 25px;
		user-select: none;
		span {
			font-size: 40px;
		}
	}
	&-promo {
		font-size: 22px;
		font-weight: 300;
		line-height: 36px;
		margin: 25px 0;
		color: var(--lightGray);
		user-select: none;
	}
	&-modal-btn {
		font-size: 19px;
		font-weight: 500;
		grid-column: 1 / span 3;
		grid-row: 2 / span 2;
		margin-top: 110px;
		display: flex;
		justify-content: center;
		align-items: center;
		&-qw {
			margin-left: 25px;
			color: var(--darkGray);
			cursor: pointer;
			transition: all 0.3s ease;
		}
		&-qw:hover {
			color: var(--lightGray);
		}
	}
}

@media (max-width: 992px) {
	.header {
		margin-top: 0;
		&-title {
			font-size: max(30px, min(55px, calc(var(--base-scale) * 5)));
			span {
				font-size: max(30px, min(40px, calc(var(--base-scale) * 5)));
			}
		}
		&-intro {
			height: 100%;
			&-wrap {
				background-position: bottom -3vw right -135px;
				background-size: clamp(300px, 100%, 450px);
			}
		}
		&-info {
			margin-top: 200px;
			margin-right: 0;
		}
		&-modal-btn {
			grid-column: 1 / span 7;
			justify-content: flex-start;
			margin-top: 100px;
			margin-bottom: 100px;
			font-size: 16.5px;
		}
		&-promo {
			font-size: 17.5px;
		}
	}
}

@media (max-width: 700px) {
	.header {
		&-title {
			font-size: max(40px, min(50px, calc(var(--base-scale) * 5)));
			span {
				font-size: max(20px, min(35px, calc(var(--base-scale) * 5)));
			}
		}
	}
}

@media (max-width: 612px) {
	.header {
		&-info {
			margin-top: 170px;
		}
	}
}

@media (max-width: 577px) {
	.header {
		&-intro {
			&-wrap {
				background-image: none;
				justify-content: center;
			}
		}
		&-info {
			text-align: center;
		}
		&-modal-btn {
			flex-direction: column-reverse;
			align-items: normal;
			margin-top: 15px;
			margin-bottom: 60px;
			&-qw {
				margin-left: 0;
				margin: 15px 0;
				text-align: center;
			}
		}
		&-title {
			line-height: 50px;
		}
		&-promo {
			font-size: 16.5px;
		}
	}
}

@media (max-width: 320px) {
	.header {
		&-title {
			font-size: max(35px, min(50px, var(--base-scale) * 5));
		}
	}
}
</style>
