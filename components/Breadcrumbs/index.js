import Link from 'next/link';
import { useRouter } from 'next/router';
import routes from './routes';
import classes from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const router = useRouter();

  return (
    <div className={`breadcrumbs ${classes.breadcrumbs}`}>
      <div className="breadcrumbs_title font-bold font-medium upp">
        {routes[router.pathname]}
      </div>
      {router.pathname !== '/' && (
        <div className={`breadcrumbs_route ${classes.breadRoute}`}>
          {router.pathname.split('/').map((item, index) => {
            let path = '/' + item;
            return (
              <Link href={path} key={path} className="breadcrumbs_route-item">
                {`${index ? '/' : ''}${routes[path]}`}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
