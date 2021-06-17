import React from "react";
import {motion} from "framer-motion";
import {Text, Image, Link} from "../components";

const Gallery = () =>
{
    return (
        <motion.div 
            initial={{ opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}} 
        >
            <Text type={'h1'}>Gallery</Text>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/GBA-box.png">MD Skoopy's EP on <Link to="https://open.spotify.com/album/5msMeXioOYdrYWGz2uG2ao?si=VJwd5ir5RAmkfzBwEBKqsQ&dl_branch=1">Spotify</Link></Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/aloneInTheDark.png">Future wave <Link to="https://www.youtube.com/watch?v=AQNXV3mW0H0">audio visualizer</Link></Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/c2desktop.png">Environment inspired by Cultris II</Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/arikado1.png">Arcade stick inspired by Castlevania: Aria of Sorrow</Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/secretfinal2.png">Environment inspired by Megaman Battle Network 3</Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/offline.png">Graphic I made for my stream on Twitch</Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/anvil.png">Anvil model made in Blender 2.79</Image>
            <Image source="https://sharedassets39.blob.core.windows.net/resources/helloworld.png">Donut scene made in Blender 2.79</Image>
        </motion.div>
        
    )
}

Gallery.defaultProps = {};

export default Gallery;