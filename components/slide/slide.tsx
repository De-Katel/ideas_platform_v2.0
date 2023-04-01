import Image from 'next/image'

import styles from './slide.module.scss'
import Link from 'next/link'

interface ISlideProps {
    imageForSlide: string
    firstSlide: boolean
    slideTitleLeft?: string
    slideTitleRight?: string
    description?: string
    quote?: string
    quoteAuthor?: string
}

const Slide: React.FC<ISlideProps> = ({
    imageForSlide,
    firstSlide,
    slideTitleLeft,
    slideTitleRight,
    description,
    quote,
    quoteAuthor
}) => {
    return (
        <section className={styles.slideWrapper}>
            {!firstSlide && <div className={styles.decor} style={{ width: '837px' }}></div>}
            <div className={styles.slideLeftSide}>

                {firstSlide
                    ?
                    <div className={styles.firstSlide}>
                        <div className={styles.line}></div>
                        <h1>Идеи.<br />
                            Инновации.<br />
                            Реализация.</h1>
                        <h2>Смотри идеи по направлениям, которые тебе интересны.<br /> Помоги воплотить их в жизнь!</h2>
                    </div>
                    :
                    <h1 style={{ fontSize: '70px' }}>{slideTitleLeft}</h1>
                }

                <h2>{description}</h2>
                <Link href={'/'}><button>Подробнее</button></Link>
            </div>

            <div className={styles.slideRightSide}>
                {firstSlide ? null
                    :
                    <>
                        <h1>{slideTitleRight}</h1>
                        <div className={styles.quote}>
                            <div className={styles.quote_decor}></div>
                            <div>
                                <blockquote>{quote}</blockquote>
                                <cite>{quoteAuthor}</cite>
                            </div>
                        </div>
                    </>
                }
                <Image className={styles.imageForSlide} src={imageForSlide} height={613} width={759} alt='sdgsfhdh' />

                <div className={styles.pageNumber}><div className={styles.black_quote_decor}></div></div>

            </div>
        </section>
    )
}

export default Slide