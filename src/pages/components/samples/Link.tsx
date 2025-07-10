import { Link, Paragraph } from '@digdir/designsystemet-react';
import { EnvelopeClosedIcon } from '@navikt/aksel-icons';

function LinkSample() {
  return (
    <>
      <Paragraph>
        Vi bruker komponenter fra{' '}
        <Link href='https://www.designsystemet.no/no' target='_blank'>
          et fantastisk designsystem
        </Link>
        .
      </Paragraph>
      <Link href='mailto:designsystem@digdir.no'>
        <EnvelopeClosedIcon aria-hidden /> Kontakt oss
      </Link>
    </>
  );
}
export { LinkSample };
