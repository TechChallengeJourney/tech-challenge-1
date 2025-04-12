'use client';
import TextField from '@mui/material/TextField';

export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
}

export default function BytebankInput({
  value,
  onChange,
  label,
  type = 'text',
  placeholder,
  error = false,
  helperText = '',
}: InputProps) {
  return (
    <div className="bytebank-input">
      <TextField
        value={value}
        onChange={onChange}
        label={label}
        type={type}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </div>
  );
}
