import type { ReactNode } from 'react';
import { Topbar } from '../Topbar/Topbar';
import classes from './Header.module.css';

type HeaderProps = {
  icon?: ReactNode;
  backgroundSrc?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Header = ({
  backgroundSrc,
  children,
  icon,
  ...props
}: HeaderProps) => {
  return (
    <header
      className={classes.header}
      style={{ backgroundImage: `url(${backgroundSrc})` }}
      {...props}
    >
      <Topbar />
      <div className={`${classes.headerContainer} container`}>
        <div className={classes.left}>{children}</div>
        <div className={classes.right}>{icon}</div>
      </div>
    </header>
  );
};
