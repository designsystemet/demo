import {
  Field,
  Label,
  Input,
  ValidationMessage,
  Textarea,
} from "@digdir/designsystemet-react";

function MyField() {
  return (
    <Field>
      <Label>Label</Label>
      <Field.Description>Beskrivelse</Field.Description>
      <Textarea />
      <Field.Counter limit={10} />
      <ValidationMessage>Validerings melding</ValidationMessage>
    </Field>
  );
}

export default MyField;
