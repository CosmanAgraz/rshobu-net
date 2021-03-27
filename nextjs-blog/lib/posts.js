export async function getSortedPostsData()
{
    const res = await fetch("http://localhost:8000/get-posts");
    return res.json(); 
}

export async function getPostData( id )
{
    const url = `http://localhost:8000/get-post-data/${id}`;

    const res = await fetch( url );

    return res.json();
}

export async function getAllPostsIds()
{
    const res = await fetch("http://localhost:8000/get-all-posts-ids");
    return res.json();
}