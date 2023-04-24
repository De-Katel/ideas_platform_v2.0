import { useRouter } from 'next/router';
import { useEffect } from "react";
import { useAppSelector } from '@/storage/hooks'

import { logOut } from '@/storage/slises/dataSlise';
import { wrapper } from '../storage/store';

import Authentication from "@/components/authentication/authentication"

const AuthenticationPage = (): React.ReactElement => {

    const router = useRouter();
    const token = useAppSelector(state => state.data.token);

    useEffect(() => {
        if (token) {
            router.push('/home')
        }
    })

    return (
        <Authentication />
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => (appCtx): any => {

    console.log(store.getState().data.token)


    // if (!store.getState().data.token) {
    //   appCtx.res.writeHead(302, {
    //     'Location': 'your/404/path.html'
    //     //add other headers here...
    //   });
    //   appCtx.res.end();
    // }
});

export default AuthenticationPage 