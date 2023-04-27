import { GetServerSideProps, NextPage } from 'next';
import { wrapper } from '../storage/store';

import Authentication from "@/components/authentication/authentication"

const AuthenticationPage: NextPage = (): React.ReactElement => {

    return (
        <Authentication />
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


export default AuthenticationPage 