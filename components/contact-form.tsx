"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="border-0 shadow-lg bg-white dark:bg-voca-medium-blue">
      <CardHeader>
        <CardTitle className="text-voca-blue dark:text-voca-cream">Envíanos un mensaje</CardTitle>
        <CardDescription className="text-voca-blue/70 dark:text-voca-cream/70">
          Completa el formulario y te responderemos lo antes posible
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action="https://formsubmit.co/maximosarmiento2004@gmail.com" method="POST" className="space-y-6">
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="Nuevo mensaje desde Voca Podcast" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://vocapodcast.com/contacto?success=true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-voca-blue dark:text-voca-cream">
                Nombre completo *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-voca-blue/20 dark:border-voca-cream/20"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-voca-blue dark:text-voca-cream">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-voca-blue/20 dark:border-voca-cream/20"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-voca-blue dark:text-voca-cream">
              Asunto *
            </label>
            <Input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border-voca-blue/20 dark:border-voca-cream/20"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-voca-blue dark:text-voca-cream">
              Mensaje *
            </label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Cuéntanos en qué podemos ayudarte..."
              required
              className="border-voca-blue/20 dark:border-voca-cream/20"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-voca-blue hover:bg-transparent hover:border-voca-blue hover:text-voca-blue text-voca-cream border border-voca-blue dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-800"
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
