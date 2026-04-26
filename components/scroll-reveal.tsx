"use client"

import React, { useRef } from "react"
import { motion, useInView, Variant } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  distance?: number
  once?: boolean
  staggerChildren?: number
  threshold?: number
  onViewportEnter?: () => void
  onViewportLeave?: () => void
}

export function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 30,
  once = true,
  staggerChildren = 0,
  threshold = 0.1,
  onViewportEnter,
  onViewportLeave,
}: ScrollRevealProps) {
  const ref = useRef(null)
  
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return {}
    }
  }

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom elegant easing
        staggerChildren: staggerChildren > 0 ? staggerChildren : undefined,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      onViewportEnter={onViewportEnter}
      onViewportLeave={onViewportLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScrollRevealGroup({
  children,
  className = "",
  stagger = 0.1,
  delay = 0,
  once = true,
  threshold = 0.1,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  delay?: number
  once?: boolean
  threshold?: number
}) {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
