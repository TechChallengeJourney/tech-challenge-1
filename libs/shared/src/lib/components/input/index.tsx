'use client';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

export interface InputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type?: string;
  placeholder?: string;
  error?: boolean;
  helperText?: string;
  autoComplete?: string;
}

export default function BytebankInput({
  value,
  onChange,
  label,
  type = 'text',
  placeholder,
  error = false,
  helperText = '',
  autoComplete = ''
}: InputProps) {
  return (
    <Box className="bytebank-input">
      <TextField
        sx={{'backgroundColor': '#FFF', 'borderRadius': '5px'}}
        value={value}
        onChange={onChange}
        label={label}
        type={type}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        autoComplete={autoComplete}
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </Box>
  );
}
