import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function port(){
    gsap.registerPlugin(ScrollTrigger);
    const horScreen = gsap.utils.toArray(".port_item");

    gsap.to(horScreen, {
        xPercent: -120 * (horScreen.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: "+=3000",
            pin: true,
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
            aniticipatePin: 1,
        },
    });
}