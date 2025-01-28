import cn from 'classnames';
import * as s from './style.css';

interface TypoProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: number;
  color?: string;
  weight?: number;
  children: string;
  disableUserSelect?: boolean;
  noWrap?: boolean;
  className?: string;
}

export default function Typo(props: TypoProps) {
  const {
    variant = 'p',
    size = 16,
    color = '#000',
    weight = 400,
    children,
    className,
    disableUserSelect = false,
    noWrap = false,
  } = props;

  const style = {
    fontSize: `${size}px`,
    color,
    fontWeight: weight,
  };

  const Tag = variant;

  return (
    <Tag
      className={cn(
        className,
        disableUserSelect && s.disableUserSelect,
        noWrap && s.noWrap,
      )}
      style={style}>
      {children}
    </Tag>
  );
}
