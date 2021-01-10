import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";

import packageJson from "./package.json";

const cjsOptions = {
    include: 'node_modules/**',
    namedExports: {
        'react': ['createElement', 'Component' ],
        'node_modules/@material-ui/core/index.js': [
            'Button',
            'ButtonBase'
        ],
        // 'node_modules/#material-ui/styles/index.js': [
        //     'createGenerateClassName',
        //     'createMuiTheme',
        //     'createStyles',
        //     'jssPreset',
        //     'MuiThemeProvider',
        //     'withStyles',
        //     'withTheme'
        // ],
        // 'node_modules/#material-ui/core/Modal/index.js': [ 'ModalManager' ]
    }
};

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [peerDepsExternal(), resolve(), commonjs(cjsOptions), typescript()]
};