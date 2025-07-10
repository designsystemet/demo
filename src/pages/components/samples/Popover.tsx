import { Button, Paragraph, Popover } from '@digdir/designsystemet-react';
import { useState } from 'react';

function PopoverSample() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className='row'>
        <Popover.TriggerContext>
          <Popover.Trigger>My trigger!</Popover.Trigger>
          <Popover>popover content</Popover>
        </Popover.TriggerContext>
        <Popover.TriggerContext>
          <Popover.Trigger onClick={() => setOpen(!open)}>
            My trigger
          </Popover.Trigger>
          <Popover
            open={open}
            onClose={() => setOpen(false)}
            data-color='neutral'
          >
            <Paragraph>Er du sikker på at du vil slette?</Paragraph>
            <Button
              data-color='danger'
              onClick={() => setOpen(false)}
              data-size='sm'
              style={{ marginTop: 'var(--ds-size-2)' }}
            >
              Slett
            </Button>
          </Popover>
        </Popover.TriggerContext>
      </div>
      <Popover.TriggerContext>
        <Paragraph>
          Vi bruker <Popover.Trigger inline>design tokens</Popover.Trigger> for
          å sikre at vi har en konsistent design.
        </Paragraph>
        <Popover data-color='neutral'>
          <Paragraph>
            <strong
              style={{
                display: 'block',
              }}
            >
              Design tokens
            </strong>
            Design tokens er en samling av variabler som definerer designet i et
            designsystem.
          </Paragraph>
        </Popover>
      </Popover.TriggerContext>
    </div>
  );
}
export { PopoverSample };
