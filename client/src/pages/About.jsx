import React from "react";
import {Text, Link} from "../components";

const About = () =>
{
    return (
        <section>
            <Text type={'h1'}>About</Text>

            <ul >
                <li>
                <Text>
                    My name is Sergio.  I am from Canada, born in Mexico.
                </Text>
                </li>

                <li>
                <Text>
                    I built this website with React, and NodeJS.  I drew and animated the background using <Link to="https://www.babylonjs.com/">BabylonJS</Link>.  Currently hosted on <Link to="https://azure.microsoft.com/en-us/">Azure</Link>, and the source code can be found on my <Link to="https://www.github.com/CosmanAgraz">Github</Link>
                </Text>
                </li>

                <li>
                <Text>
                    Thanks for looking!
                </Text>
                </li>
            </ul>
        </section>

    )
}

About.defaultProps = {};

export default About;