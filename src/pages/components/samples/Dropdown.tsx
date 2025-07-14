import { Button, Dropdown } from '@digdir/designsystemet-react';

function DropdownSample() {
  return (
    <>
      <Dropdown.TriggerContext>
        <Dropdown.Trigger>Dropdown (context)</Dropdown.Trigger>
        <Dropdown>
          <Dropdown.Heading>First heading</Dropdown.Heading>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button>Button 1.1</Dropdown.Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown.Button>Button 1.2</Dropdown.Button>
            </Dropdown.Item>
          </Dropdown.List>
          <Dropdown.Heading>Second heading</Dropdown.Heading>
          <Dropdown.List>
            <Dropdown.Item>
              <Dropdown.Button>Button 2.1</Dropdown.Button>
            </Dropdown.Item>
            <Dropdown.Item>
              <Dropdown.Button>Button 2.2</Dropdown.Button>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </Dropdown.TriggerContext>
      <Button popovertarget='dropdown'>Dropdown(popovertarget)</Button>
      <Dropdown id='dropdown'>
        <Dropdown.List>
          <Dropdown.Item>
            <Dropdown.Button>Item</Dropdown.Button>
          </Dropdown.Item>
        </Dropdown.List>
      </Dropdown>
    </>
  );
}
export { DropdownSample };
