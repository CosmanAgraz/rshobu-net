import styles from "../styles/global.scss";
import { BabylonBackground } from "../components";

const App = ( { Component, pageProps }) =>
{
    return (
    <>
        <BabylonBackground/>
        <Component {...pageProps}/>
    </>
    
    );
}

export default App;