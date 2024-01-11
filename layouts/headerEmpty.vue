<template>
	<div ref="main" class="wrapper">
		<NavBarFix />
		<div class="content">
			<div class="container"><Nav /></div>
			<hr class="hr" />
			<slot />
			<Contacts />
			<hr class="hr" />
			<Footer />
		</div>
		<Transition name="fade" mode="out-in">
			<Popup v-if="modalActive" @closePopup="modalActive = !modalActive">
				<Form :budgetActive="false"
			/></Popup>
		</Transition>
	</div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap-trial';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';

import Nav from '@/components/all/nav/Nav';
import NavBarFix from '@/components/all/nav/NavBarFix';
import Contacts from '@/components/all/contacts/Contacts';
import Footer from '@/components/all/footer/Footer';
import Form from '@/components/all/form/Form';
import Popup from '@/components/all/popup/Popup';

const modalActive = useModalActive();

const main1 = ref();
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
