import Link from 'next/link';
import { useRouter } from 'next/router';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Grid } from '@material-ui/core';
import cls from 'classnames';
import classes from './Index.module.scss';
import {
  MainLayout,
  HeaderLayout,
  Breadcrumbs,
  UserMain,
} from '../components/index';

export default function Index() {
  const router = useRouter();

  return (
    <>
      <HeaderLayout title="Main Page">
        <Grid
          alignItems="center"
          style={{ padding: '20px 25px' }}
          justify="flex-end"
          container
        >
          <div className="headActions">
            <Grid
              container
              alignItems="center"
              justify="space-between"
              style={{ gap: '46px' }}
            >
              <div className={`headNotice ${classes.headNotice}`}>
                <NotificationsNoneIcon
                  style={{ color: '#fff' }}
                  fontSize="large"
                />
              </div>
              <div className={`headUser ${classes.headUser}`}>
                <div className={`userAvatar ${classes.userHeadAvatar}`}></div>
                <div className="userName">Иванова А.</div>
              </div>
            </Grid>
          </div>
        </Grid>
        <Breadcrumbs />
        <UserMain>
          <Grid
            container
            alignItems="center"
            justify="flex-start"
            className="userBlock"
          >
            <div className={`userBlockAvatar ${classes.userBlockAvatar}`}></div>
            <div className={`userBlockName ${classes.userBlockName}`}>
              Иванова Анна Михайловна
            </div>
          </Grid>
        </UserMain>
      </HeaderLayout>
      <MainLayout>
        <h1>Hello Next.js</h1>
        <Link href="/login">Go to login page</Link>
      </MainLayout>
    </>
  );
}
