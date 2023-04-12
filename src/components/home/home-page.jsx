import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/Home.module.css';

const HomePage = ({ data }) => {
    return (
        <div className="grid grid-cols ">
            {data.map(data =>
                <div className={styles.image_text}>
                    <Link key={data.id} href={`/events/${data.id}`} className="grid grid-cols-2 gap-10" passHref>
                        <div className={styles.cen}>
                            <Image className={styles.img} src={data.image} alt={data.title} height={100} width={100} />
                        </div>
                        <div className={styles.text}>
                            <h2 className="text-4xl font-bold py-3">{data.title}</h2>
                            <p className="py-2">{data.description}</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default HomePage

