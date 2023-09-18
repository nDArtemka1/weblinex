<template>
    <div class="">
        <Header />
        <main>
            <hr class="hr" />
            <Advantages />
            <hr class="hr" />
            <Portfolio />
            <hr class="hr" />
            <Rates />
        </main>
    </div>
</template>

<script setup>
import Header from "@/components/all/header/Header";
import Advantages from "@/components/all/advantages/Advantages";
import Portfolio from "@/components/all/portfolio/Portfolio";
import Rates from "@/components/all/rates/Rates";

// Переход по страницам
import transitionConfig from "../helpers/transitionConfig";

definePageMeta({
    pageTransition: transitionConfig,
});
</script>

<style>
.wrapper {
    position: relative;
}
</style>
