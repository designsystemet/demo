import classes from './ContactItem.module.css';

type ContactItemProps = {
  text: string;
  icon: JSX.Element;
};

export const ContactItem = ({ text, icon }: ContactItemProps) => {
  return (
    <div className={classes.contactItem}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
};
