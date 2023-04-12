import React from 'react'
import styles from '../../../styles/cat.module.css'
import Image from 'next/image'
import Link from 'next/link'

const EventsPerCatPage = ({ data, pageName }) => {
    return (
        <>
            <h1 className={styles.head}>Event in {pageName}</h1>
            <div className={styles.event}>
                {
                    data.map(data => (
                        <Link key={data.id} href={`/events/${data.city}/${data.id}`} passHref>
                            <div className={styles.event2}>
                                <Image src={data.image} alt={data.title} height={300} width={300} className={styles.img} />
                                <h2 className={styles.h2}>${data.title}</h2>
                                <p className={styles.p}>{data.description}</p>
                            </div>
                        </Link>
                    ))
                }
            </div >
        </>
    )
}

export default EventsPerCatPage


export async function getStaticPaths() {
    const { events_categories } = await import("/data/data.json");
    const allPaths = events_categories.map((data) => {
        return {
            params: {
                cat: data.id.toString(),
            },
        }
    })
    console.log(allPaths);
    return {
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const id = context?.params.cat;
    const { allEvents } = await import("/data/data.json");
    // console.log(allEvents);
    const data = allEvents.filter(data => data.city == id)
    console.log(data);
    return {
        props: { data, pageName: id }
    };
}