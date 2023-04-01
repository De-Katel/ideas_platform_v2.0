import Head from 'next/head'

import imageForSlideOne from '../images/giorgio.jpg'
import imageForSlideTwo from '../images/lenlen.png'
import imageForSlideTree from '../images/lenlenlen.png'
import imageForSlideFor from '../images/lenlenlenlen.png'


import Header from '../components/header/header'
import Slide from '@/components/slide/slide'


export default function Home() {
  return (
    <>
      <Head>
        <title>Ideas platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header page={null} />
      <Slide firstSlide={true}
        imageForSlide={imageForSlideOne.src} />
      <Header page='feed' />
      <Slide firstSlide={false}
        imageForSlide={imageForSlideTwo.src}
        quote={'“Сами по себе идеи ценны, но всякая идея в конце концов только идея. Задача в том, чтобы реализовать ее практически”'}
        quoteAuthor={'Генри Форд'}
        slideTitleLeft={'Лента'}
        slideTitleRight={'идей'}
        description={'Смотри идеи по направлениям, которые тебе интересны, изучай новые направления! Собери команду, помоги воплотить их в жизнь!'}
      />
      <Header page='ideas' />
      <Slide firstSlide={false}
        imageForSlide={imageForSlideTree.src}
        quote={'“Сами по себе идеи ценны, но всякая идея в конце концов только идея. Задача в том, чтобы реализовать ее практически”'}
        quoteAuthor={'Генри Форд'}
        slideTitleLeft={'Мои'}
        slideTitleRight={'идеи'}
        description={'Расскажи о своих идеях. Найди единомышленников. Получи комментарии и отзывы независимых экспертов.'}
      />
      <Header page='project' />
      <Slide firstSlide={false}
        imageForSlide={imageForSlideFor.src}
        quote={'“Сами по себе идеи ценны, но всякая идея в конце концов только идея. Задача в том, чтобы реализовать ее практически”'}
        quoteAuthor={'Генри Форд'}
        slideTitleLeft={'Мои'}
        slideTitleRight={'проекты'}
        description={'Реализуй свою идею, найди команду для проекта! Получи поддержку Агентства инноваций Москвы!'}
      />
    </>
  )
}