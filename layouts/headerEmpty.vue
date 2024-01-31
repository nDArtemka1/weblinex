<template>
	<div class="wrapper">
		<NavBarFix />
		<NavMobile />
		<div class="content">
			<div class="container">
				<Nav />
			</div>

			<slot />
			<Contacts />
			<hr class="hr" />
			<Footer />
		</div>
		<Modal><Form :budgetActive="false" /></Modal>
	</div>
</template>

<script setup>
import NavBarFix from '@/components/all/nav/NavBarFix';

import Nav from '@/components/all/nav/Nav';
import NavMobile from '@/components/all/nav/NavMobile';
import Footer from '@/components/all/footer/Footer';
import Contacts from '@/components/all/contacts/Contacts';
import Form from '@/components/all/form/Form';
import Modal from '@/components/universal/modal/Modal';
</script>
