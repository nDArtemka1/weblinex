<template>
    <div class="burger-menu">
        <input type="checkbox" id="burger-menu" />
        <label for="burger-menu">
            <div></div>
            <div></div>
            <div></div>
        </label>
    </div>
</template>

<script setup></script>

<style lang="scss">
.burger-menu {
    display: none;
    input {
        display: none;
    }

    label {
        position: relative;
        width: 50px;
        height: 20px;
        display: inline-block;
        cursor: pointer;
        transition: all 0.5s;
        text-align: left;
    }

    div,
    div:before,
    div:after {
        background: var(--black);
        position: absolute;
        height: 5px;
        width: 40px;
        border-radius: 4px;
        transition: all 0.5s;
        right: 0;
    }

    label {
        div:first-child {
            top: 0px;
        }
        div:nth-child(2) {
            top: 10px;
            width: 20px;
        }
        div:nth-child(3) {
            top: 20px;
        }
    }

    #burger-menu:checked + label {
        div:first-child {
            top: 10px;
            transform: rotate(45deg);
            transition: top 0.15s, transform 0.15s 0.15s;
        }
        div:nth-child(2),
        div:nth-child(3) {
            width: 40px;
            top: 10px;
            transform: rotate(-45deg);
            transition: top 0.15s, transform 0.15s 0.15s;
        }
    }
}

@media (max-width: 769px) {
    .burger-menu {
        display: block;
        position: fixed;
        top: 20px;
        right: 20px;
    }
}
</style>
