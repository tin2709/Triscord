// app/root.tsx
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import antdStyles from "antd/dist/reset.css?url"; // <-- Import Ant Design CSS

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: antdStyles }, // <-- Thêm vào đây
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
      <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
      </body>
      </html>
  );
}