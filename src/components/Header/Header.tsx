import { Topbar } from "../Topbar/Topbar";
import classes from "./Header.module.css";
import { Heading, Paragraph, Button } from "@digdir/designsystemet-react";

type HeaderProps = {
  title: string;
  description: string;
  imgSrc: string;
};

export const Header = ({ title, description, imgSrc }: HeaderProps) => {
  return (
    <header className={classes.header}>
      <Topbar />
      <div className={`${classes.headerContainer} container`}>
        <div className={classes.left}>
          <Heading data-size="lg">{title}</Heading>
          <Paragraph data-size="lg" variant="long">
            {description}
          </Paragraph>
          <div className={classes.btnGroup}>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
          </div>
        </div>
        <div className={classes.right}>
          {imgSrc && <img src={imgSrc} alt="" />}
        </div>
      </div>
    </header>
  );
};
