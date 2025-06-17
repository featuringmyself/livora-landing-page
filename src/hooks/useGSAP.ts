import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Enhanced animation configuration
const ANIMATION_CONFIG = {
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.1,
  scrollTrigger: {
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none none", // Changed to prevent jarring reverse animations
    markers: false
  }
};

// Utility function to clean up ScrollTrigger instances
const cleanupScrollTrigger = (element: Element) => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === element) {
      trigger.kill();
    }
  });
};

export const useGSAP = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    return () => {
      cleanupScrollTrigger(element);
    };
  }, []);

  return ref;
};

export const useFadeInUp = (delay = 0, customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 60,
      scale: 0.95,
      filter: 'blur(5px)'
    });

    // Create the animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      delay,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [delay, customConfig]);

  return ref;
};

export const useStaggerAnimation = (customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    const children = Array.from(element.children);
    
    // Set initial state for all children
    gsap.set(children, {
      opacity: 0,
      y: 40,
      scale: 0.9,
      filter: 'blur(3px)'
    });

    // Create staggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(children, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [customConfig]);

  return ref;
};

export const useParallaxEffect = (speed = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -30 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [speed]);

  return ref;
};

export const useMagneticEffect = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(element, {
        x: x * 0.08,
        y: y * 0.08,
        duration: 0.8,
        ease: "power3.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

export const useTextReveal = (customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    const text = element.textContent;
    if (!text) return;
    
    element.innerHTML = '';
    
    const chars = text.split('');
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(30px) scale(0.8)';
      span.style.filter = 'blur(2px)';
      element.appendChild(span);
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element.children, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      stagger: 0.03,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [customConfig]);

  return ref;
};

export const useHoverGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        boxShadow: "0 20px 60px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.2)",
        scale: 1.02,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        scale: 1,
        duration: 0.6,
        ease: "power2.out"
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};

export const useCounterAnimation = (endValue: number, duration = 2) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const counter = { value: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    tl.to(counter, {
      value: endValue,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        if (element) {
          element.textContent = Math.floor(counter.value).toString();
        }
      }
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [endValue, duration]);

  return ref;
};

// New enhanced hooks for better animations

export const useSlideInLeft = (delay = 0, customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    gsap.set(element, {
      opacity: 0,
      x: -80,
      scale: 0.95,
      filter: 'blur(3px)'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element, {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      delay,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [delay, customConfig]);

  return ref;
};

export const useSlideInRight = (delay = 0, customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    gsap.set(element, {
      opacity: 0,
      x: 80,
      scale: 0.95,
      filter: 'blur(3px)'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element, {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      delay,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [delay, customConfig]);

  return ref;
};

export const useScaleIn = (delay = 0, customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    gsap.set(element, {
      opacity: 0,
      scale: 0.7,
      filter: 'blur(5px)'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      delay,
      ease: "back.out(1.7)"
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [delay, customConfig]);

  return ref;
};

export const useFadeIn = (delay = 0, customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    gsap.set(element, {
      opacity: 0,
      filter: 'blur(3px)'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element, {
      opacity: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      delay,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [delay, customConfig]);

  return ref;
};

// Enhanced stagger with different directions
export const useStaggerFromLeft = (customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    const children = Array.from(element.children);
    
    gsap.set(children, {
      opacity: 0,
      x: -60,
      scale: 0.9,
      filter: 'blur(3px)'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(children, {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [customConfig]);

  return ref;
};

export const useStaggerFromRight = (customConfig = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const config = {
      ...ANIMATION_CONFIG,
      ...customConfig
    };

    const children = Array.from(element.children);
    
    gsap.set(children, {
      opacity: 0,
      x: 60,
      scale: 0.9,
      filter: 'blur(3px)'
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(children, {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, [customConfig]);

  return ref;
};
