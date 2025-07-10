import {
  Field,
  Input,
  Label,
  Textarea,
  ValidationMessage,
} from '@digdir/designsystemet-react';

function FieldSample() {
  return (
    <>
      <Field>
        <Label>Etternavn</Label>
        <Field.Description>
          Etternavn kan ikke inneholde mellomrom
        </Field.Description>
        <Input defaultValue='Nordmann Svenske' />
        <ValidationMessage>
          Du kan ikke ha mellomrom i etternavnet ditt
        </ValidationMessage>
      </Field>
      <Field>
        <Label>Hvor mange kroner koster det per måned?</Label>
        <Field.Affixes>
          <Field.Affix>NOK</Field.Affix>
          <Input />
          <Field.Affix>pr. mnd.</Field.Affix>
        </Field.Affixes>
      </Field>
      <Field>
        <Label>Legg til en beskrivelse</Label>
        <Textarea rows={2} />
        <Field.Counter limit={10} />
      </Field>
    </>
  );
}
export { FieldSample };
