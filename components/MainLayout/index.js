import { InnerLayout } from '../index';

export const MainLayout = ({ children }) => {
  return (
    <>
      <main>
        <InnerLayout>{children}</InnerLayout>
      </main>
    </>
  );
};
