<template>
	<div
		class="modal fade"
		id="exampleModal"
		tabindex="-1"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<div class="modal-header-title" id="exampleModalLabel">
						{{ popupTitle }}
					</div>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
					></button>
					<hr class="hr" />
				</div>
				<div class="modal-body"><slot /></div>
			</div>
		</div>
	</div>
</template>

<script setup>
const popupTitle = usePopupTitle();
</script>

<style lang="scss">
.modal {
	&-header {
		&-title {
			animation: slide 10s linear infinite forwards;
			background: repeating-linear-gradient(
				-45deg,
				var(--green) 5%,
				var(--white) 10%,
				var(--green) 15%,
				var(--white) 5%,
				var(--green) 15%
			);
			-webkit-background-clip: text;
			background-clip: text;
			background-size: 600vw 600vw;
			color: transparent;
			font-size: 33px;
			font-weight: 600;
			height: 40px;
			margin-bottom: -40px;
			margin-left: 25px;
			text-shadow: 0 0 20px var(--shadowGreen);
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
		}
		.hr {
			height: 1.5px;
			margin-top: 40px;
		}
	}
	&-body {
		padding: 15px 30px;
		.form {
			margin-top: 0;
		}
	}
}

@media (max-width: 577px) {
	.modal-header-title {
		font-size: max(22px, min(50px, var(--base-scale) * 5));
	}
}
</style>
