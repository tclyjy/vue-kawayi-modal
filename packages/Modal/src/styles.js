import styled from 'vue-styled-components'
import { pcLayout, spLayout } from './layout'
import { fadein, bound, rotate } from './keyframes'

const color1 = '#fbf4f1'
const color2 = '#5d3523'

export const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, .8);
  display: none;
  opacity: 0;
  &[data-show=true] {
    display: block;
    animation: ${fadein} 2s ease 0s forwards;
  }
`
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 600px;
  transform: translateY(-100%);

  &[data-show=true] {
    animation: ${bound} 0.9s ease-out 0s forwards;
  }
`

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &[data-show=true] {
    animation: ${rotate} 3s ease-out 0s forwards;
  }
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const LineBack = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  ${pcLayout(`
    width: 600px;
    height: calc(50% - 180px);
  `)}
  ${spLayout(`
    width: 320px;
    height: calc(50% - 130px);
  `)}
  div {
    position: absolute;
    bottom: 0;
    width: 2px;
    height: 150%;
    background-color: ${color2};
  }
  div:nth-child(1) {
    left: 55px;
  }
  div:nth-child(2) {
    right: 55px;
  }
`

export const LineFront = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 600px;
  height: calc(50% - 130px);
  transform: translateX(-50%);
  ${pcLayout(`
    width: 600px;
    height: calc(50% - 180px);
  `)}
  ${spLayout(`
    width: 320px;
    height: calc(50% - 130px);
  `)}
  div {
    position: absolute;
    width: 2px;
    height: 150%;
    background-color: ${color2};
    ${pcLayout(`
      bottom: -25px;
    `)}
    ${spLayout(`
      bottom: -20px;
    `)}
  }
  div::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -4.5px;
    left: -4.5px;
    width: 10px;
    height: 10px;
    background-color: ${color2};
    border-radius: 50%;
  }
  div:nth-child(1) {
    left: 25px;
  }
  div:nth-child(2) {
    right: 25px;
  }
`

export const Panel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${pcLayout(`
    width: 600px;
    box-shadow: 0 0 20px rgba(0,0,0,.2);
    border-radius: 12px;
  `)}
  ${spLayout(`
    width: 320px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    border-radius: 10px;
  `)}
`

export const Header = styled.div`
  width: 100%;
  background-color: ${color1};
  border-bottom: 1px solid ${color2};
  box-sizing: border-box;
  ${pcLayout(`
    height: 50px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  `)}
  ${spLayout(`
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `)}
`

export const Title = styled.div`
  color: ${color2};
  text-align: center;
  letter-spacing: 0.1em;
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${pcLayout(`
    font-size: 20px;
    line-height: 50px;
    width: 85%;
  `)}
  ${spLayout(`
    font-size: 16px;
    line-height: 40px;
    width: 80%;
  `)}
`
export const Body = styled.div`
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: 10px 0px;
  overflow-y: auto;
  ${pcLayout(`
    height: 260px;
  `)}
  ${spLayout(`
    height: 180px;
  `)}
`

export const Footer = styled.div`
  position: relative;
  width: 100%;
  background-color: ${color1};
  border-top: 1px solid ${color2};
  box-sizing: border-box;
  ${pcLayout(`
    height: 50px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  `)}
  ${spLayout(`
    height: 40px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;  
  `)}
`

export const CLoseBtn = styled.div`
  appearance: none;
  border: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.2em;
  background-color: #c2617e;
  transform: translate(-50%, 50%);
  cursor: pointer;
  overflow: hidden;
  ${pcLayout(`
    width: 200px;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    box-shadow: 0 0 10px #c2617e;
    border-radius: 30px;
  `)}
  ${spLayout(`
    width: 140px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    box-shadow: 0 0 5px #c2617e;
    border-radius: 20px; 
  `)}
`
