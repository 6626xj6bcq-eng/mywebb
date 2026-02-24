import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  scale?: boolean;
  duration?: number;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  width = "100%", // 默认占满宽度
  className = "",
  delay = 0.1,
  direction = "up",
  scale = false, // 是否开启缩放效果
  duration = 0.6,
  threshold = 0.1, // 触发阈值
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: threshold, margin: "0px 0px -100px 0px" }); 
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      // 如果想要每次滚动都触发，可以取消注释下面这行
      // controls.start("hidden");
    }
  }, [isInView, controls]);

  const getInitialState = () => {
    const state: any = { opacity: 0 };
    if (direction === "up") state.y = 50;
    if (direction === "down") state.y = -50;
    if (direction === "left") state.x = 50;
    if (direction === "right") state.x = -50;
    if (scale) state.scale = 0.9;
    return state;
  };

  const variants = {
    hidden: getInitialState(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: { 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] // 自定义 cubic-bezier 曲线，更有质感
      }
    },
  };

  return (
    <div ref={ref} style={{ width }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        style={{ width: "100%" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
