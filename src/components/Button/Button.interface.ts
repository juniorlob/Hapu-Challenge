import React from 'react';
import { LinkProps } from 'react-router-dom';

export type ButtonProps = {
    size?: 'sm' | 'md' | 'lg';
    secondary?: boolean;
    type?: 'button' | 'reset' | 'submit';
    btnColor?: 'white' | 'secondary' | 'colorGrey24';
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type LinkPropsTypes = {
    link?: true;
    to?: LinkProps | string;
};

export type LinksProps = Omit<ButtonProps, 'onClick' & 'type'> &
    Omit<LinkPropsTypes, 'link'>;

export type ComponentButtonProps = LinkPropsTypes & ButtonProps;
