import React from 'react';
import { render } from '@testing-library/react';
import { BytebankInput } from './ControlledInput';
import { useForm, FormProvider } from 'react-hook-form';

const Wrapper = ({ children }) => {
    const methods = useForm();

    return <FormProvider {...methods}>{children}</FormProvider>;
};

describe('Input', () => {
    it('render bytebankInput component correctly', () => {
        const { baseElement } = render(<Wrapper><BytebankInput name="nome" label="nome"  /></Wrapper>);
        expect(baseElement).toBeDefined();
    });
});