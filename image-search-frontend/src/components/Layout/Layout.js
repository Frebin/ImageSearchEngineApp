import React from "react";
import TopNavigationBar from "../Navigations/TopNavigationBar";
import Footer from "../Navigations/Footer";
export default function Layout(props) {
  return (
    <>
      <TopNavigationBar />
      <main style={{ flex: 1 }}>{props.children}</main>
      <Footer />
    </>
  );
}
