<template>
	<div class="header-content" v-motion="entSlideLeft">
		<div class="header-info">
			<div class="header-info-border">
				<div class="header-title-shadow">
					<h1 class="header-title">
						РАЗРАБОТКА САЙТОВ<br />
						<span> ДЛЯ ВАШЕГО БИЗНЕСА</span>
					</h1>
				</div>

				<div class="header-promo">
					Мы - студия web-разработки, работаем уже более 3-х лет,<br />
					готовы разработать для вас сайт в кротчайшие сроки.
				</div>
			</div>
		</div>

		<div class="header-modal-btn">
			<div
				@click="popupTitle = 'Остались вопросы?'"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				class="arrow-btn"
			>
				<div class="arrow-btn-a">
					<span>Подробнее</span>
					<span class="material-symbols-outlined chevron-right">
						chevron_right
					</span>
				</div>
			</div>

			<div class="header-modal-btn-qw">Остались вопросы?</div>
		</div>
	</div>
</template>

<script setup>
import entSlideLeft from '/assets/js/motions/entSlideLeft';

const popupTitle = usePopupTitle();
</script>
