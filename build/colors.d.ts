import type { MainAndSupportColors as BaseCustomColors } from '@digdir/designsystemet-react/colors';

declare module '@digdir/designsystemet-react/colors' {
  export interface MainAndSupportColors extends BaseCustomColors {
    butikken: never;
    katt: never;
    hund: never;
    frosk: never;
  }
}
