"use client"

import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

interface InterviewActionsProps {
  youtubeUrl: string
  spotifyUrl?: string
}

export function InterviewActions({ youtubeUrl, spotifyUrl }: InterviewActionsProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        className="bg-red-500 hover:bg-red-600 text-white"
        onClick={() => window.open(youtubeUrl, "_blank")}
      >
        <Play className="w-4 h-4 mr-2" />
        Ver en YouTube
      </Button>
      <Button
        variant="outline"
        className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white bg-transparent"
        onClick={() =>
          window.open(
            spotifyUrl || "https://open.spotify.com/show/4wgIOoUl8EeehNx9UhOeC1",
            "_blank",
          )
        }
      >
        <ExternalLink className="w-4 h-4 mr-2" />
        Escuchar en Spotify
      </Button>
    </div>
  )
} 