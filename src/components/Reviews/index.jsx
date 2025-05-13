import { useState, useEffect } from "react"
import Stars from "../Stars"

export default function Reviews({ product }) {

  const reviews = product.reviews
  const [users, setUsers] = useState([])

  const getRandomUser = async () => {
    const request = await fetch(`https://randomuser.me/api?results=${reviews.length}`)
    const data = await request.json()

    setUsers(data.results)
  }

  useEffect(() => {
    if (reviews) {
      getRandomUser()
    }
  }, [reviews])

  return (
    <div>
      <h2 className='text-2xl font-bold py-12 px-8 md:pl-28'>Reviews</h2>
      <ul className="flex flex-col gap-20 items-center justify-around flex-wrap md:flex-row">
        {reviews && reviews.map((item, index) => (
          <li key={index} className="flex gap-4 items-start pb-4">
            {users[index] && (
              <img src={users[index].picture.thumbnail} className="w-10 h-10 rounded-full" />
            )}
            <div className="flex flex-col gap-4">
              <p className="font-semibold">{item.reviewerName}</p>
              <Stars rating={item.rating} />
              <p className="text-sm text-gray-600">{item.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}