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
                    My irl name is Sergio.  I am from Canada 🍁, born in Mexico.  My internet alias pays homage to the <Link to="https://en.wikipedia.org/wiki/Metal_Slug">Metal Slug</Link> game series.
                </Text>
                </li>

                <li>
                <Text>
                    This website was built using React.  I drew and animated the background using <Link to="https://www.babylonjs.com/">BabylonJS</Link>.  Currently hosted on <Link to="https://azure.microsoft.com/en-us/">Azure</Link>, and the source code can be found on my <Link to="https://www.github.com/CosmanAgraz">Github</Link>
                </Text>
                </li>

                <li>
                <Text>
                    For business inquires: <Link to="https://www.linkedin.com/in/sergio-c-20084698/">LinkedIn</Link> .
                </Text>
                </li>
            </ul>
        </section>

    )
}

About.defaultProps = {};

export default About;