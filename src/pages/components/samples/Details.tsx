import { Details } from '@digdir/designsystemet-react';

function DetailsSample() {
  return (
    <Details>
      <Details.Summary>
        Hvem kan registrere seg i Frivillighetsregisteret?
      </Details.Summary>
      <Details.Content>
        For å kunne bli registrert i Frivillighetsregisteret, må organisasjonen
        drive frivillig virksomhet. Det er bare foreninger, stiftelser og
        aksjeselskap som kan registreres. Virksomheten kan ikke dele ut midler
        til fysiske personer. Virksomheten må ha et styre.
      </Details.Content>
    </Details>
  );
}
export { DetailsSample };
