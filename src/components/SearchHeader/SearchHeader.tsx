import { Heading, Search } from "@digdir/designsystemet-react";
import { Topbar } from "../Topbar/Topbar";
import classes from "./SearchHeader.module.css";

export const SearchHeader = () => {
  return (
    <header className={classes.searchHeader} data-color-scheme="dark">
      <Topbar />
      <div className="container">
        <img
          className={classes.img}
          src="img/digdir-profile-element.png"
          alt=""
        />
        <div className={classes.searchContainer}>
          <Heading data-size="md">Hva kan vi hjelpe deg med?</Heading>
          <Search
            data-size="lg"
            data-color-scheme="light"
            className={classes.search}
          >
            <Search.Input
              aria-label="Søk"
              placeholder="Søk i hele Digdir universet"
            />
            <Search.Clear />
          </Search>
        </div>
      </div>
    </header>
  );
};
