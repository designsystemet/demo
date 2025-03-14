import classes from "./Footer.module.css";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

export const Footer = ({ children, ...props }: FooterProps) => {
  return (
    <footer className={`${classes.footer} ${props.className || ""}`} {...props}>
      <div className="container">
        <div className={classes.footerContent}>
          <div className={classes.footerColumns}>{children}</div>
        </div>
      </div>
    </footer>
  );
};

Footer.Column = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.footerColumn}>{children}</div>;
};
