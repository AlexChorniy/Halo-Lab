import { createGlobalStyle } from 'styled-components';

import OpenSansBold from './Fonts/Open_Sans/OpenSans-Bold.ttf';
import OpenSansRegular from './Fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenSansItalic from './Fonts/Open_Sans/OpenSans-Italic.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSansBold';
        src: local('OpenSans'), local('OpenSansBold'),
        url(${OpenSansBold}) format('ttf');
    };
    @font-face {
        font-family: 'OpenSansRegular';
        src: local('OpenSans'), local('OpenSansRegular'),
        url(${OpenSansRegular}) format('ttf');
    };
    @font-face {
        font-family: 'OpenSansItalic';
        src: local('OpenSans'), local('OpenSansRegular'),
        url(${OpenSansItalic}) format('ttf');
    };
`;
