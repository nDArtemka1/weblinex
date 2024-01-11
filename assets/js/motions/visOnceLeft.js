let visOnceLeft = {
	initial: {
		opacity: 0,
		x: -150,
	},
	visibleOnce: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'damping',
			// stiffness: 250,
			damping: 20,
			// mass: 0.5,
		},
	},
};

export default visOnceLeft;
