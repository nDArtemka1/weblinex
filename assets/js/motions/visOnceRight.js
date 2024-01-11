let visOnceRight = {
	initial: {
		opacity: 0,
		x: 150,
	},
	visibleOnce: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'damping',
			damping: 20,
		},
	},
};

export default visOnceRight;
