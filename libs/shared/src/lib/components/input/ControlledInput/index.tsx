import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../index';

interface ControlledInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export const BytebankInputController: React.FC<ControlledInputProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          label={label}
          type={type}
          placeholder={placeholder}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
