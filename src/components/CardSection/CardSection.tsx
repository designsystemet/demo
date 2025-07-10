import { Heading } from '@digdir/designsystemet-react';
import cl from 'clsx/lite';
import classes from './CardSection.module.css';

type CardSectionProps = {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const CardSection = ({
  title,
  children,
  centered,
  ...props
}: CardSectionProps) => {
  return (
    <section className={cl(classes.cardSection)} {...props}>
      <div className='container'>
        <Heading data-size='md' className={centered ? classes.centered : ''}>
          {title}
        </Heading>
        <div className={classes.content}>{children}</div>
      </div>
    </section>
  );
};
