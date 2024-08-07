// eslint-disable-next-line @typescript-eslint/no-var-requires
const cypressEslint = require("@cypress/browserify-preprocessor");

export default (on: any): any => {
  on("file:preprocessor", cypressEslint());
};
