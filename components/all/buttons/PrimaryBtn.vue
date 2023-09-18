<template>
    <div class="main-btn">
        <NuxtLink class="primary-btn" :to="linkBtn"
            ><span>{{ textBtn }}</span></NuxtLink
        >
    </div>
</template>

<script setup>
const props = defineProps(["textBtn", "linkBtn"]);
</script>

<style lang="scss">
.main-btn {
    font-size: 18px;
    font-weight: 500;
    padding: 20px 0;
    .primary-btn {
        border-radius: 40px;
        padding: 15px 30px;
        border: 1px solid var(--green);
        color: var(--white);
        cursor: pointer;
        transition: all 0.5s ease;
        box-shadow: 0 0 20px var(--shadowGreen);
        background-color: var(--boxShadowGreen);
        span {
            font-size: 15px;
            font-weight: 600;
            line-height: 22px;
        }
    }
    .primary-btn:hover {
        background-color: var(--green);
        color: var(--black);
    }
}
</style>
