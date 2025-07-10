import {
  Button,
  Divider,
  Field,
  Input,
  Label,
  Paragraph,
} from '@digdir/designsystemet-react';
import { useState } from 'react';

function InputSample() {
  const [value, setValue] = useState<string>();

  return (
    <>
      <Field>
        <Label>Kontroller meg!</Label>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </Field>
      <div>
        <Divider />

        <Paragraph style={{ margin: 'var(--ds-size-2) 0' }}>
          Du har skrevet inn: {value}
        </Paragraph>
        <Button onClick={() => setValue('Kake')}>Jeg vil ha Kake</Button>
      </div>
    </>
  );
}
export { InputSample };
