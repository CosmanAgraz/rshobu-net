import React from "react";
import {Text} from "../components";

const Home = () =>
{
    return (
        <section>
            <Text type="h1">Home</Text>
            <Text type="h2">
                Site under construction!
            </Text>
            <Text>
                I'm still working on the site map, and content of the website.  I'll probably end up 
                mashing this page and "About" page toghether.  Gallery coming soon!
            </Text>
        </section>
    )
}

Home.defaultProps = {};

export default Home;