<template>
	<footer class="footer">
		<div class="footer-info container-content">
			<div class="footer-info-left">
				<div class="footer-info-title">
					<NuxtLink to="/" class="title"><h2>WEBLINEX.RU</h2></NuxtLink>
					<div class="footer-info-item">
						<b>Рабочие часы:</b>
						<span
							>Пн — Пт: с 8:00 до 20:00; <br />
							Сб — Вс: выходной</span
						>
					</div>
				</div>

				<div class="footer-info-item">
					<div class="title"><h3>Контактный телефон:</h3></div>
					<NuxtLink to="tel:+79177023497" class="phone-link"
						>+7 (917) 702-34-97</NuxtLink
					>
					<FooterSocial />
				</div>
			</div>

			<div class="footer-privacy-policy">
				<div class="footer-copyright">
					© 2021–2023, WEB LINEX - weblinex@gmail.com
				</div>
				<NuxtLink to="#">
					Политика сайта и обработка персональных данных</NuxtLink
				>
			</div>
		</div>
	</footer>
</template>

<script setup>
import FooterSocial from '@/components/all/footer/FooterSocial';
</script>

<style lang="scss">
.footer {
	width: 100%;
	height: 100%;
	background-image: url('https://weblinex.ru/images/header/header-bg.webp');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right 35% bottom 45%;
	position: relative;
	flex-shrink: 0;
	&-info {
		display: flex;
		justify-content: center;
		flex-direction: column;
		&-title {
			.title {
				user-select: auto;
				cursor: pointer;
				h2 {
					user-select: auto;
				}
			}
		}
		&-item {
			display: flex;
			flex-direction: column;
			.phone-link {
				font-size: 35px;
				font-weight: 600;
				line-height: 52px;
				color: var(--green);
			}
			.phone-link:hover {
				text-decoration: underline;
			}
			b {
				font-size: 24px;
				margin-top: 45px;
				user-select: none;
			}
			span {
				font-size: 20px;
				margin: 25px 0;
				user-select: none;
			}
		}
		&-left {
			display: flex;
			justify-content: space-between;
		}
	}
	&-nav {
		&-list {
			display: flex;
		}
		&-item {
			font-size: 18px;
			margin-top: 20px;
			a {
				position: relative;
				transition: all 0.3s ease;
				&::before {
					content: '';
					position: absolute;
					width: 100%;
					height: 5px;
					background-color: var(--green);
					top: 30px;
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
						height: 5px;
						background-color: var(--green);
						top: 30px;
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
			margin-right: 2vw;
		}
	}
	&-social {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 40px;
		&-item {
			width: 50px;
			height: 50px;
			background-color: var(--white);
			padding: 10px;
			border-radius: 100%;
			cursor: pointer;
			position: relative;
			transition: all 0.4s ease-in-out 0s;
		}
		&-item:after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: radial-gradient(#2eecc5, #00644f);
			border-radius: 100%;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.5s;
		}

		&-item:hover:after {
			opacity: 1;
		}
		&-item:hover {
			transform: scale(1.2);
		}
		&-item::before {
			content: '';
			border-radius: 100%;
			width: 65px;
			height: 65px;
			border: 1px solid var(--transparentlightGray);
			position: absolute;
			top: 50%;
			left: 49.5%;
			transform: translate(-50%, -50%);
			opacity: 1;
			transition: all 0.4s ease-in-out 0s;
		}
		&-item:hover:before {
			border: 1px solid var(--green);
		}
		&-item:nth-child(1) {
			padding-top: 12px;
			padding-right: 12px;
		}
		&-item:nth-child(3) {
			padding-top: 10px;
			padding-right: 12px;
		}
		&-item:not(:last-child) {
			margin-right: 40px;
		}
	}
	&-copyright {
		color: var(--transparentWhite70);
	}
	&-privacy-policy {
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		a {
			color: var(--transparentWhite40);
			transition: all 0.3s ease;
			margin-top: 20px;
		}
		a:hover {
			color: var(--transparentWhite70);
		}
	}
}

@media (max-width: 670px) {
	.footer {
		&-info {
			&-left {
				flex-direction: column;
				align-items: center;
			}
		}
		&-privacy-policy a {
			text-align: center;
		}
		&-copyright {
			text-align: center;
		}
	}
}

@media (max-width: 577px) {
	.footer {
		background-image: url(https://weblinex.ru/images/header/header-bg-mob.webp);
		&-info {
			&-title {
				text-align: center;
			}
		}
	}
}

@media (max-width: 340px) {
	.footer {
		&-info {
			.title {
				h2 {
					font-size: max(35px, min(50px, var(--base-scale) * 5));
				}
			}
			&-item {
				.title {
					h2 {
						font-size: max(24px, min(50px, var(--base-scale) * 5));
					}
					h3 {
						font-size: max(24px, min(50px, var(--base-scale) * 5));
					}
				}
				.phone-link {
					font-size: max(30px, min(50px, var(--base-scale) * 5));
				}
			}
		}
		&-social {
			&-item:not(:last-child) {
				margin-right: 25px;
			}
		}
	}
}
</style>
