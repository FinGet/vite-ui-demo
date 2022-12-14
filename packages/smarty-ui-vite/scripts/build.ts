import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "../vite.config";
import { build, InlineConfig, defineConfig, UserConfig } from "vite";
const buildAll = async () => {
  // const inline: InlineConfig =
  //   viteConfig;

  // å¨éæå
  await build(defineConfig(config as UserConfig) as InlineConfig);
  // await build(defineConfig({}))

  const __filename = fileURLToPath(import.meta.url);

  // ðï¸ "/home/john/Desktop/javascript"
  const __dirname = path.dirname(__filename);
  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // åªè¦ç®å½ä¸è¦æä»¶ï¼ä¸éé¢åå«index.ts
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);
      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name, // å¯¼åºæ¨¡åå
          fileName: `index`,
          formats: [`es`, `umd`],
        },
        outDir,
      };

      Object.assign(config.build, custom);
      await build(defineConfig(config as UserConfig) as InlineConfig);

      fs.outputFile(
        path.resolve(outDir, `package.json`),
        `{
          "name": "smarty-ui-vite/${name}",
          "main": "index.umd.js",
          "module": "index.umd.js",
        }`,
        `utf-8`
      );
    });
};

buildAll();
