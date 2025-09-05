"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center space-y-6">
            {/* Mercedes-Benz Wheel Animation */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-20 h-20 border-4 border-primary/20 rounded-full"
              >
                <div className="absolute inset-2 border-2 border-primary rounded-full">
                  <div className="absolute inset-2 bg-primary/10 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-8 h-8 flex items-center justify-center"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full relative">
                        <div className="absolute inset-1 bg-background rounded-full">
                          <div className="absolute inset-1 bg-primary rounded-full"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                {/* Spokes */}
                {[0, 60, 120, 180, 240, 300].map((rotation) => (
                  <div
                    key={rotation}
                    className="absolute top-1/2 left-1/2 w-0.5 h-8 bg-primary/40 origin-bottom"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold text-foreground mb-2">Kelvin Mutukwa</h2>
              <p className="text-sm text-muted-foreground">Driven by Creativity, Inspired by Machines</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
