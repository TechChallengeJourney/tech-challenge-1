'use client';
import { Box, styled } from '@mui/material';
import TextField from '@mui/material/TextField';

export interface InputProps {
  value?: string;
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
  const TextFieldColor = styled(TextField)({
      backgroundColor: '#FFF',
      borderRadius: '5px'
  });

  return (
    <Box className="bytebank-input">
      <TextFieldColor
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
    </Box>
  );
}
