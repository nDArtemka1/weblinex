<template>
	<header class="header-other">
		<div class="header-intro container">
			<div class="header-content">
				<div class="header-info">
					<div class="header-info-border">
						<div
							class="header-title-shadow fadeoutleft"
							v-animateonscroll="{
								enterClass: 'fadeinleft',
							}"
						>
							<h1 class="header-title" v-html="props.headerTitle"></h1>
						</div>

						<div
							class="header-promo fadeoutleft"
							v-animateonscroll="{
								enterClass: 'fadeinleft',
							}"
							:style="{ transitionDelay: '100ms' }"
							v-html="props.headerDescription"
						></div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script setup>
const props = defineProps(['headerTitle', 'headerDescription']);
</script>
