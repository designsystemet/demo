import {
  Field,
  Label,
  Input,
  ValidationMessage,
} from "@digdir/designsystemet-react";

function MyField() {
  return (
    <Field>
      <Label>Label</Label>
      <Field.Description>Beskrivelse</Field.Description>
      <Input />
      <ValidationMessage>Validerings melding</ValidationMessage>
    </Field>
  );
}

export default MyField;
