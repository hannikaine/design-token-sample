import React from 'react';

import styled from 'styled-components';
import Tokens from '@designtokens/c20d9a4b-9ccd-51eb-b0d6-8723ebefffd9';

type BgColor = 'light' | 'dark';

type BoxProps = {
  background: BgColor;
}

const StyledBox = styled.div<BoxProps>`
  background: ${props => props.background === 'dark' ? Tokens.colorBackgroundDarkPrimary.hexValue : Tokens.colorBackgroundLightPrimary.hexValue};
  width: 100px;
  height: 100px;
  border: 1px solid ${Tokens.colorBorderPrimary.hexValue};
  color: ${props => props.background === 'dark' ? Tokens.colorTextLightPrimary.hexValue : Tokens.colorTextDarkPrimary.hexValue};
`;


const Box = (props: BoxProps) => {
  return (
    <StyledBox background={props.background}>{props.background}</StyledBox>
  )
}



export default Box;