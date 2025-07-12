"use client"

import { useState, useEffect } from "react"
import { Users, Play, Clock, Star } from "lucide-react"
import { getInterviewStats } from "@/lib/interviews-data"

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const increment = target / 50 // 50 steps for smooth animation
    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= target) {
          clearInterval(timer)
          return target
        }
        return Math.min(prev + increment, target)
      })
    }, 30)

    return () => clearInterval(timer)
  }, [target])

  return (
    <span>
      {target === 4.9 ? current.toFixed(1) : Math.floor(current)}
      {suffix}
    </span>
  )
}

export function StatsMiniSection() {
  const stats = getInterviewStats()

  const displayStats = [
    {
      icon: Users,
      number: stats.totalInterviews,
      suffix: "",
      label: "Entrevistas",
    },
    {
      icon: Play,
      number: 100,
      suffix: "K+",
      label: "Reproducciones",
    },
    {
      icon: Clock,
      number: stats.totalHours,
      suffix: "+",
      label: "Horas",
    },
    {
      icon: Star,
      number: stats.avgRating,
      suffix: "",
      label: "Calificación",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-voca-light-gray dark:bg-voca-blue border-b border-voca-blue/10 dark:border-voca-cream/10">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {displayStats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-white dark:bg-white/10 rounded-full flex items-center justify-center shadow-sm">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-voca-blue dark:text-voca-cream" />
              </div>
              <div className="space-y-1">
                <div className="text-xl md:text-2xl font-montserrat font-bold text-voca-blue dark:text-voca-cream">
                  <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-voca-blue/70 dark:text-voca-cream/70 text-xs md:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
