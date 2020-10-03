import classes from './InnerLayout.module.scss';

export const InnerLayout = ({ children }) => {
  return <div className={classes.inner}>{children}</div>;
};
