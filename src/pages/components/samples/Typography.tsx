import {
  Heading,
  Label,
  Paragraph,
  ValidationMessage,
} from "@digdir/designsystemet-react";

function TypographySample() {
  return (
    <div className="column" style={{ maxWidth: "600px" }}>
      <Heading level={2} data-size="lg">
        Heading (H2)
      </Heading>

      <Paragraph variant="long">
        Her kan du registrere nye virksomheter, som for eksempel
        enkeltpersonforetak, foreninger, aksjeselskap, ansvarlige selskap,
        samvirkeforetak og stiftelser.
      </Paragraph>
      <Label>Dette er en Label</Label>
      <ValidationMessage>Dette er en ValidationMessage</ValidationMessage>
    </div>
  );
}
export { TypographySample };
