import { defineConfig } from "@rspack/cli";
const isDev = process.env.NODE_ENV === "development";
export default defineConfig({
  target: 'es3',
  context: __dirname,
  entry: {
    main: "./src/main.tsx"
  },
  resolve: {
    extensions: ["...", ".ts", ".tsx", ".jsx"]
  },
  output: {
    chunkFormat: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
            }
          }
        ]
      }
    ]
  },
  optimization: {
  },
});
