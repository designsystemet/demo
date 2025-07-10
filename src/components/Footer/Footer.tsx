import { Paragraph } from '@digdir/designsystemet-react';
import classes from './Footer.module.css';

export const Footer = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={`${classes.footer} ${props.className || ''}`} {...props}>
      <div className='container'>
        <div className={classes.footerContent}>
          <div className={classes.footerColumns}>{children}</div>
        </div>
      </div>
      <div className={classes.bottom}>
        <div className='container'>
          <Paragraph data-size='sm'>© 2025 Din virksomhet</Paragraph>
        </div>
      </div>
    </footer>
  );
};

Footer.Column = ({ children }: { children: React.ReactNode }) => {
  return <div className={classes.footerColumn}>{children}</div>;
};
