import React from "react";
import { Test } from "../components/Books/test";
import { Layout } from "../components/Layout/layout";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <h1>This is my page</h1>
            </Layout>
        </>
    );
}