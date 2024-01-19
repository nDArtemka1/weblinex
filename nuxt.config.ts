// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	pages: true,
	modules: [
		'@nuxt/image',
		'nuxt-ssr-cache',
		'@vueuse/motion/nuxt',
		'nuxt-viewport',
	],
	viewport: {
		breakpoints: {
			desktop: 1024,
			desktopMedium: 1280,
			desktopWide: 1600,

			mobile: 320,
			mobileMedium: 375,
			mobileWide: 577,

			tablet: 992,
		},

		cookieName: 'viewport',

		defaultBreakpoints: {
			desktop: 'desktop',
			mobile: 'mobile',
			tablet: 'tablet',
		},
		fallbackBreakpoint: 'desktop',
	},
	components: [
		{
			path: '~/components',
		},
	],
	css: ['~/assets/scss/main.scss', '~/assets/scss/reset.scss'],
	build: {
		transpile: ['primevue', 'gsap'],
	},
	image: {
		//dir: 'public/images/',
		provider: 'twicpics',
		twicpics: {
			baseURL: 'https://weblinex.ru/images/',
		},
	},
	app: {
		head: {
			title:
				'Создание и продвижение сайтов по всей России | WebLinex |  Заказать сайт под ключ | ВебЛайнекс | Разработка лендингов, сайт визитки, интернет магазинов и тд...',

			htmlAttrs: {
				lang: 'ru',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					hid: 'description',
					name: 'description',
					content:
						'Сайты от веб-студии «ВебЛайнекс» — Создание и продвижение сайтов по всей России с индивидуальным дизайном и гарантией продаж товаров и услуг через интернет. Разработка Landing page, сайт визитки, интернет магазина и тд...',
				},
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
		// // добавление анимации тега Transition
		pageTransition: { name: 'page', mode: 'out-in' },
	},
});
