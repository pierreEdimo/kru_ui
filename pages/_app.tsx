import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {RecoilRoot} from "recoil";
import {AppBar} from '../components/app.bar';
import BottomBar from "../components/bottom.bar";

export default function App({Component, pageProps}: AppProps) {
    return <>
        <RecoilRoot>
            <AppBar title={"Kru"}/>
            <Component {...pageProps} />
            <BottomBar/>
        </RecoilRoot>
    </>
}
