import classes from "./Topbar.module.css";
import { MagnifyingGlassIcon, GlobeIcon } from "@navikt/aksel-icons";
import { Button } from "@digdir/designsystemet-react";

export const Topbar = () => {
  return (
    <div className={classes.topbar}>
      <div className={`${classes.topbarContainer} container`}>
        <div className={classes.left}>
          <img src="img/logo-positive.svg" alt="" />
        </div>
        <div className={classes.middle}>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>MenyPunkt 1</li>
            <li className={classes.menuItem}>MenyPunkt 2</li>
            <li className={classes.menuItem}>MenyPunkt 3</li>
          </ul>
        </div>
        <div className={classes.right}>
          <Button className={classes.btn} variant="tertiary">
            <GlobeIcon title="a11y-title" />
            Språk
          </Button>
          <Button className={classes.btn} variant="tertiary">
            <MagnifyingGlassIcon title="a11y-title" />
            Søk
          </Button>
        </div>
      </div>
    </div>
  );
};
