import Link from 'next/link'

import { useAppSelector } from '@/storage/hooks'

import styles from './header.module.scss'

interface IHeaderProps {
    page?: 'feed' | 'ideas' | 'project' | 'all'
    children?: JSX.Element
}

const Header: React.FC<IHeaderProps> = ({ page, children }): React.ReactElement => {


    const token = useAppSelector(state => state.data.token);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.spaseDreams}>SPASE DREAMS</div>
                <div className={token ? styles.navWrapBlack : styles.navWrap}>
                    <nav>
                        <ul>
                            <Link style={{ textDecoration: 'none' }} href={'/'}>
                                <li className={page === 'all' ? styles.this_page : page !== 'feed' ? styles.other_page : styles.this_page}>Лента идей</li>
                            </Link>
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <li className={page === 'all' ? styles.this_page : page !== 'ideas' ? styles.other_page : styles.this_page}>Мои идеи</li>
                            </Link>
                            <Link href={'/'} style={{ textDecoration: 'none' }}>
                                <li className={page === 'all' ? styles.this_page : page !== 'project' ? styles.other_page : styles.this_page}>Мои проекты</li>
                            </Link>
                        </ul>
                        <Link href={'/signup'}>
                            <button>
                                {!token ? 'Войти' : 'Выйти'}
                            </button>
                        </Link>
                    </nav>
                </div>
            </header>
            {children}
        </>
    )
}

export default Header