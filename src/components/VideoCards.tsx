"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface VideoCardProps {
  title: string
  description: string
  videoUrl: string
  onPlay: () => void
}

function VideoCard({ title, description, videoUrl, onPlay }: VideoCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Split description into lines and show only first 3 lines when collapsed
  const lines = description.split(". ")
  const previewText = lines.slice(0, 2).join(". ") + (lines.length > 2 ? "." : "")
  const fullText = description

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-lg overflow-hidden shadow-md border border-border/100 dark:border-border-dark/50 hover:shadow-lg transition-all duration-300 max-w-sm">
      {/* Video Thumbnail */}
      <div
        className="relative aspect-video bg-muted/50 dark:bg-muted-dark/50 flex items-center justify-center group cursor-pointer h-32 w-full"
        onClick={onPlay}
      >
        <Button
          size="sm"
          className="relative z-10 bg-primary/20 hover:bg-primary/30 text-primary border-primary/30 backdrop-blur-sm rounded-full p-2 group-hover:scale-110 transition-transform duration-200"
          onClick={onPlay}
        >
          <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-foreground dark:text-foreground-dark mb-2 leading-tight">{title}</h3>
        <p className="text-muted-foreground dark:text-muted-foreground-dark text-xs leading-relaxed mb-3 line-clamp-3">
          {isExpanded ? fullText : previewText}
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs px-2 py-1 h-7"
          >
            Show More
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={onPlay}
            className="text-xs bg-red-600 hover:bg-red-700 text-white px-2 py-1 h-7"
          >
            <Play className="w-3 h-3 mr-1" fill="currentColor" />
            Watch Video
          </Button>
        </div>
      </div>
    </div>
  )
}

export function VideoCards() {
  const handlePlayVideo = (videoId: string) => {
    // In a real implementation, this would open a video player or modal
    console.log(`Playing video: ${videoId}`)
  }

  const videoData = [
    {
      id: "video1",
      title: "Video 1 Title",
      description: "Video 1 Description. This is a longer description that will be truncated. It has multiple sentences.",
      videoUrl: "/placeholder-video1.mp4",
    },
    {
      id: "video2",
      title: "Video 2 Title",
      description: "Video 2 Description. This is a longer description that will be truncated. It has multiple sentences.",
      videoUrl: "/placeholder-video2.mp4",
    },
    {
      id: "video3",
      title: "Video 3 Title",
      description: "Video 3 Description. This is a longer description that will be truncated. It has multiple sentences.",
      videoUrl: "/placeholder-video3.mp4",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {videoData.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            description={video.description}
            videoUrl={video.videoUrl}
            onPlay={() => handlePlayVideo(video.id)}
          />
        ))}
      </div>
    </div>
  )
}
