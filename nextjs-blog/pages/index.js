import Head from "next/head";

import { Layout } from "../components";

import styles from "./index.module.scss";

const siteTitle = "RShobu.NET";

// hit up backend for written posts.  These can be saved in a disk, or in a database
export async function getStaticProps() {
  const url = `http://localhost:8000/get-posts`;
  const result = await fetch(url);
  return { props: {
    result: await result.json()
  }}
}

const Home = ( { result } ) =>
{
  return (
    <>
    
    <Layout home siteTitle={siteTitle}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={styles.headingMd}>
        <p>My name is Sergio Cosman Agraz.  I reside in Hamilton ON, Canada.  Thanks for stopping by.</p>
      </section>

      <section className={ `${styles.headingMd} ${styles.padding1px}` } >
        <h2 className={ styles.headingLg }>Blog</h2>
        <ul className={ styles.list }>
          {
            result.map( ( {id, date, title } ) => ( 
              <li className={ styles.listItem }>
                {title}
                <br/>
                {id}
                <br/>
                {date}
                <br/>
              </li>
            ) )
          }
        </ul>
      </section>
    </Layout>
    </>
  )
}

export default Home;