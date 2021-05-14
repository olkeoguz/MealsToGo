import React from 'react';
import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: 'margin-top',
  left: 'margin-left',
  right: 'margin-right',
  bottom: 'margin-bottom',
};

const getVariant = (position, size, theme) => {
  // left - large
  const sizeIndex = sizeVariant[size]; //3
  const property = positionVariant[position]; //marginLeft,marginTop
  const value = theme.space[sizeIndex]; //16px

  //   console.log(property,value);
  return `${property} : ${value}`; // 'marginLeft' : '2px'
};

const SpacerView = styled.View`
    ${(props)=> props.variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
