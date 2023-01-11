import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: {
      '200': string;
      '400': string;
      '700': string;
    }

    white: {
      '300': string;
    }
  }
}
