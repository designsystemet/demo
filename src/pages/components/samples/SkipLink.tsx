import { Paragraph, SkipLink } from '@digdir/designsystemet-react';

function SkipLinkSample() {
  return (
    <>
      <Paragraph>
        For å vise skiplinken, tab til dette eksempelet, eller klikk inni
        eksempelet og trykk <kbd>Tab</kbd>.
        <SkipLink href='#fake-main-content'>Hopp til hovedinnhold</SkipLink>
      </Paragraph>
      <aside id='fake-main-content' tabIndex={-1}>
        Region som kan motta fokus fra skiplink.
      </aside>
    </>
  );
}
export { SkipLinkSample };
