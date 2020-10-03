import Link from 'next/link';
import { MainLayout, HeaderLayout, Breadcrumbs } from '../../components/index';

const Login = () => {
  return (
    <>
      <HeaderLayout title="Login Page">
        <Breadcrumbs></Breadcrumbs>
      </HeaderLayout>
      <MainLayout title="Login">
        <h1>Login Page</h1>
        <Link href="/">Go to main page</Link>
      </MainLayout>
    </>
  );
};

export default Login;
