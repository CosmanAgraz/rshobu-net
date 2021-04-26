import { AnimatePresence } from "framer-motion";

import { BabylonBackground } from "../components";

import styles from "../styles/global.scss";

const App = ( { Component, pageProps, router}) =>
{
    return (
        <>
            <BabylonBackground/>
            <AnimatePresence exitBeforeEnter>
                
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </>
    
    );
}

export default App;