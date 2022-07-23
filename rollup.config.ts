import { nodeResolve } from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "iife",
        strict: true,
        name: "Tachidoku",
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        esbuild({ minify: true, target: "ES2015" }),
    ]
});
