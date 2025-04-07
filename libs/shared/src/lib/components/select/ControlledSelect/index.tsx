import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import BytebankSelect, { SelectOption } from '../index';

interface ControlledSelectProps {
  name: string;
  label: string;
  options: SelectOption[];
}

export const BytebankSelectController: React.FC<ControlledSelectProps> = ({
  name,
  label,
  options,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <BytebankSelect
          value={field.value ?? ''}
          onChange={(value) => field.onChange(value)}
          label={label}
          options={options}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
