import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import css from "./Layout.module.css";
import Header from "../Header/Header";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
