<template>
	<div class="index">
		<Header />
		<hr class="hr" />
		<main>
			<Advantages />
			<Portfolio />
			<StagesWorks />
			<Rates />
		</main>
	</div>
</template>

<script setup>
import Header from '@/components/all/header/Header';
import Advantages from '@/components/all/advantages/Advantages';
import Portfolio from '@/components/all/portfolio/Portfolio';
import StagesWorks from '@/components/all/stagesWorks/StagesWorks';
import Rates from '@/components/all/rates/Rates';
</script>
