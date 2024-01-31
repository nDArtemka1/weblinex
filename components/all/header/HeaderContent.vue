<template>
	<div class="header-content">
		<div class="header-info">
			<div class="header-info-border">
				<div
					class="header-title-shadow fadeoutleft"
					v-animateonscroll="{
						enterClass: 'fadeinleft',
					}"
				>
					<h1 class="header-title">
						РАЗРАБОТКА САЙТОВ<br />
						<span> ДЛЯ ВАШЕГО БИЗНЕСА</span>
					</h1>
				</div>

				<div
					class="header-promo fadeoutleft"
					v-animateonscroll="{
						enterClass: 'fadeinleft',
					}"
					:style="{ transitionDelay: '100ms' }"
				>
					Мы - студия web-разработки, работаем уже более 3-х лет,<br />
					готовы разработать для вас сайт в кротчайшие сроки.
				</div>
			</div>
		</div>

		<div
			class="header-modal-btn fadeoutleft"
			v-animateonscroll="{
				enterClass: 'fadeinleft',
			}"
			:style="{ transitionDelay: '200ms' }"
		>
			<div
				@click="popupTitle = 'Остались вопросы?'"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				class="arrow-btn"
			>
				<div class="arrow-btn-a">
					<span>Подробнее</span>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
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
				</div>
			</div>

			<div class="header-modal-btn-qw">Остались вопросы?</div>
		</div>
	</div>
</template>

<script setup>
const popupTitle = usePopupTitle();
</script>
