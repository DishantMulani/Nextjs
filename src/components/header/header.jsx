import React from 'react'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.head}>
                <Image src={'/favicon.ico'} height={30} width={30} alt='Logo' />
                <nav>
                    <ul>
                        <li><Link href='/' passHref>Home</Link></li>
                        <li><Link href='/events' passHref>Events</Link></li>
                        <li><Link href='/about-us' passHref>About Us</Link></li>
                    </ul>
                </nav>
            </div>
            <h2 className={styles.title}>Sed ut perspiciatis unde omnis</h2>
        </header>
    )
}

export default Header