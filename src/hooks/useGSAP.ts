import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Enhanced animation configuration
const ANIMATION_CONFIG = {
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.07,
  scrollTrigger: {
    start: "top 85%",
    end: "bottom 15%",
    toggleActions: "play none none none",
    markers: false,
    once: true
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
      willChange: 'opacity, transform',
      force3D: true
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
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true
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
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true
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
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true
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
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true
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
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        ...config.scrollTrigger
      }
    });

    tl.to(element, {
      opacity: 1,
      willChange: 'opacity, transform',
      force3D: true,
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
      willChange: 'opacity, transform',
      force3D: true
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
      willChange: 'opacity, transform',
      force3D: true,
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
    
    // Set initial state for all children
    gsap.set(children, {
      opacity: 0,
      x: 60,
      scale: 0.9,
      willChange: 'opacity, transform',
      force3D: true
    });

    // Create staggered animation from right
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
      willChange: 'opacity, transform',
      force3D: true,
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

// New enhanced animation hooks
export const useSmoothScroll = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      yPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, []);

  return ref;
};

export const useTiltEffect = (intensity = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) * intensity;
      const rotateY = (centerX - x) * intensity;
      
      gsap.to(element, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.5,
        ease: "power2.out",
        transformPerspective: 1000
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)"
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity]);

  return ref;
};

export const usePulseEffect = (interval = 2000) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const tl = gsap.timeline({ repeat: -1 });
    
    tl.to(element, {
      scale: 1.05,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(element, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [interval]);

  return ref;
};

export const useFloatingAnimation = (amplitude = 10, duration = 3) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      y: `+=${amplitude}`,
      duration: duration,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    return () => {
      gsap.killTweensOf(element);
    };
  }, [amplitude, duration]);

  return ref;
};

export const useTypewriterEffect = (text: string, speed = 50) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.textContent = '';
    let index = 0;

    const typeNextChar = () => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
        setTimeout(typeNextChar, speed);
      }
    };

    typeNextChar();
  }, [text, speed]);

  return ref;
};

export const useGradientAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "none"
    });
  }, []);

  return ref;
};

export const useScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    gsap.to(element, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(element, { scaleX: self.progress });
        }
      }
    });

    return () => {
      cleanupScrollTrigger(element);
    };
  }, []);

  return ref;
};

export const useIntersectionObserver = (callback: (isIntersecting: boolean) => void, options = {}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting);
      });
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [callback, options]);

  return ref;
};

export const useMouseFollower = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(element, {
        x: e.clientX - element.offsetWidth / 2,
        y: e.clientY - element.offsetHeight / 2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return ref;
};
