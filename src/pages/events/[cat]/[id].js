import Image from 'next/image';
import React from 'react'

const EventPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Image src={data.image} width={1300} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}

export default EventPage


