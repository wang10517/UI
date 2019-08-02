# Auto-Defs UI

## Usage
Note: This usage guide assumes the user has set up npm
To setup environment for this UI, use `npm install`
To run in development mode, use `npm start`
To deploy, use `npm build`, the deployed files will be in the build folder of home directory

## Maintenance

### Tools used:
Framework: React js
CSS Library: 
* Kendo react component
* Material UI
* Boostrap4

### File structure
1. package management related files:
    * yarn.lock
    * package.json
    * package-lock.json
    * .gitignore
2. Folders:
    * node_modulues: librares by npm
    * public:
        * index.html : html entrance
    * src: 
        1. Files:
            * App.css: css applied to App.js
            * App.js: Top level component
            * Index.js: Entrance point for react to index.html
        2. Folders:
            * components: react component that wraps othter third party library components
            * data: folder that stores used data
            * errors: error handling componnents
            * pages: main page display components
            * routes: routing for navigation within UI
            * templates: component template for reuses

### UI dev structure
![Alt text](highLevel.png?raw=true "High level structure")

        

