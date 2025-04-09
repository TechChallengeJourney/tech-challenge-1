import styles from './style.scss';

export interface BytebankIllustrationProps {
  name: string;
  size?: 'sm' | 'md' |'lg';
}
export function BytebankIllustration({name, size}: BytebankIllustrationProps) {
  const path: string = name ? `/images/${name}.png` : '';
  return (
    <img src={path} />
  );
}