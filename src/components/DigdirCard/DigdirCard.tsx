import { Card } from "@digdir/designsystemet-react";

export const DigdirCard = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Description>Card description</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Content goes here</p>
      </Card.Content>
    </Card>
  );
};
