let visOnceBottom = {
    initial: {
        opacity: 0,
        y: 100,
    },
    visibleOnce: {
        opacity: 1,
        y: 0,
        transition: {
            type: "damping",
            damping: 25,
        },
    }
}

export default visOnceBottom;