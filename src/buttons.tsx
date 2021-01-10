import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
// import { ThemeStyle } from '@cx-styled/react-common';

export const CxStyButton = () => {
    return <Button>This is a button!!!</Button>;
}

export const CxStyBtnPrimary = styled(Button)`
    variant: contained;
    color: primary;
`;

// export const CxStyButton = styled.button`
//     text-transform: none;
//     font-weight: 700;
//     background: blue;
//     color: black;

//     &:disabled {
//         color: grey; // todo: color-calc
//     }
// `;

// export const CxStyIconButton = styled(IconButton)`
//     color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
// `;

// export const CxStyActionButton = styled(CxStyButton).attrs(() => ({
//     variant: 'contained',
// }))`
//     background-color: ${({ theme }: { theme: ThemeStyle; color: string }) => theme.color.secondary};
//     color: #ffffff;
//     &:hover {
//         background-color: ${({ theme }: { theme: ThemeStyle }) => theme.color.secondary};
//     }
// `;

// export const CxStyCancelButton = styled(({ ...props }) => (
//     <CxStyButton variant="outlined" {...props} />
// ))`
//     color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
//     border-color: ${({ theme }: { theme: ThemeStyle }) => theme.color.reversePrimary};
// `;

// export const CxStyInteractionButton = styled(({ ...props }) => (
//     <CxStyButton variant="outlined" {...props} />
// ))`
//     background-color: transparent;
//     color: ${({ theme, interacted }: { theme: ThemeStyle; interacted: boolean }) =>
//         interacted ? theme.color.secondary : theme.color.reversePrimary};
//     border-color: ${({ theme, hasBorder }: { theme: ThemeStyle; hasBorder: boolean }) =>
//         hasBorder ? theme.color.secondary : 'transparent'};
// `;
