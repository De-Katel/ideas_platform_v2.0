import Link from 'next/link'
import { useAppSelector, useAppDispatch } from '../../storage/hooks'

import { setIsModal } from '@/storage/slises/dataSlise';

import styles from './header.module.scss'


interface IPageName {
    page: 'feed' | 'ideas' | 'project' | null
}

const Header = ({ page }: IPageName) => {

    const dispatch = useAppDispatch();

    return (
        <header className={styles.header}>
            <div className={styles.spaseDreams}>SPASE DREAMS</div>
            <div className={styles.navWrap}>
                <nav>
                    <ul>
                        <Link style={{ textDecoration: 'none' }} href={'/'}>
                            <li className={page === null ? styles.this_page : page !== 'feed' ? styles.other_page : styles.this_page}>Лента идей</li>
                        </Link>
                        <Link href={'/'} style={{ textDecoration: 'none' }}>
                            <li className={page === null ? styles.this_page : page !== 'ideas' ? styles.other_page : styles.this_page}>Мои идеи</li>
                        </Link>
                        <Link href={'/'} style={{ textDecoration: 'none' }}>
                            <li className={page === null ? styles.this_page : page !== 'project' ? styles.other_page : styles.this_page}>Мои проекты</li>
                        </Link>
                    </ul>
                    <Link href={'/signup'}>
                        <button>
                            Войти
                        </button>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header