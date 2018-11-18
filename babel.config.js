module.exports = {
  presets: [
    ["@babel/env", 
      {
        targets: {
          node: "8.10",
        }
      }
    ],
    "@babel/typescript",
  ],
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
}
