import classes from "./CardSection.module.css";
import { Heading } from "@digdir/designsystemet-react";

type CardSectionProps = {
  title: string;
  children: React.ReactNode;
};

export const CardSection = ({ title, children }: CardSectionProps) => {
  return (
    <section className={classes.cardSection}>
      <div className="container">
        <Heading data-size="md">{title}</Heading>
        <div className={classes.content}>{children}</div>
      </div>
    </section>
  );
};
