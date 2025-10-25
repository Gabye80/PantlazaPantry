import { useState } from 'react'
import './MenuItem.css'

function MenuItem({ item, category }) { 
  const [price] = useState(() => {
    const dollars = Math.floor(Math.random() * 15) + 5
    return `${dollars}.99`
  })

  return (
    <div className="card">
      <img src={item.strMealThumb} alt={item.strMeal} />
      <h2>{item.strMeal}</h2>
      <p>{category}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default MenuItem
