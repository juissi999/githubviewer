# githubviewer

### Usage

#### Installation & deployment

Run the following commands to download the software:

    git clone https://github.com/juissi999/githubviewer
    cd githubviewer
    npm install

Start the website on webpack-dev-server with command:

    npm run start

For production version, build the site with command:

    npm run build

The website can be deployed (npm install, build and start server) by running a command:

    npm run deploy

#### Use

Start a browser and go to servers URL. Write users github account name to text-input field and click "Find user" or press enter. The app will sort the user's case sensitive github-login and list all repositories of the user below. Click repository title to see latest commits (10 at most) and author information. Click the author-div (image, date or name) to zoom in/out authors image. Click "back" to go back to user's repository listing.

### Development

#### History

* Version 1: React SPA made entirely with hooks, decided to build a new version as back & forward buttons on browser were not working.
* Version 2: React SPA with React Router, back & forward keys now work.

#### App structure

App is a Single Page Application made with React.js. React components are divided onto folders based on their name. For example UserHeader component is located in User/Header.js and User in User/index.js. 

CSS is made with classes that are added to components if needed. All CSS rules are located in styles/style.css. CSS is designed to be responsive for both desktop and mobile browsers.

Connection to Github's REST-API is done in separate ghGetter.js file. If GitHubs API is modified it should be enough to rewrite the file.


