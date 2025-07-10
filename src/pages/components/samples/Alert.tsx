import { Alert, Heading, Paragraph } from '@digdir/designsystemet-react';

function AlertSample() {
  return (
    <Alert data-color='info'>
      <Heading
        level={2}
        data-size='xs'
        style={{
          marginBottom: 'var(--ds-size-2)',
        }}
      >
        Har du husket å bestille passtime?
      </Heading>
      <Paragraph>
        Det er lange køer for å bestille pass om dagen, det kan være lurt å
        bestille i god tid før du skal reise.
      </Paragraph>
    </Alert>
  );
}
export { AlertSample };
