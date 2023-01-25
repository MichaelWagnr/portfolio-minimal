import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary-fg-100: #c0caf5;
  --primary-fg-200: #a9b1d6;
  --primary-fg-300: #9aa5ce;
  --primary-fg-400: #cfc9c2;

  --primary-bg-100: #565f89;  
  --primary-bg-200: #414868;  
  --primary-bg-300: #24283b;  
  --primary-bg-400: #1a1b26;

  --accent-100: #f7768e;
  --accent-200: #ff9e64;
  --accent-300: #e0af68;
  --accent-400: #9ece6a;
  --accent-500: #73daca;
  --accent-600: #b4f9f8;
  --accent-700: #2ac3de;
  --accent-800: #7dcfff;
  --accent-900: #7aa2f7;
  --accent-1000: #bb9af7;

  /* Type-Scale: Perfect Fourth */
  --h1: 4.209rem;  
  --h2: 3.157rem;
  --h3: 2.369rem;
  --h4: 1.777rem;
  --h5: 1.333rem;
  --p: 1rem;  
  --h6: 0.75rem;  
  --h7: 0.563rem;  
  --h8: 0.422rem;  
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// ADDITIONAL STYLES

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: var(--primary-fg-100);
  background: var(--primary-bg-400);
	min-height: 100vh;
	max-width: 1200px;
  margin: auto;
}

h1 {font-size: var(--h1);}
h2 {font-size: var(--h2);}
h3 {font-size: var(--h3);}
h4 {font-size: var(--h4);}
h5 {font-size: var(--h5);}
h6 {font-size: var(--h6);}
h7 {font-size: var(--h7);}
h8 {font-size: var(--h8);}
p {font-size: var(--p);}

.h1 {font-size: var(--h1);}
.h2 {font-size: var(--h2);}
.h3 {font-size: var(--h3);}
.h4 {font-size: var(--h4);}
.h5 {font-size: var(--h5);}
.h6 {font-size: var(--h6);}
.h7 {font-size: var(--h7);}
.h8 {font-size: var(--h8);}
.p {font-size: var(--p);}
`
