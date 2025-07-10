import { Chip } from '@digdir/designsystemet-react';

function ChipSample() {
  return (
    <div className='row'>
      <Chip.Radio name='my-radio' value='nynorsk' defaultChecked>
        Nynorsk
      </Chip.Radio>
      <Chip.Radio name='my-radio' value='bokmål'>
        Bokmål
      </Chip.Radio>
      <Chip.Checkbox>Nynorsk</Chip.Checkbox>
      <Chip.Removable>Norge</Chip.Removable>
      <Chip.Button>Tøm alle filtre</Chip.Button>
    </div>
  );
}
export { ChipSample };
