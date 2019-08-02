# Auto-Defs UI

## Usage 
Note: This usage guide assumes the user has set up npm. <br/>
* To setup environment for this UI, use `npm install`.  <br/>
* To run in development mode, use `npm start`.  <br/>
* To deploy, use `npm build`. The deployed files will be in the build folder of home directory.

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

#### High level diagram
![Alt text](highLevel.png?raw=true "High level structure")

#### How page is constructed
Each page consists of one or more templates, which takes data and configuration from page information. Each template then consists of one or more components that take its own data to render. 

#### Where the data comes from and how to integrate future data
The sample data from this repo is generated by auto_selector.py and auto_definition.py in the feature/auto-defs-new branch of patrol.  <br/>
The data access of this UI follows a decentralized fashion, where each component has access to all existing data, although only subset what is necessary given its props. This decentralized mode could be altered in future by passing chains of data in a state object when linking the sub-component (see how SelectorPage.jsx gets it data from ExistingSelectorPage.jsx for illustration), which makes up a trickle down approach.

#### How to add more data or new columns
Each grid is constructed primarily by a data object, which follows a structure of [{col1 : col1_val, col2: col2_val}, {}, {}], where each element in the array represents a row, and a headerInfo object, which specifies the configuration such as sortable or not and the displayed title for the column. Notice that the field name in data has to match with that in headerInfo. New Column could be added by modifing headerInfo and data object.


        

