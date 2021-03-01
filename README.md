# Welcome to rshobu.net!

This project is hosted on [Azure](https://azure.microsoft.com/en-ca/features/azure-portal/), uses [Github Actions](https://docs.github.com/en/actions) for auto-deployments, and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Motivation

This project was made to meet 2 requirements:
1.  Get familiar with React development
2.  Setting up CI/CD on Azure using Github Actions

**Q: Why React**

A: When you've written enough HTML/CSS/Javascript, you'll begin to realize that a lot of what you write becomes repetition.  React solves this problem by having a developer (you) create components, which can be used not only multiple times within a project, but across many projects.

**Q: Why Azure**

A: Its free to sign up, they give you a free SSL certificate for your apps, and 1GB Free tier for Node.js web applications.  There are other (personal) reasons such as: GUI is better than AWS, but those previous ones listed are the main reason.  DigitalOcean and Linode offer attractive, shared resource VMs for $5USD/mo ~($8CAD/mo), but I cannot afford this.

**Q: Why Github Actions?**

A: Easy to setup, easy to maintain, and gets you from point A (development) to point B (deployment) quick.  Azure DevOps is nice and all, but there are too many steps to getting shit done.

**Q: What about a database?**

A: Azure offers database hosting, albeit expensive.  Instead, I recommend creating a Sqlite3 databse, shove that into Azure blob stroage container, and have your Express server connect to that.  If you have money to spend, don't spend it on Azure.  I reckon setting up a VM, and creating a Postgre/MySQL/MariaDB database instance in that VM is cheaper (and better) than anything Azure has to offer.  You still neeed to pay for the SSL cert. on DigitalOcean VMs still tho :(

## Setup Tutorial

### Quick guide:
1. Setup Azure
2. Setup Github repo
3. Setup Auto-deployments

### Step 1: Setup Azure

Head over to [Azure Portal](https://azure.microsoft.com/en-ca/features/azure-portal/) create an account.  You'll want to do the following:

1. Create a **"Pay-as-you-Go"** subscription.
2. Create a **Resource Group** under your "Pay-as-you-Go" subscription.
3. Create a **Web App** instance. 

I recommend you use the same NodeJS version you have on your local machine to reduce the chances of running into bullshit.

Also **make sure** you select **1GB Free Developer Tier**. Its not set to default, and you will pay money you didn't have to if you don't pay attention.

### Step 2: Setup Github repo

1. Create new [repo](https://github.com/new)
2. Clone to your machine `git clone <my-repo-url>`
3. Navigate to where the repo was cloned, and use `npx create-react-app client`

By this point your project structure should look like this:
```
root/
  client/
    public/
    src/
    node_modules/ 
    package.json
    package-lock.json
  README.md
  .gitignore
```
root = your project name

Inside your `client/` directory is where your React application will go.  Now, setup the Express server which will serve the React application.

4. Setup your Express server using `npm init`
5. For now, this is all you need in your entry-point (by default, entry-point is called index.js):

```
const express = require("express");
const path = require("path");

const app = new express();

var port = process.env.PORT || 3000;

app.set("PORT", port);

app.use(express.static("./client/build"));

const entryPoint = path.resolve(__dirname, "client", "build", "index.html");

app.get("*", (req, res) => 
{
    res.sendFile(path.resolve( entryPoint ));
 });

app.listen(port, () => console.log("listen on this port: " + port));
```

The important bit is that your Express server needs to serve the build files of your React application. 

6 (optional). Navigate to your `client/` directory, run `npm run build` to build the production ready React application.  In that generated `build/` directory, there will be an `index.html` file.  This is our entry-point.  When a user types `https://<your-project-name-here>.azurewebsites.net`, Express recieves a GET request, and responds by serving this `index.html` file.

7. Add, commit, and push your changes to the repo.

### Step 3: Setup Auto-deployments
1. In the Azure Portal, head over to your Web App resource, and click on **Deployment > Deployment Center** located on the left side-menu.
2. Select Github.  Azure is going to request access to your Github account, and (selected) repo.  Concent to all.
3. Azure will generate a .yml file, then it will add, commit, and push it to your repo in `.github/workflows` directory.

At this point, when you push your local changes to your master branch, Github Actions will update the repo, build, test, and deploy to your Azure Web App.  Still not done, we need to configure the build process.

Take note of that .yml file.  Notice:
```
    - name: npm install, build, and test
      run: |
        npm install
        npm run build --if-present
        npm run test --if-present
```

Its only executing these commands on our root directory, not inside our `client/` directory.  This means our application will fail because Azure has not installed the React dependecies, and the React app is also not being built.

5. We want to: nvigate to ./client subdirectory, install dependecies, and build my React application.
6. So, add this to your `root/package.json` scripts (not to be confused with `root/client/package.json`!)
```"build": "cd ./client && npm install && npm run build"```

That .yml file, and Github Actions, will give the instruction to Azure Web App on how to get our dependecies, and  build our application.
This:
```
        npm install
```
Installs the dependecies in the root directory (the Express server).

This:
```
        npm run build --if-present
```
Is calling the script: `cd ./client && npm install && npm run build` which installs the dependecies in the `client/` directory (the React app), then builds it.

Hopefully my half-assed tutorial taught you something. 😉
