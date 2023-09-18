<script setup>
import { onMounted } from "vue";
import gsap from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

import { useTransitionComposable } from "./composables/transition-composable";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);

const { toggleTransitionComplete } = useTransitionComposable();

onMounted(() => {
    toggleTransitionComplete(true);
});
</script>

<template>
    <NuxtLayout name="default">
        <NuxtPage />
    </NuxtLayout>
</template>
