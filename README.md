# nsfw-filter 
A simplified wrapper around Clarifai's NSFW detection.
# Get api key 
[clarifai](https://clarifai.com)

# Features

 * Simplified result, so you don't need to deal with complex objects and arrays.
 * Automatic data recognition, whether it's Base64, a Data URL, or a URL.

# Example

```js
var FILTER = require('virus-nsfw');

var filter = new FILTER("YOUR_CLARIFAI_API_KEY_HERE");

function handleResult(result) {
    if (result.sfw) {
        console.log(`This image is A-OK with a confidence of ${result.confidence}.`);
    } else {
        console.log(`This image is NSFW with a confidence of ${result.confidence}.`);
    }
}

function handleError(error) {
    console.error(error);
}

filter.predict("https://example.com/example.png").then(handleResult).catch(handleError); // URL
// or // 
filter.predict("data:image/png;base64,dGhpc2lzbm90YW5pbWFnZQ==").then(handleResult).catch(handleError); // Data URL
// or // 
filter.predict("dGhpc2lzbm90YW5pbWFnZQ==", handleResult).then(handleResult).catch(handleError); // Base64
```


## Setting up your project

First, you'll need to install NSFAI via NPM. Use the `--save-dev` flag, so it gets saved into your `package.json` file.

```
npm install --save-dev virus-nsfw
```
Or without save into devDependencies 
```
npm install virus-nsfw
```

First, you'll need to require and initialize FILTER in your code. Use `require('virus-nsfw')`, and then, you'll need to create a new FILTER instance. Here's where your API key comes in.

For security reasons, you shouldn't hardcode your API key into your code, because if you upload it to GitHub, or someone gets the code, they can just read out the key. What we recommend, is storing it in your environment variables. You know, that place where `PATH`, and stuff like that is.

Go ahead and save your API key in an environment variable. Now, when you push the code to GitHub, or upload is somewhere, people can't see it.

After you've securely saved your API key into an environment variable, we can create the virus-nsfw instance. Use `new FILTER(process.env.YOUR_ENVIRONMENT_VARIABLE_NAME_HERE)` for that.

```js
var FILTER = require('virus-nsfw');

var filter = new FILTER(process.env.MYAPP_CLARIFAI_KEY);
```

Congratulations! Now you can predict the NSFWness of images. Let's see an example of how to do that!

```js
var FILTER = require('virus-nsfw');

var filter = new FILTER(process.env.MYAPP_CLARIFAI_KEY);

filter.predict("https://example.com/image.png").then(function(result) {
    if (result.sfw) { // If the result is safe for work:
        console.log(`This image is safe for work, with a confidence of ${result.confidence}!`);
    } else { // If the result is not safe for work:
        console.log(`This image is not safe for work, with a confidence of ${result.confidence}!`);
    }
}).catch(function(error) {
    console.error(error); // Print the error to the console.
});
```