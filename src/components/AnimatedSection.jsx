import { motion } from "framer-motion";

const MotionDiv = motion.div;

function AnimatedSection({
  children,
  delay = 0,
  duration = 0.6,
  distance = 30,
  className = "",
}) {
  return (
    <MotionDiv
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionDiv>
  );
}

export default AnimatedSection;
