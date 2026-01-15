import { Tag } from "@digdir/designsystemet-react";

function TagSample() {
  return (
    <div className="row">
      <Tag data-color="accent" data-size="sm">
        sm accent
      </Tag>
      <Tag data-color="extra1" data-size="md">
        md brand1
      </Tag>
      <Tag data-color="warning" data-size="lg">
        lg warning
      </Tag>
    </div>
  );
}
export { TagSample };
