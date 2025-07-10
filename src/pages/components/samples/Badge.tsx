import { Badge } from '@digdir/designsystemet-react';
import { EnvelopeClosedFillIcon } from '@navikt/aksel-icons';

function BadgeSample() {
  return (
    <div className='row'>
      <Badge.Position placement='top-right'>
        <Badge data-color='accent'></Badge>
        <EnvelopeClosedFillIcon title='Meldinger' />
      </Badge.Position>
      <Badge count={15} maxCount={9} />
    </div>
  );
}
export { BadgeSample };
