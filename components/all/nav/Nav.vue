<template>
    <nav class="nav">
        <NavLogo />
        <NavList :active="active" :navList="navList" :navItem="navItem" />
        <NavContacts />
        <NavBurger />
    </nav>
</template>

<script setup>
import { ref } from "vue";

import NavLogo from "@/components/all/nav/NavLogo";
import NavList from "@/components/all/nav/NavList";
import NavContacts from "@/components/all/nav/NavContacts";
import NavBurger from "@/components/all/nav/NavBurger";

const active = ref("active");
const navList = ref("nav-list");
const navItem = ref("nav-item");
</script>

<style lang="scss">
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &-logo {
        display: flex;
        align-items: center;
        margin: 30px 0;
        &-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            b {
                font-family: "Kanit", sans-serif;
                font-size: 40px;
                color: var(--white);
                letter-spacing: -3px;
                transition: all 0.5s ease;
                text-shadow: 0 0 20px var(--shadowGreen);
            }
            p {
                font-size: 20px;
                color: var(--white);
                letter-spacing: 5px;
                margin-left: 10px;
                transition: all 0.5s ease;
            }
        }
        &-text:hover {
            p {
                color: var(--green);
            }
        }
    }
    &-list {
        display: flex;
    }
    &-item {
        font-size: 18px;
        a {
            position: relative;
            transition: all 0.3s ease;
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 8px;
                background-color: var(--green);
                top: -45px;
                left: 0;
                border-radius: 0 0 10px 10px;
                transform-origin: right;
                transform: scaleX(0);
                transition: transform 0.3s ease-in-out;
            }

            &:hover::before {
                transform-origin: left;
                transform: scaleX(1);
            }
        }
        .active {
            position: relative;
            color: var(--green);
            span {
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 8px;
                    background-color: var(--green);
                    top: -45px;
                    left: 0;
                    border-radius: 0 0 10px 10px;
                    box-shadow: 0 0 20px var(--shadowGreen);
                }
            }
        }
        a:hover {
            color: var(--green);
        }
    }
    &-item:not(:last-child) {
        margin-right: 2vw;
    }

    &-social {
        display: flex;
        &-svg:first-child {
            svg {
                left: 46%;
            }
        }
        &-svg {
            position: relative;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            box-shadow: 0 0 20px var(--shadowGreen);
            background-color: var(--boxShadowGreen);
            transition: all 0.5s ease;
            border: 1px solid var(--green);
            cursor: pointer;
            margin-right: 1vw;
            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: inline-block;
                width: 20px;
                height: 20px;
                transition: all 0.5s ease;
                path {
                    fill: var(--green);
                    transition: all 0.5s ease;
                }
            }
        }
        &-svg:hover {
            background-color: var(--green);
            svg path {
                fill: var(--black);
                transition: all 0.5s ease;
            }
        }
        &-item {
            border-radius: 40px;
            padding: 7px 20px;
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
        &-item:hover {
            background-color: var(--green);
            color: var(--black);
        }
    }
}

@media (max-width: 769px) {
    .nav {
        position: fixed;
        width: 100%;
        background: var(--white);
        left: 0;
        padding: 0 10px;
        &-list {
            display: none;
        }
        &-contacts {
            display: none;
        }
        &-item {
            margin-left: 20px;
        }
    }
    .nav.open {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: var(--white);
    }

    .nav {
        align-items: start;
        flex-direction: column;
    }

    .nav.open .nav-list {
        display: block;
    }

    .nav.open .nav-contacts {
        display: block;
    }
}
</style>
