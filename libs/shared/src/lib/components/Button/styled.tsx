import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { BORDER, COLORS, FONT_SIZE } from './../../styles/variables';

interface CustomButtonProps extends ButtonProps {
  orange?: 'true';
  green?: 'true';
  black?: 'true';
  neutral?: 'true';
  outlined?: 'true';
}

const DefaultColors = (
  orange?: string,
  green?: string,
  black?: string,
  neutral?: string
): string => {
  if (orange) return COLORS.ORANGE;
  if (green) return COLORS.GREEN;
  if (black) return COLORS.BLACK;
  if (neutral) return 'transparent';
  return 'transparent';
};

export const CustomButton = styled(Button)<CustomButtonProps>`
  background-color: ${({ orange, green, black, neutral, outlined }) => {
    if (outlined) return 'transparent';
    return DefaultColors(orange, green, black, neutral);
  }};

  border: ${({ outlined, orange, green, black, neutral }) =>
    outlined
      ? `2px solid ${DefaultColors(orange, green, black, neutral)}`
      : 'none'};
  border-radius: ${BORDER.RADIUS};
  color: ${({ neutral, outlined, orange, green, black }) => {
    if (neutral) return COLORS.TEXT;
    if (outlined) return DefaultColors(orange, green, black, neutral);
    return '#fff';
  }};
  box-shadow: none;
  padding: 10px 40px;
  font-size: ${FONT_SIZE.text};
  text-transform: none;
`;
