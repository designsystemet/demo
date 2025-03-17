import { Heading, Search } from "@digdir/designsystemet-react";
import { Topbar } from "../Topbar/Topbar";
import classes from "./SearchHeader.module.css";

type SearchHeaderProps = {
  title: string;
};

export const SearchHeader = ({ title }: SearchHeaderProps) => {
  return (
    <header className={classes.searchHeader} data-color-scheme="dark">
      <div className={classes.overlay}></div>
      <Topbar />
      <div className="container">
        <img
          className={classes.img}
          src="img/digdir-profile-element.png"
          alt=""
        />
        <div className={classes.searchContainer}>
          <Heading data-size="lg">{title}</Heading>
          <Search
            data-size="lg"
            data-color-scheme="light"
            className={classes.search}
          >
            <Search.Input aria-label="Søk" placeholder="Søk her..." />
            <Search.Clear />
          </Search>
        </div>
      </div>
    </header>
  );
};
