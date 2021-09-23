import React from 'react';

// export interface HandleInputType
//     extends React.KeyboardEvent<HTMLInputElement> & HTMLInputElement

export type HTMLElementEvent<T extends HTMLElement> = React.ChangeEvent<T> &
    Event & {
        target?: T;
    };

export type InputFields = {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    value?: string | number;
};

export type FormControlTypes = { status: { error: boolean; success: boolean } };

export interface FormTypeProps {
    handleChange?: (e: HTMLElementEvent<HTMLInputElement>) => void;
    inputData: any;
    handleSubmit: () => void;
    inputFields: Array<InputFields>;
    status: any;
    loading: boolean;
}

export interface FormStateProps {
    storeNews: any;
    handleCreateNews: any;
}

export type SpinnerProps = { isButton?: boolean };

export type InputItemType = FormControlTypes;
