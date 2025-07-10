import {
  Heading,
  Label,
  Paragraph,
  ValidationMessage,
} from '@digdir/designsystemet-react';

function TypographySample() {
  return (
    <div className='column'>
      <Heading
        level={2}
        data-size='lg'
        style={{ marginBottom: 'var(--ds-size-2)' }}
      >
        Samordnet registermelding (H1)
      </Heading>

      <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }} variant='long'>
        Her kan du registrere nye virksomheter, som for eksempel
        enkeltpersonforetak, foreninger, aksjeselskap, ansvarlige selskap,
        samvirkeforetak og stiftelser. De aller fleste organisasjonsformene kan
        bruke denne tjenesten.
      </Paragraph>
      <Label>Dette er en Label</Label>
      <ValidationMessage>Dette er en ValidationMessage</ValidationMessage>
    </div>
  );
}
export { TypographySample };
