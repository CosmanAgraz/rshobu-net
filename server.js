const express = require("express");
const path = require("path");
const fs = require("fs");

// Installed dependencies
const matter = require("gray-matter");
const remark = require("remark");
const html = require("remark-html");

const app = new express();

app.use(express.urlencoded({ extended: true }))

var port = process.env.PORT || 8000;

app.set("PORT", port);

app.use(express.static("../client/build"));

const entryPoint = path.resolve(__dirname, "client", "build", "index.html");

const postsDirectory = path.resolve( process.cwd(), 'posts');

app.get("/", (req, res) => 
{
    console.log("serving " + entryPoint)
    res.sendFile(path.resolve( entryPoint ));
});

// TODO - move to routes dir
app.get("/get-posts", (req, res) => {
    
    //Get file names under /posts
    const fileNames = fs.readdirSync( postsDirectory );
    const allPostsData = fileNames.map( file => {

        // / Remove ".md" from file name to get id
        const id = file.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterData = matter(fileContents);

        // Combine the data with the id
        return { id, ...matterData.data }
    });

    let sortedPostData = allPostsData.sort( (a, b) => { if (a.data < b.data) { return 1 } else { return -1 } } );
    res.json( sortedPostData );

});

app.get("/get-all-posts-ids", (req, res) => {
    const fileNames = fs.readdirSync(postsDirectory)

    const postsIds = fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    });

    res.json( postsIds );
});

app.get("/get-post-data/:id", async (req, res) => {

    const id = req.params.id;

    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const content = processedContent.toString();
  
    // Combine the data with the id
    const postData = {
      id,
      content,
      ...matterResult.data,
    }

    console.log(postData);

    return res.json( postData );
});

app.listen(port, () => console.log("listen on this port: " + port));