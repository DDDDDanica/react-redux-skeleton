// Setup NodeJS APIs
require("babel-register")({
  babelrc: false,
  presets: [
    [
      "env",
      {
        targets: {
          node: "8.0"
        }
      }
    ],
    "stage-0",
    "react"
  ],
  plugins: [
    "inline-react-svg",
    [
      "istanbul",
      {
        exclude: [
          "**/*.svg",
          "**/*.spec.js",
          "**/*.common.js",
          "**/config/**.js",
          "**/fixtures/**.js"
        ]
      }
    ],
    ["webpack-alias", { config: "webpack.common.js" }]
  ]
});

const noop = () => {};
require.extensions[".scss"] = noop;
require.extensions[".png"] = module => (module.exports = "");
require("./bootstrap.js");
