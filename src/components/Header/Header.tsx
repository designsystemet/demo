import { Topbar } from "../Topbar/Topbar";
import classes from "./Header.module.css";

type HeaderProps = {
  imgSrc?: string;
  backgroundSrc?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export const Header = ({
  backgroundSrc,
  children,
  imgSrc,
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
        <div className={classes.right}>
          {imgSrc && <img src={imgSrc} alt="" />}
        </div>
      </div>
    </header>
  );
};
