import React from "react";
import {Text, Image} from "../components";

const Home = () =>
{
    return (
        <section>
            
            <Image width="200" height="200" source="https://sharedassets39.blob.core.windows.net/img/round-logo.png">

            </Image>
            <Text align="center" type="bodyLg">
                Welcome to my domain
            </Text>
        </section>
    )
}

Home.defaultProps = {};

export default Home;