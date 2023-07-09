"use client";
import { type ReactNode } from "react";
import "../assets/globals.scss";
import { Provider } from "mobx-react";
import { api } from "../services/api";
import { Toaster } from "react-hot-toast";

function Layout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <Provider>
        <body className={"bg-black overflow-hidden"}>
          <main className="">{children}</main>
          <Toaster position="bottom-left" />
        </body>
      </Provider>
    </html>
  );
}

export default api.withTRPC(Layout);
