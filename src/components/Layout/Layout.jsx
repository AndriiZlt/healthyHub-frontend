import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import Container from '../Container/Container';
import css from './Layout.module.css';


const Layout = () => {
  return (
    <>
      <header>
        <div className={css.background}>
          <Container>
            <Header />
          </Container>
        </div>
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
