import {
  Checkbox,
  Fieldset,
  Radio,
  Switch,
  useCheckboxGroup,
  ValidationMessage,
} from '@digdir/designsystemet-react';

function FormInputsSample() {
  const { getCheckboxProps, validationMessageProps } = useCheckboxGroup({
    value: ['epost'],
  });
  return (
    <>
      <Fieldset>
        <Fieldset.Legend>
          Hvordan vil du helst at vi skal kontakte deg?
        </Fieldset.Legend>
        <Fieldset.Description>
          Velg alle alternativene som er relevante for deg.
        </Fieldset.Description>
        <Checkbox label='E-post' {...getCheckboxProps('epost')} />
        <Checkbox label='Telefon' {...getCheckboxProps('telefon')} />
        <Checkbox label='SMS' {...getCheckboxProps('sms')} />
        <ValidationMessage {...validationMessageProps} />
      </Fieldset>
      <Fieldset>
        <Fieldset.Legend>Kontaktes på e-post?</Fieldset.Legend>
        <Fieldset.Description>
          Bekreft om du ønsker å bli kontaktet per e-post.
        </Fieldset.Description>
        <div className='row'>
          <Radio name='my-inline' label='Ja' value='ja' />
          <Radio name='my-inline' label='Nei' value='nei' />
        </div>
        <Switch label='switch 2' value='alt2' />
      </Fieldset>
    </>
  );
}
export { FormInputsSample };
