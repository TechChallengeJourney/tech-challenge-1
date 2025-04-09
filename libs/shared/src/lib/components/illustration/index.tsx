export interface BytebankIllustrationProps {
  name: string;
  variant?: 'sm' | 'md' |'lg' | 'auto';
}
enum BytebankIllustrationVariant {
  'sm' = '60px',
  'md' = '160px',
  'lg' = '220px',
  'auto' = 'auto'
}
export function BytebankIllustration({name, variant = 'auto'}: BytebankIllustrationProps) {
  const path: string = name ? `/images/${name}.png` : '';
  return (
    <img src={path} width={BytebankIllustrationVariant[variant]}/>
  );
}