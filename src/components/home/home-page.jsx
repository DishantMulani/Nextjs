import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/Home.module.css';

const HomePage = ({ data }) => {
    return (
        <div className={styles.home_body}>
            {data.map(data =>
                <Link key={data.id} href={`/events/${data.id}`} className={styles.image_text} passHref>
                    <div>
                        <Image src={data.image} alt={data.title} width={500} height={350} />
                    </div>
                    <div className={styles.text}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default HomePage