<template>
	<form class="form" @submit.prevent="createPost">
		<div class="input-box">
			<label for="name">Ваше Имя</label>
			<input
				id="name"
				type="text"
				class="name"
				name="name"
				placeholder="Имя"
				required
				v-model.trim="state.name"
				:class="{ error: formErrNameValide }"
				autocomplete="Ваше Имя"
			/>
			<div class="status">
				<div v-if="(v$.name.$error, formNameError)" class="status-p">
					{{ v$.name.$errors[0].$message }}
				</div>
			</div>
		</div>

		<div v-if="emailActive" class="input-box">
			<label for="email">Ваш E-MAIL адрес</label>

			<input
				id="email"
				type="email"
				name="email"
				placeholder="Email"
				v-model="state.email"
				:class="{ error: formErrEmailValide }"
				autocomplete="Ваш E-MAIL адрес"
			/>
			<div class="status">
				<div v-if="(v$.email.$error, formEmailError)" class="status-p">
					{{ v$.email.$errors[0].$message }}
				</div>
			</div>
		</div>

		<div class="input-box">
			<label for="phone">Ваш номер телефона</label>
			<InputMask
				id="phone"
				required
				type="text"
				class="phone"
				name="phone"
				v-model.trim="state.phone"
				mask="+7 (999) 999-9999"
				placeholder="+7 (999) 999 99 99"
				autocomplete="+7 (999) 999-9999"
			/>

			<div class="status">
				<div v-if="v$.phone.$error" class="status-p">
					{{ v$.phone.$errors[0].$message }}
				</div>
			</div>
		</div>

		<div v-if="commentActive" class="input-box comment-mob">
			<label for="comment">Ваш комментарий ( по желанию )</label>
			<input
				id="comment"
				type="text"
				class="comment"
				name="comment"
				v-model.trim="state.comment"
				autocomplete="Ваш комментарий ( по желанию )"
			/>
		</div>

		<div v-if="budgetActive" class="input-box">
			<label for="budget">Бюджет на сайт</label>
			<input
				id="budget"
				type="text"
				class="budget"
				name="budget"
				placeholder="от 10 000 руб."
				v-model.trim="state.budget"
				autocomplete="от 10 000 руб."
			/>
		</div>

		<div class="input-box">
			<div class="button">
				<button type="submit" class="send-form">Отправить заявку</button>
			</div>
		</div>

		<div class="input-box-chekbox">
			<input
				class="form-check-input"
				type="checkbox"
				value=""
				id="flexCheckChecked"
				checked
			/>

			<label for="flexCheckChecked"
				>Согласие на обработку
				<NuxtLink to="#" target="_blank"
					><span> персональных данных </span></NuxtLink
				>
			</label>
		</div>

		<div class="status">
			<div v-if="formValide" class="status-p">
				Форма заполнена неверно.<br /><br />
				Пожалуйста заполните все поля правильно!
			</div>

			<div v-if="response" class="status-p">
				<div class="status-p-top">
					<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							stroke-linecap="round"
							stroke-linejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<g id="Interface / Check">
								<path
									id="Vector"
									d="M6 12L10.2426 16.2426L18.727 7.75732"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</g>
						</g>
					</svg>
					<p>Заявка успешно отправлена.</p>
				</div>

				<div class="status-p-bottom">
					Наши специалисты свяжутся с вами в ближайшее время!
				</div>
			</div>

			<div v-if="error" class="status-p status-p-error">
				<svg
					viewBox="0 0 24 24"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					aria-labelledby="errorIconTitle"
					stroke="#dc3545"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					fill="none"
					color="#000000"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<title id="errorIconTitle">Error</title>
						<path d="M12 8L12 13"></path>
						<line x1="12" y1="16" x2="12" y2="16"></line>
						<circle cx="12" cy="12" r="10"></circle>
					</g>
				</svg>
				<p>Серверная ошибка</p>
			</div>
		</div>
	</form>
</template>

<script>
import { reactive, computed } from 'vue';
import axios from 'axios';
import InputMask from 'primevue/inputmask';
import { useVuelidate } from '@vuelidate/core';
import {
	required,
	email,
	minLength,
	maxLength,
	helpers,
} from '@vuelidate/validators';

export default {
	setup() {
		const state = reactive({
			name: '',
			phone: '',
			email: '',
			comment: '',
			budget: '',
		});

		const alpha = helpers.regex(/^[а-яА-Яa-zA-Z]*$/);

		const rules = computed(() => {
			return {
				name: {
					required: helpers.withMessage(
						'Это поле обязательно к заполнению.',
						required
					),
					minLength: helpers.withMessage(
						' Имя должно содержать не менее 2-ух букв',
						minLength(2)
					),
					maxLength: helpers.withMessage(
						'Максимальное количество символов 15',
						maxLength(15)
					),
					alpha: helpers.withMessage('Используйте только буквы', alpha),
				},
				phone: {
					required: helpers.withMessage(
						'Это поле обязательно к заполнению.',
						required
					),
				},
				email: {
					email: helpers.withMessage(
						'Пожалуйста, введите действительный адрес электронной почты.',
						email
					),
				},
			};
		});

		const v$ = useVuelidate(rules, state);
		return { state, v$ };
	},
	props: {
		emailActive: {
			type: Boolean,
			default() {
				return true;
			},
		},
		commentActive: {
			type: Boolean,
			default() {
				return true;
			},
		},
		budgetActive: {
			type: Boolean,
			default() {
				return true;
			},
		},
	},
	data() {
		return {
			error: false,
			formErrNameValide: false,
			formErrEmailValide: false,
			formValide: false,
			response: false,
		};
	},
	components: { InputMask },
	methods: {
		createPost() {
			this.v$.$validate();
			if (!this.v$.$error) {
				axios
					.post('https://weblinex.ru/sender.php/', {
						name: this.state.name,
						phone: this.state.phone,
						email: this.state.email,
						comment: this.state.comment,
						budget: this.state.budget,
					})
					.then(response => {
						return (this.response = true);
					})
					.catch(error => {
						return (this.error = true);
					});
				return (this.formValide = false);
			} else {
				return (this.formValide = true);
			}
		},
	},
	computed: {
		formNameError() {
			if (this.v$.name.$error) {
				return (this.formErrNameValide = true);
			} else {
				return (this.formErrNameValide = false);
			}
		},
		formEmailError() {
			if (this.v$.email.$error) {
				return (this.formErrEmailValide = true);
			} else {
				return (this.formErrEmailValide = false);
			}
		},
	},
};
</script>

<style lang="scss">
.form {
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-top: 50px;
	.form-check-input {
		background-color: var(--green);
	}
	.form-check-input:checked {
		border-color: var(--boxShadowGreen);
	}
}

.input-box {
	display: flex;
	flex-direction: column;
	margin-bottom: 15px;
	&-chekbox {
		label {
			color: rgb(215 215 215);
		}
	}
	label {
		margin-bottom: 10px;
		color: #cacacacf;
	}
	input {
		outline: none !important;
		font-size: 17px;
		border-radius: 40px;
		border: 1px solid var(--transparentWhite20);
		padding: 15px 15px 15px 25px;

		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0.2) 0%,
			rgba(255, 255, 255, 0.1) 100%
		);
	}
	input::placeholder {
		color: var(--transparentBG);
	}
	input::-webkit-input-placeholder {
		color: var(--transparentBG);
	}
	input::-moz-placeholder {
		color: var(--transparentBG);
	}
	input::-moz-placeholder {
		color: var(--transparentBG);
	}
	input::-ms-input-placeholder {
		color: var(--transparentBG);
	}
	input::-ms-input-placeholder {
		color: var(--transparentBG);
	}
}
.button {
	input {
		width: 100%;
		padding: 15px;
		font-size: 17px;
		border: 2px solid var(--lightOrange);
		transition: all 0.4s;
		background-color: var(--white);
		margin-top: 20px;
		color: var(--black);
	}

	input:hover {
		cursor: pointer;
		border: 2px solid var(--brown);
		background-color: var(--lightOrange);
	}
}
.input-box-chekbox {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 15px 0;
	text-align: center;
	input {
		margin-right: 20px;
	}
	span {
		text-decoration: underline;
		color: var(--green);
		transition: all 0.4s;
	}
	span:hover {
		text-decoration: none;
	}
}

form {
	button {
		width: 100%;
		border-radius: 40px;
		padding: 15px 30px;
		margin-top: 35px;
		border: 1px solid var(--green);
		color: var(--white);
		cursor: pointer;
		transition: all 0.5s ease;
		box-shadow: 0 0 20px var(--shadowGreen);
		background-color: var(--boxShadowGreen);
	}
	button:hover {
		background-color: var(--green);
		color: var(--black);
	}
	input.error {
		border: 2px solid var(--red);
	}
}

.status {
	display: flex;
	justify-content: center;
	&-p {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		&-top {
			display: flex;
			p {
				margin-left: 20px;
				margin-bottom: 15px;
			}
		}
		&-bottom {
			text-align: center;
		}
		svg {
			width: 25px !important;
			height: 25px !important;
			#Vector {
				stroke: var(--green);
				fill: none;
			}
		}
		&-error {
			flex-direction: row;
			svg {
				margin-right: 15px;
			}
		}
	}
}
</style>
