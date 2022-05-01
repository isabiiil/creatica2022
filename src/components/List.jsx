import React from 'react'
import Procedure from './Procedure'

export default function List({ datapoints }) {
  const list = datapoints.forEach((point) => {
    return (
      <Procedure
        title={point.title}
        location={point.location}
        date={point.date}
        total={point.total}
        paid={point.paid}
        insurance={point.insurance}
      />
    )
  }
  )
  return (
    <div>
      {list}
    </div>
  )
}
