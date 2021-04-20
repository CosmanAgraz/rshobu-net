const fs = require("fs");
const path = require("path");

const matter = require("gray-matter");
const remark = require("remark");
const html = require("remark-html");

const express = require('express');
const router = express.Router();

const { postsDirectory } = require( "../config.js" );

//begin routes

router.get("/get-posts", (req, res) => {
    
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

router.get("/get-all-posts-ids", (req, res) => {
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

router.get("/get-post-data/:id", async (req, res) => {

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

module.exports = router;