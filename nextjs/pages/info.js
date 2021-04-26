import Head from "next/head";
import Link from "next/link";

import { Layout } from "../components";

import styles from "./index.module.scss";


const siteTitle = "Info";

const hyperlinks = [
    { name: "Instagram", url: "https://instagram.com/4graz" },
    { name: "Steam", url: "https://steamcommunity.com/id/SLUG_GUNNER/" },
    { name: "Twitch", url: "https://www.twitch.tv/slug_gunner" },
    { name: "Youtube", url: "https://www.youtube.com/channel/UC-RpWlPEt-XTJeuKey8BGnQ" }
]

const Info = ( {} ) =>
{
    return (
        <>
    
        <Layout siteTitle={siteTitle}>
          <Head>
            <title>{siteTitle}</title>
          </Head>
    
          <section className={ `${styles.headingMd} ${styles.padding1px}` } >
            <h2 className={ styles.headingLg }>About</h2>
            <p>
                Mexican/Canadian residing in Hamitlon, Ontario.  I like playing bass guitar,
                making digital art, playing pc games, and programming.
            </p>
            <h2 className={ styles.headingLg }>What is "R Shobu"?</h2>
            <p>
                I stole the name from a series of arcade games I used to play a bunch when I was a yute.  Sounds nice, 
                 easy to remember.  My other (older) alias is "Slug Gunner" which comes from the 
                 same series of arcade games.  "Serg.io" domain name was taken... I still like "RShobu.NET" better...!  shaddap already! >.>
            </p>


            <h2 className={ styles.headingLg }>Links</h2>
            <p>You wish to stalk further?  Knock yourself out:</p>
            <ul className={ styles.list }>
              {
                hyperlinks.map( ( { name, url } ) => ( 
                  <li className={ styles.listItem } >
                    <Link href={ `${url}` } >
                      <a target="_blank">{name}</a>
                    </Link>
                  </li>
                ) )
              }
            </ul>
          </section>
        </Layout>
        
        </>
    )
}

export default Info;