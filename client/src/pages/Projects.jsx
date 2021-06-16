import React from "react";
import {Text, Link, Image} from "../components";

const Projects = () =>
{
    return (
        <section>
            <Text type="h1">Projects</Text>

            <Text type="h4">
                <Link to="https://github.com/CosmanAgraz/MMBN3-Randomizer">Megaman Battle Network 3 Randomizer (GUI)</Link>
            </Text>
            
            <Image source="https://sharedassets39.blob.core.windows.net/resources/mmbn3.gif">Remember to save often!</Image>

            <Text classname="p">
                Looking for a fun way to play Megaman Battle Network 3?  Try this randomizer!! Contributed to the user interface of this project!
            </Text>
            <Text classname="p">
                Credits: XKirby, Mountebank/Samfin, Dabomstew, Prof.9, Rockman.EXE and TeamBN
            </Text>
            <Text type="h4">
                <Link to="https://discord.com/api/oauth2/authorize?client_id=381961028486823939&permissions=67584&scope=bot">Shyvana-bot</Link>
            </Text>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/sample.PNG">Friendship preservation is not guaranteed</Image>
            <Text classname="p">
                A <Link to="https://discord.com/">Discord</Link> bot I made for generating brave (random) <Link to="https://leagueoflegends.com/">League of Legends</Link> builds directly to your Discord server.
            </Text>

            <Text classname="p">
                Inspired by: <Link to="https://ultimate-bravery.net/">Ultimate Bravery</Link>
            </Text>
            
            
        </section>
    )
}

Projects.defaultProps = {};

export default Projects;