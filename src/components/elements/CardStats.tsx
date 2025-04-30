import React from 'react'

interface CardStatsInterface {
    title: string;
    value: string | number;
    color?: string
}
const CardStats = ({title, value, color = ""}: CardStatsInterface) => {
  return (
    <div className='font-semibold text-3xl m-2 tracking-tighter'>
        <p className={color}>{title}</p>
        <p className={color}>{value}</p>
    </div>
  )
}

export default CardStats