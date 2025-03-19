import cl from "clsx/lite";
import classes from "./ImageSection.module.css";

export const ImageSection = ({
  children,
  flipped = false,
  ...props
}: {
  children: React.ReactNode;
  flipped?: boolean;
}) => {
  return (
    <div className={classes.section} {...props}>
      <div
        className={cl(
          classes.sectionContainer,
          "container",
          flipped && classes.flipped
        )}
      >
        {children}
      </div>
    </div>
  );
};

ImageSection.Left = ({ children, ...props }: { children: React.ReactNode }) => (
  <div className={classes.leftRegion} {...props}>
    {children}
  </div>
);

ImageSection.Right = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => (
  <div className={classes.rightRegion} {...props}>
    {children}
  </div>
);
