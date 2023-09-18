<template>
    <div ref="main" class="wrapper">
        <!-- :key="$route.fullPath" обновляет компонент при смене маршрута -->
        <SectionMenu :key="$route.fullPath" />
        <NavBarFix />
        <div class="content">
            <div class="container-nav"><Nav /></div>

            <slot />
            <Contacts />
            <hr class="hr" />
            <Footer />
        </div>
        <Transition name="fade" mode="out-in">
            <Popup v-if="modalActive" @closePopup="modalActive = !modalActive"
                ><Form :budgetActive="false" /></Popup
        ></Transition>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import gsap from "gsap-trial";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

import NavBarFix from "@/components/all/nav/NavBarFix";
import SectionMenu from "@/components/all/sectionMenu/SectionMenu";
import Nav from "@/components/all/nav/Nav";
import Footer from "@/components/all/footer/Footer";
import Popup from "@/components/all/popup/Popup";
import Contacts from "@/components/all/contacts/Contacts";
import Form from "@/components/all/form/Form";

const modalActive = useModalActive();

const main = ref();
let ctx;
let smoother;

onMounted(() => {
    ctx = gsap.context(() => {
        // create the smooth scroller FIRST!
        if (ScrollTrigger.isTouch !== 1) {
            smoother = ScrollSmoother.create({
                wrapper: ".wrapper",
                content: ".content",
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

<style>
.wrapper {
    position: relative;
}
</style>
