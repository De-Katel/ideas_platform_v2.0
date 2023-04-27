import { wrapper } from '../storage/store';
import { GetServerSideProps, NextPage } from 'next';


const Home: NextPage = () => {


    return (
        <h1>Home</h1>
    )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(store => async appCtx => {


    if (store && !store.getState().data.token) {
        appCtx.res.writeHead(301, {
            'Location': '/'
        });
        appCtx.res.end();
    }

    return { props: {} }
});


export default Home