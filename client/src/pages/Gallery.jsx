import React from "react";
import {Text, Link} from "../components";

const Gallery = () =>
{
    return (
        <section>
            <Text type={'h1'}>Gallery</Text>
            <Text>Coming soon!  For now, here is my <Link to="https://instagram.com/4graz">Instagram</Link> page</Text>
        </section>
        
    )
}

Gallery.defaultProps = {};

export default Gallery;