import {
  Button,
  Divider,
  Label,
  Paragraph,
  Textarea,
} from '@digdir/designsystemet-react';
import { useState } from 'react';

function TextareaSample() {
  const [value, setValue] = useState('');
  return (
    <>
      <div className='column'>
        <Label htmlFor='textarea-example'>Kontroller meg!</Label>
        <Textarea
          cols={40}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          id='textarea-example'
        />
      </div>

      <Divider style={{ marginTop: 'var(--ds-size-4)' }} />

      <Paragraph style={{ margin: 'var(--ds-size-2) 0' }}>
        Du har skrevet inn: {value}
      </Paragraph>
      <Button onClick={() => setValue('Pizza')}>Jeg vil ha Pizza</Button>
    </>
  );
}
export { TextareaSample };
