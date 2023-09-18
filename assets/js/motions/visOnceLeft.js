let visOnceLeft = {
    initial: {
        opacity: 0,
        x: -150,
    },
    visibleOnce: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'damp',
            stiffness: 250,
            damping: 25,
            mass: 0.5,
        },
    }
}

export default visOnceLeft;