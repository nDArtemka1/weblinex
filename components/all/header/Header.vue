<template>
    <header class="header">
        <section id="1">
            <div class="header-intro">
                <div class="header-intro-wrap container">
                    <HeaderContent />
                </div>
            </div>
            <div class="container"><Preloader /></div>
        </section>
    </header>
</template>

<script setup>
import HeaderContent from "@/components/all/header/HeaderContent";
import Preloader from "@/components/all/header/Preloader";
</script>

<style lang="scss">
.header {
    width: 100%;
    height: 100%;
    background-image: url("@/images/header/header-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    margin-top: -115px;
    z-index: -1; // не работает кнока модалки
    &-intro {
        height: 100vh;
        &-wrap {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-image: url("@/images/header/developer.png");
            background-repeat: no-repeat;
            background-position: bottom -3vw right 0px;
            background-size: clamp(400px, 100%, 600px);
            z-index: 1;
        }
    }
}
</style>
