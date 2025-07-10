import {
  Button,
  Dialog,
  Heading,
  Paragraph,
} from '@digdir/designsystemet-react';
import { useRef } from 'react';

function DialogSample() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className='row'>
      <Button onClick={() => dialogRef.current?.showModal()}>
        Open Dialog with ref
      </Button>
      <Dialog ref={dialogRef}>
        <Paragraph data-size='sm'>Dialog subtittel</Paragraph>
        <Heading style={{ marginBottom: 'var(--ds-size-2)' }}>
          Dialog header
        </Heading>
        <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          doloremque obcaecati assumenda odio ducimus sunt et.
        </Paragraph>
        Dialog footer
      </Dialog>

      <Dialog.TriggerContext>
        <Dialog.Trigger>Open Dialog (triggerContext)</Dialog.Trigger>
        <Dialog>
          <Heading style={{ marginBottom: 'var(--ds-size-2)' }}>
            Dialog header
          </Heading>
          <Paragraph style={{ marginBottom: 'var(--ds-size-2)' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            doloremque obcaecati assumenda odio ducimus sunt et.
          </Paragraph>
          <Paragraph data-size='sm'>Dialog footer</Paragraph>
        </Dialog>
      </Dialog.TriggerContext>
    </div>
  );
}
export { DialogSample };
