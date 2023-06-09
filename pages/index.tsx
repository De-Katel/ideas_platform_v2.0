import Head from 'next/head'
import { wrapper } from '../storage/store';

import imageForSlideOne from '../images/giorgio.jpg'
import imageForSlideTwo from '../images/lenlen.png'
import imageForSlideTree from '../images/lenlenlen.png'
import imageForSlideFor from '../images/lenlenlenlen.png'



import Header from '../components/header/header'
import Slide from '@/components/slide/slide'
import { GetServerSideProps, NextPage } from 'next';

const Landing: NextPage = () => {

  return (
    <>
      <Head>
        <title>Ideas platform</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
        quote={'“Лучший способ проверить, будет ли ваша идея работать, — это реализовать её”'}
        quoteAuthor={'Саймон Синек'}
        slideTitleLeft={'Мои'}
        slideTitleRight={'идеи'}
        description={'Расскажи о своих идеях. Найди единомышленников. Получи комментарии и отзывы независимых экспертов.'}
      />
      <Header page='project' />
      <Slide firstSlide={false}
        imageForSlide={imageForSlideFor.src}
        quote={'“Когда вам в голову пришла хорошая идея, действуйте незамедлительно”'}
        quoteAuthor={'Билл Гейтс'}
        slideTitleLeft={'Мои'}
        slideTitleRight={'проекты'}
        description={'Реализуй свою идею, найди команду для проекта! Получи поддержку Агентства инноваций Москвы!'}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async appCtx => {


  if (store && store.getState().data.token) {
    appCtx.res.writeHead(301, {
      'Location': '/home'
    });
    appCtx.res.end();
  }

  return { props: {} }
});


export default Landing
