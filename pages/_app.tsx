import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import {AppBar} from '../components/app.bar';
import BottomBar from "../components/bottom.bar";
import Head from "next/head";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <RecoilRoot>
            <Head>
                <title>Kru</title>
            </Head>
            <AppBar title={"Kru"}/>
            <Component {...pageProps} />
            <BottomBar/>
        </RecoilRoot>
    </>
}
