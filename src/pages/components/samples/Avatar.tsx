import { Avatar } from "@digdir/designsystemet-react";

const AvatarSample = () => {
  return (
    <div className="row">
      <Avatar data-size="xs" aria-label="extra small" initials="xs" />
      <Avatar data-size="xs" aria-label="extra small" />
      <Avatar data-size="sm" aria-label="small" initials="sm" />
      <Avatar data-size="sm" aria-label="small" />
      <Avatar data-size="md" aria-label="medium" initials="md" />
      <Avatar data-size="md" aria-label="medium" />
      <Avatar
        data-size="lg"
        data-color="extra1"
        aria-label="large"
        initials="lg"
      />
      <Avatar data-size="lg" variant="square" aria-label="large" />
    </div>
  );
};
export { AvatarSample };
