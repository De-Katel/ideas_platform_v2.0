import Image from 'next/image'
import Link from 'next/link'

import { setIsModal } from '@/storage/slises/dataSlise'

import { useAppSelector, useAppDispatch } from '../../storage/hooks'

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

    const dispatch = useAppDispatch();

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

                <button
                    onClick={() => dispatch(setIsModal())}>
                    Подробнее
                </button>
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
                <Image className={styles.imageForSlide} priority={true} src={imageForSlide} height={613} width={759} alt='sdgsfhdh' />

                <div className={styles.pageNumber}><div className={styles.black_quote_decor}></div></div>

            </div>
        </section>
    )
}

export default Slide