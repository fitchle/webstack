"use client";
import { type ReactNode } from "react";
import "../assets/globals.scss";
import { Provider } from "mobx-react";
import { api } from "../services/api";

function Layout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <html>
    <Provider>
    <body className={"bg-black overflow-hidden"}>{children}</body>
    </Provider>

    </html>
  );
}

export default api.withTRPC(Layout);