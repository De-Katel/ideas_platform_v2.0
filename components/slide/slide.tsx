import Image from 'next/image'

import { useAppDispatch } from '../../storage/hooks'

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

const Slide: React.FC<ISlideProps> = (props): React.ReactElement => {

    return (
        <section className={styles.slideWrapper}>
            {!props.firstSlide && <div className={styles.decor} style={{ width: '837px' }}></div>}
            <div className={styles.slideLeftSide}>

                {props.firstSlide
                    ?
                    <div className={styles.firstSlide}>
                        <div className={styles.line}></div>
                        <h1>Идеи.<br />
                            Инновации.<br />
                            Реализация.</h1>
                        <h2>Смотри идеи по направлениям, которые тебе интересны.<br /> Помоги воплотить их в жизнь!</h2>
                    </div>
                    :
                    <h1 style={{ fontSize: '70px' }}>{props.slideTitleLeft}</h1>
                }

                <h2>{props.description}</h2>

                <button>
                    Подробнее
                </button>
            </div>

            <div className={styles.slideRightSide}>
                {props.firstSlide ? null
                    :
                    <>
                        <h1>{props.slideTitleRight}</h1>
                        <div className={styles.quote}>
                            <div className={styles.quote_decor}></div>``
                            <div>
                                <blockquote>{props.quote}</blockquote>
                                <cite>{props.quoteAuthor}</cite>
                            </div>
                        </div>
                    </>
                }
                <Image className={styles.imageForSlide} priority={true} src={props.imageForSlide} height={613} width={759} alt='sdgsfhdh' />
                <div className={styles.pageNumber}><div className={styles.black_quote_decor}></div></div>

            </div>
        </section>
    )
}

export default Slide