import styles from './header.module.scss'

interface IPageName {
    page: 'feed' | 'ideas' | 'project' | null
}

const Header = ({ page }: IPageName) => {
    return (
        <header className={styles.header}>
            <div className={styles.spaseDreams}>SPASE DREAMS</div>
            <div className={styles.navWrap}>
                <nav>
                    <ul>
                        <li className={page === null ? undefined : page !== 'feed' ? styles.other_page : undefined}>Лента идей</li>
                        <li className={page === null ? undefined : page !== 'ideas' ? styles.other_page : undefined}>Мои идеи</li>
                        <li className={page === null ? undefined : page !== 'project' ? styles.other_page : undefined}>Мои проекты</li>
                    </ul>
                    <button>
                        Войти
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header