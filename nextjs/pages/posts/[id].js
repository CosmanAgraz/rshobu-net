import Head from "next/head";

import { Layout, Date} from "../../components";
import { getPostData } from "../../lib/posts";

import styles from "./posts.module.scss";

export async function getServerSideProps( { params } )
{
    // return metadata
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}


export default function Post( {postData} )
{
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <article>
                <h1 className={styles.headingXl} >{postData.title}</h1>
                <div className={styles.lightText}> 
                    <Date dateString={postData.date}/>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} >
                </div>
            </article>
            
            

            
               
            
        </Layout>
        );
}
