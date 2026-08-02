import { build } from "esbuild";
import { readFile, writeFile, mkdir, copyFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

const root = import.meta.dirname;
const output = resolve(root, "static-site");
const bundledPage = resolve(output, "page.mjs");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await build({
  entryPoints: [resolve(root, "app/page.tsx")],
  outfile: bundledPage,
  bundle: true,
  platform: "node",
  format: "esm",
  jsx: "automatic",
  external: ["react", "react/jsx-runtime"],
});

const { default: Home } = await import(`${pathToFileURL(bundledPage).href}?v=${Date.now()}`);
const css = (await readFile(resolve(root, "app/globals.css"), "utf8"))
  .replace(/^@import\s+["']tailwindcss["'];?\s*/m, "");
const body = renderToStaticMarkup(React.createElement(Home));
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="A teen-friendly guide to colleges offering men's cross country and professional pilot training.">
  <title>Runway Routes — College Running + Flight Guide</title>
  <link rel="icon" href="/favicon.svg">
  <style>${css}</style>
</head>
<body>${body}</body>
</html>`;

await writeFile(resolve(output, "index.html"), html);
await copyFile(resolve(root, "public/favicon.svg"), resolve(output, "favicon.svg"));
await copyFile(resolve(root, "public/geist-98bbbccb.woff2"), resolve(output, "geist-98bbbccb.woff2"));
await rm(bundledPage);
