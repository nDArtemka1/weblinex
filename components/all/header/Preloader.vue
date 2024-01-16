<template>
	<div class="preloader">
		<div class="preloader-ring">
			<div class="preloader-sector">H</div>
			<div class="preloader-sector">T</div>
			<div class="preloader-sector">M</div>
			<div class="preloader-sector">L</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">&</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">C</div>
			<div class="preloader-sector">S</div>
			<div class="preloader-sector">S</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">J</div>
			<div class="preloader-sector">a</div>
			<div class="preloader-sector">v</div>
			<div class="preloader-sector">a</div>
			<div class="preloader-sector">S</div>
			<div class="preloader-sector">c</div>
			<div class="preloader-sector">r</div>
			<div class="preloader-sector">i</div>
			<div class="preloader-sector">p</div>
			<div class="preloader-sector">t</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
		</div>

		<div class="preloader-ring">
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">V</div>
			<div class="preloader-sector">U</div>
			<div class="preloader-sector">E</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">N</div>
			<div class="preloader-sector">u</div>
			<div class="preloader-sector">x</div>
			<div class="preloader-sector">t</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
		</div>
		<div class="preloader-ring">
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">P</div>
			<div class="preloader-sector">H</div>
			<div class="preloader-sector">P</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector">L</div>
			<div class="preloader-sector">a</div>
			<div class="preloader-sector">r</div>
			<div class="preloader-sector">a</div>
			<div class="preloader-sector">v</div>
			<div class="preloader-sector">e</div>
			<div class="preloader-sector">l</div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
			<div class="preloader-sector"></div>
		</div>
	</div>
</template>

<style lang="scss">
.preloader {
	display: flex;
	animation: spin-1 8s linear infinite;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 250px;
	color: var(--green);
	position: absolute;
	bottom: 160px;
	right: 130px;
	will-change: transform;
}
.preloader,
.preloader-ring {
	transform-style: preserve-3d;
	will-change: transform;
}
.preloader-ring {
	animation: spin-2 7.5s linear infinite;
	position: relative;
	height: 150px;
	width: 20px;
	will-change: transform;
}
.preloader-ring:nth-child(even) {
	animation-direction: reverse;
	will-change: transform;
}
.preloader-sector {
	font-size: 40px;
	line-height: 60px;
	font-family: Consolas, Lucida Console, Menlo, Monaco, monospace;
	font-weight: 600;
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateZ(350px);
	will-change: transform;
}
.preloader-sector,
.preloader-sector:empty:before {
	display: inline-block;
	width: 100%;
	height: 100%;
	will-change: transform;
}
.preloader-sector:empty:before {
	background: linear-gradient(
		transparent 50%,
		#bfe2ff 50% 55%,
		transparent 55%
	);
	content: '';
}
.preloader-sector:nth-child(2) {
	transform: rotateY(12deg) translateZ(350px);
}
.preloader-sector:nth-child(3) {
	transform: rotateY(24deg) translateZ(350px);
}
.preloader-sector:nth-child(4) {
	transform: rotateY(36deg) translateZ(350px);
}
.preloader-sector:nth-child(5) {
	transform: rotateY(48deg) translateZ(350px);
}
.preloader-sector:nth-child(6) {
	transform: rotateY(60deg) translateZ(350px);
}
.preloader-sector:nth-child(7) {
	transform: rotateY(72deg) translateZ(350px);
}
.preloader-sector:nth-child(8) {
	transform: rotateY(84deg) translateZ(350px);
}
.preloader-sector:nth-child(9) {
	transform: rotateY(96deg) translateZ(350px);
}
.preloader-sector:nth-child(10) {
	transform: rotateY(108deg) translateZ(350px);
}
.preloader-sector:nth-child(11) {
	transform: rotateY(120deg) translateZ(350px);
}
.preloader-sector:nth-child(12) {
	transform: rotateY(132deg) translateZ(350px);
}
.preloader-sector:nth-child(13) {
	transform: rotateY(144deg) translateZ(350px);
}
.preloader-sector:nth-child(14) {
	transform: rotateY(156deg) translateZ(350px);
}
.preloader-sector:nth-child(15) {
	transform: rotateY(168deg) translateZ(350px);
}
.preloader-sector:nth-child(16) {
	transform: rotateY(180deg) translateZ(350px);
}
.preloader-sector:nth-child(17) {
	transform: rotateY(192deg) translateZ(350px);
}
.preloader-sector:nth-child(18) {
	transform: rotateY(204deg) translateZ(350px);
}
.preloader-sector:nth-child(19) {
	transform: rotateY(216deg) translateZ(350px);
}
.preloader-sector:nth-child(20) {
	transform: rotateY(228deg) translateZ(350px);
}
.preloader-sector:nth-child(21) {
	transform: rotateY(240deg) translateZ(350px);
}
.preloader-sector:nth-child(22) {
	transform: rotateY(252deg) translateZ(350px);
}
.preloader-sector:nth-child(23) {
	transform: rotateY(264deg) translateZ(350px);
}
.preloader-sector:nth-child(24) {
	transform: rotateY(276deg) translateZ(350px);
}
.preloader-sector:nth-child(25) {
	transform: rotateY(288deg) translateZ(350px);
}
.preloader-sector:nth-child(26) {
	transform: rotateY(300deg) translateZ(350px);
}
.preloader-sector:nth-child(27) {
	transform: rotateY(312deg) translateZ(350px);
}
.preloader-sector:nth-child(28) {
	transform: rotateY(324deg) translateZ(350px);
}
.preloader-sector:nth-child(29) {
	transform: rotateY(336deg) translateZ(350px);
}
.preloader-sector:nth-child(30) {
	transform: rotateY(348deg) translateZ(350px);
}
@keyframes spin-1 {
	from {
		transform: rotateY(0) rotateX(30deg);
	}
	to {
		transform: rotateY(1turn) rotateX(30deg);
	}
}
@keyframes spin-2 {
	from {
		transform: rotateY(0);
	}
	to {
		transform: rotateY(1turn);
	}
}
@media (max-width: 992px) {
	.preloader {
		display: none;
	}
}
</style>
