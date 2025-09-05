"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function SignatureAnimation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Start after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 3, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  }

  return (
    <div className="absolute bottom-16 right-8 z-20">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <svg
            width="200"
            height="80"
            viewBox="0 0 200 80"
            className="text-primary/70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Kelvin signature path */}
            <motion.path
              d="M10 50 Q15 30 25 40 Q35 50 45 35 Q55 20 65 40 Q75 60 85 45 Q95 30 105 50 Q115 70 125 55 Q135 40 145 60 Q155 80 165 65 Q175 50 185 70"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Mutukwa signature path */}
            <motion.path
              d="M15 65 Q25 55 35 65 Q45 75 55 60 Q65 45 75 65 Q85 85 95 70 Q105 55 115 75 Q125 95 135 80 Q145 65 155 85 Q165 105 175 90"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
            />
          </svg>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="absolute -bottom-6 left-0 text-xs text-primary/60 font-handwriting"
          >
            Kelvin Mutukwa
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
