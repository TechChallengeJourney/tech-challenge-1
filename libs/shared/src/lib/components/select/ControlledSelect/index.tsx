import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import SelectComponent, { SelectOption } from '../index';

interface ControlledSelectProps {
  name: string;
  label: string;
  options: SelectOption[];
}

export const BytebankSelect: React.FC<ControlledSelectProps> = ({
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
        <SelectComponent
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
