import React from 'react'
import styles from '../../styles/event.module.css'
import Image from 'next/image'
import Link from 'next/link'

const EventPage = ({ data }) => {
  return (
    <>
      <h1>Event Page</h1>
      <div className={styles.head}>
        {data.map(data => (
          <Link key={data.id} href={`/events/${data.id}`} passHref>
            <Image src={data.image} alt={data.title} height={200} width={200} />
            <h2>{data.title}</h2>
          </Link>
        ))}
      </div>
    </>
  )
}

export default EventPage;

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);
  return {
    props: {
      data: events_categories
    }
  }
}

