<template>
	<div ref="main" class="wrapper">
		<div class="container">
			<!-- :key="$route.fullPath" обновляет компонент при смене маршрута -->
			<SectionMenu v-if="$route.path == '/'" :key="$route.fullPath" />
		</div>
		<NavBarFix />
		<NavMobile />
		<div class="content">
			<div class="container">
				<Nav />
			</div>

			<slot />
			<Contacts />
			<hr class="hr" />
			<Footer />
		</div>
		<Modal><Form :budgetActive="false" /></Modal>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import NavBarFix from '@/components/all/nav/NavBarFix';
import SectionMenu from '@/components/all/sectionMenu/SectionMenu';
import Nav from '@/components/all/nav/Nav';
import NavMobile from '@/components/all/nav/NavMobile';
import Footer from '@/components/all/footer/Footer';
import Contacts from '@/components/all/contacts/Contacts';
import Form from '@/components/all/form/Form';
import Modal from '@/components/all/modal/Modal';

const main = ref();
let ctx;
let smoother;

onMounted(() => {
	ctx = gsap.context(() => {
		// create the smooth scroller FIRST!
		if (ScrollTrigger.isTouch !== 1) {
			smoother = ScrollSmoother.create({
				wrapper: '.wrapper',
				content: '.content',
				smooth: 1.5,
				effects: true,
			});
		}
	}, main.value);
});
onUnmounted(() => {
	ctx.revert();
});
</script>
