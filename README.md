# Ife Hugo

**A [Hugo](https://gohugo.io/) boilerplate for creating websites**

This is a boilerplate for using Hugo as a static site generator and Brunch as your
asset pipeline.

It's setup to use brunch for CSS and JavaScript.

This project was inspired by [Victor Hugo](https://github.com/netlify/victor-hugo), and is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.

## Usage

Be sure that you have the latest node and npm installed.

Next, clone this repository and run:

```bash
npm install
npm run dev
```

Then visit http://localhost:3000/ - BrowserSync will automatically reload CSS or
refresh the page when stylesheets or content changes.

To build your static output to the `/public` folder, use:

```bash
npm run build
```

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // CSS files in the root of this folder will end up in /css/main.css
|  |--js               // app.js will be compiled to js/app.js with babel
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder ends up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

## Environment variables
You can access the environment variable inside the theme files with 
`getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

## Enjoy!!
