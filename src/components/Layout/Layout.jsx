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
            <p style={{ color: '#141414', marginTop: 30 }}>Group#4</p>
          </Suspense>
        </Container>
      </main>
    </>
  );
};

export default Layout;
