import { keyframes, injectGlobal } from 'vue-styled-components'

injectGlobal`
  body {
    margin: 0;
  }
`

export const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to   { transform: translateX(0%); }
`

export const bound = keyframes`
  0%   { transform: translateY(-100vh); }
  15%  { transform: translateY(0vh); }
  30%  { transform: translateY(-3vh); }
  45%  { transform: translateY(0vh); }
  60%  { transform: translateY(-1.5vh); }
  75%  { transform: translateY(0vh); }
  90%  { transform: translateY(-0.75vh); }
  100% { transform: translateY(0vh); }
`

export const rotate = keyframes`
  0%   { transform: rotateY(45deg); }
  15%  { transform: rotateY(-5deg); }
  30%  { transform: rotateY(5deg); }
  45%  { transform: rotateY(-2.5deg); }
  60%  { transform: rotateY(2.5deg); }
  75%  { transform: rotateY(-1.25deg); }
  90%  { transform: rotateY(1.25deg); }
  100% { transform: rotateY(0deg); }
`
