<template>
	<div class="container">
		<!-- :key="$route.fullPath" обновляет компонент при смене маршрута -->
		<SectionMenu v-if="$route.path == '/'" :key="$route.fullPath" />
	</div>
	<NavBarFix />
	<NavMobile />
	<Nav class="container" />
	<slot />
	<Contacts />
	<hr class="hr" />
	<Footer />
	<Modal><Form :budgetActive="false" /></Modal>
</template>

<script setup>
import NavBarFix from '@/components/all/nav/NavBarFix';
import SectionMenu from '@/components/all/sectionMenu/SectionMenu';
import Nav from '@/components/all/nav/Nav';
import NavMobile from '@/components/all/nav/NavMobile';
import Footer from '@/components/all/footer/Footer';
import Contacts from '@/components/all/contacts/Contacts';
import Form from '@/components/all/form/Form';
import Modal from '@/components/universal/modal/Modal';
</script>
