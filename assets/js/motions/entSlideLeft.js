let entSlideLeft = {
    initial: {
        opacity: 0,
        x: -150,
    },
    enter: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'damping',
            damping: 25,
        },
    }
}

export default entSlideLeft;