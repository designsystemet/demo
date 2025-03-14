import classes from "./ContactSection.module.css";

export const ContactSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.contactSection}>
      <div className={`${classes.contactContainer} container`}>{children}</div>
    </div>
  );
};

ContactSection.Left = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.leftRegion}>{children}</div>
);

ContactSection.Right = ({ children }: { children: React.ReactNode }) => (
  <div className={classes.rightRegion}>{children}</div>
);
