import React from "react";
import {motion} from "framer-motion";
import {Text, Image} from "../components";

const Home = () =>
{
    return (
        <motion.div 
            initial={{ opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
        >
            
            <Image width="200" height="200" source="https://sharedassets39.blob.core.windows.net/img/round-logo.png">

            </Image>
            <Text align="center" type="bodyLg">
                Yo.
            </Text>
        </motion.div>
    )
}

Home.defaultProps = {};

export default Home;