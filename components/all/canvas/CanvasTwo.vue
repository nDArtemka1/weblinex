<template>
    <canvas class="canvas3" :id="id"></canvas>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps(["id"]);

onMounted(() => {
    var canvas = document.getElementById(props.id);

    var c = canvas.getContext("2d");
    canvas.width = window.innerWidth - 17;
    canvas.height = window.innerHeight;
    var mouse = {
        x: undefined,
        y: undefined,
    };

    var maxRadius = 30;
    var minRadius = 2;

    var colorArray = ["#fff", "#2CE8C2", "#55bdd7", "#2ce8c260", "#2eecc580"];

    window.addEventListener("mousemove", function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth - 17;
        canvas.height = window.innerHeight;

        init();
    });

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "blue";
            c.fillStyle = this.color;
            c.fill();
        };

        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            if (
                this.x + this.radius > innerHeight ||
                this.x - this.radius < 0
            ) {
                this.dy = -this.dy;
            }

            this.x += this.dx;
            this.y += this.dy;

            //interactivity
            if (
                mouse.x - this.x < 50 &&
                mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 &&
                mouse.y - this.y > -50
            ) {
                if (this.radius < maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }

            this.draw();
        };
    }

    var circleArray = [];

    function init() {
        circleArray = [];
        for (var i = 0; i < 600; i++) {
            var radius = Math.random() * 3 + 1;
            var x = Math.random() * (innerWidth - radius * 2) + radius;
            var y = Math.random() * (innerHeight - radius * 2) + radius;
            var dx = (Math.random() - 0.5) * 2;
            var dy = (Math.random() - 0.5) * 2;
            circleArray.push(new Circle(x, y, dx, dy, radius));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);

        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }
    }

    init();

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
