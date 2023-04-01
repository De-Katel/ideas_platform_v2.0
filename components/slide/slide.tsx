import Image from 'next/image'

import styles from './slide.module.scss'

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
            <div className={styles.slideLeftSide}>
                {firstSlide ? <div className={styles.firstSlide}>
                    <div className={styles.line}></div>
                    <h1>Идеи.<br />
                        Инновации.<br />
                        Реализация.</h1>
                    <h2>Смотри идеи по направлениям, которые тебе интересны.<br /> Помоги воплотить их в жизнь!</h2>
                </div> : <>
                    <h1 style={{ fontSize: '70px' }}>{slideTitleLeft}</h1>
                </>}
                <h2>{description}</h2>
                <button>Подробнее</button>
            </div>

            <div className={styles.slideRightSide}>
                {!firstSlide && <h1>{slideTitleRight}</h1>}
                <Image className={styles.imageForSlide} src={imageForSlide} height={613} width={759} alt='sdgsfhdh' />
                <div className={styles.quote}>
                    <blockquote>{quote}</blockquote>
                    <cite>{quoteAuthor}</cite>
                </div>
                <div className={styles.pageNumber}></div>
            </div>
        </section>
    )
}

export default Slide