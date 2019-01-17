// webpack must know if we are in development or production mode, so we set this constant as a way to 
// keep track of what our NODE_ENV is ('development' or 'production)
//const isDev = process.env.NODE_ENV === "development";
const isDev = "development";
module.exports = {
  // where we let webpack know which mode we are in
  mode: isDev ? "development" : "production",
  // we let webpack know which file is our entry point
  entry: [
    // adding @babel/polyfill will enable us to use async-await in our scripts
    "@babel/polyfill", // enables async-await
    // use the index.js file in our client sub-directory
    "./client/index.js"
  ],
  // we tell webpack what to call the resultant file it will output for us.
  output: {
    // giving it the path to follow to place our output file
    path: __dirname,
    // in our public sub-directory, create a file called bundle.js with our bundled JS
    filename: "./client/public/bundle.js"
  },
  // options for resolving module requests
  resolve: {
    // diretories to look for modules
    extensions: [".js", ".jsx"]
  },
  // 
  module: {
    // assign rules for your modules
    rules: [
      {
        // look for files that end in .js or .jsx 
        test: /\.jsx?$/,
        // don't include node modules in your search
        exclude: /node_modules/,
        // use babel-loader to load files
        // make sure to npm install babel-loader
        loader: "babel-loader"
      },
      {
        // look for files that end in css
        test: /\.css$/,
        // use style-loader and css-loader to load files
        // make sure to npm install both style and css loader
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
