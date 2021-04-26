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
                    My irl name is Sergio.  I am from Canada 🍁.  My internet alias pays homage to the <Link to="https://en.wikipedia.org/wiki/Metal_Slug">Metal Slug</Link> game series.
                </Text>
                </li>

                <li>
                <Text>
                    This website (is currently) being built using React.  I also drew and animated the background using <Link to="https://www.babylonjs.com/">BabylonJS</Link>.
                </Text>
                </li>

                <li>
                <Text>
                    For business inquires, send me a telegram thru my <Link to="https://www.linkedin.com/in/sergio-c-20084698/">LinkedIn</Link> .
                </Text>
                </li>
            </ul>
        </section>

    )
}

About.defaultProps = {};

export default About;