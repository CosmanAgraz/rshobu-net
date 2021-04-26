export async function getSortedPostsData()
{
    const res = await fetch("http://localhost:8000/blog/get-posts");
    
    return res.json(); 
}

export async function getPostData( id )
{
    const url = `http://localhost:8000/blog/get-post-data/${id}`;

    const res = await fetch( url );

    return res.json();
}

export async function getAllPostsIds()
{
    const res = await fetch("http://localhost:8000/blog/get-all-posts-ids");
    
    return res.json();
}