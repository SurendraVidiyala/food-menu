# food-menu
# In the Package.json file
````
 "serve": "npm run build; npm run watch:js -- & > /dev/null 2>&1; npm run watch:scss -- & > /dev/null 2>&1; lite-server"
````
*   Hey! I hope you're enjoying the project. When I made that, I didn't even think about the Windows users out there. It uses some syntax that available in Unix based systems. So, it doesn't work on Windows. :( We get better as we grow, right? :) Anyhoo...it is easy to fix. That script is essentially building the files and then running a bunch of watch scripts. This can be fixed using a package I use all the time now called concurrently. Here's how you can fix it.
* Add a script to the package.json called preserve and make it npm run build. Then use npm to install concurrently with
````
npm install --dev concurrently
````
Lastly, we edit the serve script to be 
````
"serve":"concurrently \"npm run watch:js\" \"npm run watch:scss\" \"lite-server\""
````
- I still got the errors with the above code in watchify, so i modified to  the below code.
* Perfect code for windows OS in the package.json
````
"scripts": {
        "dev": "lite-server",
        "preserve": "npm run build",
        "build:js": "browserify src/js/index.js -d -t babelify -o build/bundle.js",
        "watch:js": "watchify src/js/index.js -d -v -t babelify -o build/bundle.js",
        "build:scss": "node-sass src/scss/styles.scss --output build --source-map-embed --source-map-contents",
        "watch:scss": "npm run build:scss -- --watch",
        "build": "npm run build:js && npm run build:scss",
        "serve": "concurrently \"npm run watch:js --& > /dev/null 2>&1\" \"npm run watch:scss --& > /dev/null 2>&1\" \"lite-server\""
    },
````


  