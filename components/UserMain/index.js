import EditIcon from '@material-ui/icons/Edit';
import classes from './UserMain.module.scss';

export const UserMain = ({ children }) => {
  return (
    <div className={`userMain ${classes.userMain}`}>
      <div className="userMain_info">{children}</div>
      <div className="userMain_action">
        <div className={`userMain_action-edit ${classes.userMainEdit}`}>
          Редактировать
          <EditIcon style={{ color: '#fff' }} />
        </div>
      </div>
    </div>
  );
};
