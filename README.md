# Gutenberg Block Development Demo

Hey guys!! This is super simple gutenberg plugin through which you can add call to action button with fully freedom like background colour, text colour, padding, font size etc.
I am using ES6 and JSX for the development of this plugin. You can also use ES5 but as ES6 is easy and it gives fully flexibility to write javascript and html at the same time.
Below you will find all the required steps on how to create this super simple plugin.

## Table of Contents

- [Create Required Files](#create-required-files)
- [Installation](#installation)
- [Create package.json](#create-package.json)
- [Edit package.json](#edit-package.json)
- [Folder Structure](#folder-structure)
- [npm run start](#npm-run-start)
- [npm run build](#npm-run-build)
- [Something Missing?](#something-missing)

## Create Required Files
All of you need to do first is create required files for basic plugin development.
### Create root folder with plugin file inside plugin directory
Create your plugin folder inside plugin directory with your favourite name. After creating folder, create plugin.php file which is main file of your plugin. You can give any name to your plugin file but ideal way is to give it same name as plugin folder name. In plugin.php file, you need to add some details as shown below.
`/**
* Plugin Name: Your plugin name
`* Description: Your plugin description
* Author: Author name
`* Version: Version number
*/`

You also need to register your script and register your block here with following functions.

``` wp_register_script ```
``` register_block_type ```

### Create index.js file
You need to create src folder first and create index.js file inside it. src folder is neccessary because it is entry point for react. Your code will starts to execute from index.js file inside src folder.
index.js file is main javascript file which contains all the required code for creating custom block. You need to import all the required packages in index.js file. It also contains registerBlockType function which is main function that contains all the code of your block.
You also need to create one another folder named build inside your plugin's root directory. but don't touch it now. we will see it later.

## Installation
As we are using ES6 and Jsx, we need to install npm first. Move to your plugin's root folder and run following command in your terminal.
```
npm install
```
After running this command you can see one folder named node_modules added inside your plugin folder's root directory which contains all the required packages and modules.

## Create package.json
One of the important file for our plugin is **package.json** file. which is a file which is mainly used to store the metadata associated with your project. It is also used to store the list of dependency packages. If you want to add any package in your project then you need to create package.json file.
To create **package.json** open your terminal and run following command.
```
npm init
```
After running above command it will prompt some question like package name, description, version, license etc. Answer all the questions that fits to you and that's it . You have successfully generated your packge.json file. You can see it inside your plugin foleder's root directory.

## Edit package.json
After creating package.json file, you need to edit it. so open it and following lines code inside scripts array.
```
"start": "wp-scripts start",
"build": "wp-scripts build"
```
We will see it later that what these lines of code will do!!

## Folder Structure
After creation, your plugin folder should look like this:

![Screenshot (154)](https://user-images.githubusercontent.com/46484569/71323222-dc9c3180-24f6-11ea-8731-eb0f1f672f7e.png)

## npm run start
We have previously added ``` "start": "wp-scripts start" ``` in package.json file. It is used to start executing your script.
Now, move to your plugin folder's root directory and run following command in your terminal
``` npm run start ```
After executing above command you will see something like this

![Screenshot (157)](https://user-images.githubusercontent.com/46484569/71323241-03f2fe80-24f7-11ea-9460-fb0cf952773f.png)

## npm run build
Like npm run start, run following command
``` npm run build ```
It will bundled your files. After running above command, there will be automatically added minified versions of javascript file named index.js (same as your javascript file) inside build folder.

## Something Missing?
If you think any thing is missing herre that should be on this plugin, [let us know](https://github.com/BRdhanani/gutenberg-call-to-action/issues) or [want to contribute some!](https://github.com/BRdhanani/gutenberg-call-to-action/edit/master/README.md)
