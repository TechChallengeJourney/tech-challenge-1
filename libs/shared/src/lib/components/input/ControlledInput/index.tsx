import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../index';

interface ControlledInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

const BytebankInput: React.FC<ControlledInputProps> = ({
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
          value={field.value}
          onChange={field.onChange}
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

export default BytebankInput;
