<template>
    <section id="5" class="contacts">
        <div class="contacts-wrap container-content">
            <div class="contacts-wrap-left">
                <div class="form-title">
                    <div class="title">
                        <h2>Оставьте заявку</h2>
                    </div>
                </div>
                <Form />
            </div>

            <div class="contacts-wrap-right">
                <nuxt-img src="/contacts/phone.png" alt="phone" />
            </div>
        </div>
    </section>
</template>

<script setup>
import Form from "@/components/all/form/Form";
</script>

<style lang="scss">
.contacts {
    background: linear-gradient(
        90deg,
        rgba(49, 49, 52, 1) 0%,
        rgba(34, 34, 36, 1) 25%,
        rgba(18, 71, 60, 1) 50%,
        rgba(18, 71, 60, 1) 75%,
        rgba(255, 255, 255, 0.2) 100%
    );
    border-top: 1px solid var(--transparentlightGray);
    clip-path: polygon(0 -100%, 100% -100%, 100% 100%, 0% 100%);
    &-wrap {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        &-left {
            grid-column: 1 / span 4;
            .form {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                .input-box:nth-child(1) {
                    grid-column: 1 / span 1;
                    margin-right: 20px;
                }
                .input-box:nth-child(2) {
                    grid-column: 2 / span 1;
                    margin-left: 20px;
                }
                .input-box:nth-child(3) {
                    grid-row: 2 / span 1;
                    margin-right: 20px;
                }
                .input-box:nth-child(4) {
                    grid-column: 2 / span 1;
                    margin-left: 20px;
                }
                .input-box:nth-child(5) {
                    grid-row: 3 / span 1;
                    margin-right: 20px;
                }
                .input-box:nth-child(6) {
                    grid-row: 3 / span 1;
                    margin-left: 20px;
                }
                .input-box-chekbox {
                    grid-column: 1 / span 2;
                    grid-row: 4 / span 1;
                }
                .status {
                    grid-column: 1 / span 2;
                    grid-row: 5 / span 1;
                }
            }
        }
        &-right {
            position: relative;
            grid-column: 5 / span 2;

            img {
                width: 100%;
                position: absolute;
                top: -120px;
                left: 50px;
            }
        }
    }
}
</style>
