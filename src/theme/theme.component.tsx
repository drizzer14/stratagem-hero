import { createGlobalStyle } from 'styled-components';

const OxaniumExtraLight = new URL(
  '../../public/fonts/Oxanium-ExtraLight.ttf',
  import.meta.url,
) as unknown as string;
const OxaniumLight = new URL(
  '../../public/fonts/Oxanium-Light.ttf',
  import.meta.url,
) as unknown as string;
const OxaniumRegular = new URL(
  '../../public/fonts/Oxanium-Regular.ttf',
  import.meta.url,
) as unknown as string;
const OxaniumMedium = new URL(
  '../../public/fonts/Oxanium-Medium.ttf',
  import.meta.url,
) as unknown as string;
const OxaniumSemiBold = new URL(
  '../../public/fonts/Oxanium-SemiBold.ttf',
  import.meta.url,
) as unknown as string;
const OxaniumBold = new URL(
  '../../public/fonts/Oxanium-Bold.ttf',
  import.meta.url,
) as unknown as string;
const OxaniumExtraBold = new URL(
  '../../public/fonts/Oxanium-ExtraBold.ttf',
  import.meta.url,
) as unknown as string;

const Theme = createGlobalStyle`
  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumExtraLight}) format('truetype');
    font-weight: 200;
  }

  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumLight}) format('truetype');
    font-weight: 300;
  }

  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumRegular}) format('truetype');
  }

  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumMedium}) format('truetype');
    font-weight: 500;
  }

  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumSemiBold}) format('truetype');
    font-weight: 600;
  }

  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumBold}) format('truetype');
    font-weight: 700;
  }

  @font-face {
    font-family: Oxanium;
    src: url(${OxaniumExtraBold}) format('truetype');
    font-weight: 800;
  }

  :root {
    --brand: #ffe809;
  }

  /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
  */

    *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    height: 100%;
    font-size: 18px;
    font-family: Oxanium;
  }

  body {
    height: 100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    height: 100%;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  span, p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    text-shadow: 0 0 1em currentColor;
  }

  ol, ul {
    list-style: none;
  }

  #root, #__next {
    isolation: isolate;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

export default Theme;
