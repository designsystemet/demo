import classes from './ContactSection.module.css';

export const ContactSection = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={classes.contactSection} {...props}>
      <div className={`${classes.contactContainer} container`}>{children}</div>
    </div>
  );
};

ContactSection.Left = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <div className={classes.leftRegion} {...props}>
    {children}
  </div>
);

ContactSection.Right = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <div className={classes.rightRegion} {...props}>
    {children}
  </div>
);
