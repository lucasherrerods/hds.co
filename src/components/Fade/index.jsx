import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Fade({ children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false })

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}