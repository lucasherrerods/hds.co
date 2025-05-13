import { Star, StarHalf, StarOff } from "lucide-react"

export default function Stars({ rating }) {

  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} size={12} className="text-yellow-500" />)
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" size={12} className="text-yellow-500" />)
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarOff key={`empty-${i}`} size={12} className="text-gray-300" />)
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
    </div>
  )
}