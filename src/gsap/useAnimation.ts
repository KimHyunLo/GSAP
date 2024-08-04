import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useAnimation() {
  useGSAP(() => {
    // visual 섹션 글자 아래 이동
    visualSection();

    // mainText 제목 순차 공개
    mainTextSlide();

    // subText 문단 순차 공개
    subTextSlide();

    // con1 섹션 제목 연달아 공개
    animationText();

    // con4 섹션 리스트 페이드 아웃
    listBoxSlide();

    // con3 섹션 카드 페이드 인
    cardListSlide();

    // con5 섹션 리스트 마우스 오버
    listBoxHover();

    // con5 가로 스크롤 방지
    wrapOverflow();

    // footer 섹션 글자 아래 이동
    footerSection();

    // loading 애니메이션
    loadingAnimation();
  });
}

function visualSection() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "#visual",
        start: "100% 100%",
        end: "100% 0%",
        scrub: 1,
      },
    })
    .to(
      "#j",
      {
        x: -150,
        y: 250,
        rotate: 20,
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      "#y",
      {
        x: -30,
        y: 150,
        rotate: -10,
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      "#o",
      {
        x: 0,
        y: 400,
        rotate: -10,
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      "#u",
      {
        x: 50,
        y: 300,
        rotate: 10,
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      "#n",
      {
        x: 100,
        y: 100,
        rotate: -10,
        ease: "none",
        duration: 5,
      },
      0
    )
    .to(
      "#g",
      {
        x: 50,
        y: 450,
        rotate: 20,
        ease: "none",
        duration: 5,
      },
      0
    );
}

function mainTextSlide() {
  return gsap.utils.toArray(".title i").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector as HTMLElement,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(
        selector as HTMLElement,
        {
          overflow: "hidden",
          y: 150,
        },
        {
          y: 0,
          ease: "none",
          duration: 5,
        },
        0
      );
  });
}

function subTextSlide() {
  return gsap.utils.toArray(".subText p").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector as HTMLElement,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(
        selector as HTMLElement,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          ease: "none",
          duration: 5,
        },
        0
      );
  });
}

function animationText() {
  const timeline = gsap.timeline({ repeat: -1 });

  gsap.utils.toArray(".textAni li").forEach((selector) => {
    timeline.to(selector as HTMLElement, {
      duration: 0.8,
      opacity: 1,
      repeat: 1,
      delay: 0,
      x: 0,
      yoyo: true,
      ease: "power4.out",
    });
  });

  return timeline.play();
}

function listBoxSlide() {
  return gsap.utils.toArray("#con4 .listBox .box").forEach((selector) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector as HTMLElement,
          start: "0% 20%",
          end: "0% 0%",
          scrub: 1,
        },
      })
      .to(
        selector as HTMLElement,
        {
          transform: "rotateX(-10deg) scale(0.9)",
          transformOrigin: "top",
          filter: "brightness(0.3)",
        },
        0
      );
  });
}

function cardListSlide() {
  return gsap.utils.toArray("#con3 .listBox li").forEach((selector, index) => {
    ScrollTrigger.create({
      trigger: selector as HTMLElement,
      start: "30% 50%",
      onEnter: () => {
        gsap.set(selector as HTMLElement, {
          rotationX: "-65deg",
          z: "-500px",
          opacity: 0,
        });

        gsap.to(selector as HTMLElement, {
          rotationX: 0,
          z: 0,
          opacity: 1,
          delay: (index % 3) * 0.05,
        });
      },
    });
  });
}

function listBoxHover() {
  const imgBox = gsap.utils.toArray("#con5 .imgBox")[0] as HTMLElement;
  const img = gsap.utils.toArray("#con5 .imgBox img")[0] as HTMLImageElement;

  return gsap.utils.toArray("#con5 .listBox li").forEach((selector, index) => {
    (selector as HTMLElement).addEventListener("mouseover", () => {
      img.src = `/assets/img${index}.jpg`;
      img.alt = `img${index}`;

      gsap.set(imgBox, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.3 });
    });

    (selector as HTMLElement).addEventListener("mousemove", (e) => {
      const imgBoxX = e.pageX + 20;
      const imgBoxY = e.pageY - 20;

      imgBox.style.left = `${imgBoxX}px`;
      imgBox.style.top = `${imgBoxY}px`;
    });

    (selector as HTMLElement).addEventListener("mouseout", () => {
      gsap.to(imgBox, { scale: 0, opacity: 0, duration: 0.3 });
    });
  });
}

function wrapOverflow() {
  return gsap.timeline({
    scrollTrigger: {
      trigger: "#con5",
      start: "0% 100%",
      end: "100% 0%",
      toggleClass: {
        targets: "#wrap",
        className: "on",
      },
    },
  });
}

function footerSection() {
  return gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "0% 100%",
        end: "100% 0%",
        scrub: 1,
      },
    })
    .to(
      ".logoWrap",
      {
        top: "20%",
        ease: "none",
        duration: 0.5,
      },
      0
    );
}

function loadingAnimation() {
  const loading = gsap.utils.toArray(".loading")[0] as HTMLElement;
  const rotate = gsap.utils.toArray(".rotate") as HTMLElement[];
  const opacity = gsap.utils.toArray(".opacity") as HTMLElement[];

  setTimeout(() => {
    loading.classList.add("scene1");
  }, 0);

  setTimeout(() => {
    loading.classList.add("scene2");
  }, 1500);

  setTimeout(() => {
    loading.classList.remove("scene1", "scene2");
  }, 2500);

  setTimeout(() => {
    rotate.forEach((selector) => {
      selector.classList.add("on");
    });
  }, 2500);

  setTimeout(() => {
    opacity.forEach((selector) => {
      selector.classList.add("on");
    });
  }, 2500);
}
