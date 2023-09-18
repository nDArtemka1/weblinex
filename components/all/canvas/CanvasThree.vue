<template>
    <canvas class="canvas3" :id="id"></canvas>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps(["id"]);

onMounted(() => {
    let cax = document.getElementById(props.id),
        ctxx = cax.getContext("2d");
    let w = (cax.width = window.innerWidth);
    let h = (cax.height = window.innerHeight);
    let area = new Array();
    ctxx.fillStyle = "#f00";

    ctxx.lineCap = "round";
    ctxx.lineJoin = "round";

    function circle(x, y, rad, dx, dy) {
        this.x = x;
        this.y = y;
        this.e = Math.random() * 1;
        this.ma = Math.random() * 2;
        this.pls = Math.random() * 0.1;
        this.m = 50;
        this.m1 = 20;
        this.dx = dx;
        this.dy = dy;
        this.radus = rad;
        let currentPoint = new Array();
        let otherPoint = new Array();
        let distance = 0;

        this.draw = function () {
            for (let i = 0; i < area.length; i++) {
                currentPoint = area[i];
                for (let j = 0; j < area.length; j++) {
                    otherPoint = area[j];
                    if (otherPoint == currentPoint) {
                        continue;
                    }

                    distance = Math.sqrt(
                        (otherPoint.x - currentPoint.x) *
                            (otherPoint.x - currentPoint.x) +
                            (otherPoint.y - currentPoint.y) *
                                (otherPoint.y - currentPoint.y)
                    );

                    if (distance <= 240) {
                        // ctxx.strokeStyle = `rgb(${this.x / (w / 255)}, ${255 - this.y / (h / 255)}, ${this.y / (h / 255)
                        //     }, ${1})`;
                        ctxx.strokeStyle = `rgb(${170}, ${170}, ${170}, ${1})`;
                        ctxx.lineWidth = 0.1 / 2;
                        ctxx.beginPath();
                        ctxx.moveTo(currentPoint.x, currentPoint.y);
                        ctxx.lineTo(otherPoint.x, otherPoint.y);
                        ctxx.stroke();
                    }
                }
            }

            ctxx.beginPath();
            // ctxx.fillStyle = `rgb(${this.x / (w / 255)}, ${255 - this.y / (h / 255)}, ${this.y / (h / 255)
            //     }, ${1})`;
            ctxx.fillStyle = `#2CE8C2`;
            ctxx.arc(this.x, this.y, rad, 2 * Math.PI, false);
            ctxx.fill();
        };
        this.update = function () {
            if (this.x + this.radus > w || this.x - this.radus < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radus > h || this.y - this.radus < 0) {
                this.dy = -this.dy;
            }

            this.y += this.dy;
            this.x += this.dx;
            this.draw();
        };
    }

    let cur = 100;
    let bv = 0;
    for (let i = 0; i < 20; i++) {
        let rad = 5;
        let x = Math.random() * w;
        let y = Math.random() * h;
        let dx = Math.random() * 3;
        let dy = Math.random() * 3;

        area.push(new circle(x, y, rad, dx, dy));

        // setTimeout(() => {
        //     area.shift();
        // }, 1000);
    }

    function animate() {
        requestAnimationFrame(animate);
        ctxx.clearRect(0, 0, w, h);
        for (let i = 0; i < area.length; i++) {
            area[i].update();
            //   console.log(area[i]);
        }
    }
    animate();
});
</script>

<style lang="scss">
.canvas3 {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
