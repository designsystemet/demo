import type { MainAndSupportColors as BaseCustomColors } from '@digdir/designsystemet-react/colors';

declare module '@digdir/designsystemet-react/colors' {
  export interface MainAndSupportColors extends BaseCustomColors {
    accent: never;
    hoved: never;
    brand1: never;
    brand2: never;
    brand3: never;
  }
}
