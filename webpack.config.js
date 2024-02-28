/******************************************************************************
 * @Author                : jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2024-02-28 21:31:04                               *
 * @LastEditors           : jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2024-02-28 21:36:36                               *
 *****************************************************************************/

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    library: "OdinEngine",
    filename: "odin-engine.js",
    path: path.resolve(__dirname, "dist")
  },
};
