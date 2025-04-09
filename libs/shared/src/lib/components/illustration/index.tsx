import styles from './style.scss';

export interface BytebankIllustrationProps {
  name: string;
  size?: 'sm' | 'md' |'lg' | 'auto';
}
enum BytebankIllustrationSize {
  'sm' = '60px',
  'md' = '160px',
  'lg' = '220px',
  'auto' = 'auto'
}
export function BytebankIllustration({name, size = 'auto'}: BytebankIllustrationProps) {
  const path: string = name ? `/images/${name}.png` : '';
  return (
    <img src={path} width={BytebankIllustrationSize[size]}/>
  );
}