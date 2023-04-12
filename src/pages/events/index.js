import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/event.module.css'

const EventPage = ({ data }) => {
  return (
    <>
      <div className={styles.head}>
        {data.map(data => (
          <Link key={data.id} href={`/events/${data.id}`} className={styles.link} passHref>
            <Image src={data.image} alt={data.title} height={300} width={300} />
            <h2 className={styles.h2}>{data.title}</h2>
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

