import { Card, Heading } from "@digdir/designsystemet-react";
import classes from "./components.module.css";
import * as samples from "./samples/";

export const Components = () => {
  return (
    <div className={classes.container}>
      {Object.entries(samples).map(([name, Component]) => {
        if (typeof Component === "function") {
          return (
            <Card key={name}>
              <Heading>{name.slice(0, -6)}</Heading>
              <Component />
            </Card>
          );
        }
        return null;
      })}
    </div>
  );
};
