import React from 'react'

export default function Procedure({ title, location, date, total, paid, insurance }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
      <p>{date}</p>
      <p>{total}</p>
      <p>{paid}</p>
      <p>{insurance}</p>
    </div>
  )
}
