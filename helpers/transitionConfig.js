import gsap from "gsap-trial";

import { useTransitionComposable } from '../composables/transition-composable';

const { toggleTransitionComplete } = useTransitionComposable();

// Переход по страницам
const pageTransition = {
    name: 'page-transiton',
    mode: 'out-in',
    onEnter: (el, done) => {
        gsap.set(el, { autoAlpha: 0, opacity: 0, });
        gsap
            .timeline({
                paused: true,
                onComplete() {
                    toggleTransitionComplete(true);
                    done();
                },
            })
            .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
            .to(el, { opacity: 1, duration: 0.25 })
            .play();
    },
    onLeave: (el, done) => {
        toggleTransitionComplete(false);
        gsap
            .timeline({ paused: true, onComplete: done })
            .to(el, { opacity: 0, duration: 0.25 })
            .to(el, { autoAlpha: 0, duration: 0.25 })
            .play();
    },
};

export default pageTransition;
