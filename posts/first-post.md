---
title: 'First post'
date: '2020-04-07'
---

You are witnessing here is the 3rd iteration of my personal website!

I learned a few things...

## DevOps (Azure)
Azure is Microsoft's web services platform.  With pay-as-you-go subscriptions, you can host websites for free.  A powerful feature is setting up automatic deployments.  The benefits save a lot of time.  The pipeline is as follows:

1. Local changes
2. Commit/push changes to development branch
3. Merge development branch with master branch
4. Github actions updates and builds the project on the remote Azure server.

The server logic and the client logic are also independant from each other.  So, If I make a change to the server-side logic, it Github Actions wil not build the client-side and vice-versa.

## React/NextJS
The clientside was build using web component based practices using React/NextJS.  NextJS is built on top of React which handles a lot of boilerplate code such as client-side routing.  NextJS still uses JSX to define components.  The components which I wrote for this website could be used on any React project.  I write less, do more! ;)

---

Hope you at least liked the cubes 🥺