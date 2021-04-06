import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styles from "./Layout.module.scss";

const name = "RShobu.NET";

const Layout = ( {children, home, siteTitle} ) =>
{
    return (
        <div className={styles.root}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Blog"
                />

                <meta
                    name="og:title"
                    content={siteTitle}
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                    <Image
                        className={styles.image}
                        priority
                        src="/images/logo.png"
                        className={styles.borderCircle}
                        height={144}
                        width={144}
                        alt={name}
                    />
                    <h1 className={styles.heading2X1}>{name}</h1>
                    </>

                ) : ( 
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/logo.png"
                                    height={64}
                                    width={64}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={styles.headingMd}>
                            <Link href="/">
                                <a className={styles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
    )
}

export default Layout;