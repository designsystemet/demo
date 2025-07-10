import { Textfield } from '@digdir/designsystemet-react';

function TextfieldSample() {
  return (
    <div className='column'>
      <Textfield label='default' prefix='NOK' suffix='pr. mnd' />
      <Textfield label='multiline' multiline rows={3} counter={10} />
    </div>
  );
}
export { TextfieldSample };
