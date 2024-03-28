import MainHeader from './MainHeader';

export default function Layout({ children }) {
  return (
    <>
      <MainHeader />

      <main> {children} </main>
    </>
  );
}
