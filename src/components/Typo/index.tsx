interface TypoProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  size?: number;
  color?: string;
  weight?: number;
  children: string;
}

export default function Typo(props: TypoProps) {
  const {
    variant = 'p',
    size = 16,
    color = '#000',
    weight = 400,
    children,
  } = props;

  const style = {
    fontSize: `${size}px`,
    color,
    fontWeight: weight,
  };

  switch (variant) {
    case 'h1':
      return <h1 style={style}>{children}</h1>;
    case 'h2':
      return <h2 style={style}>{children}</h2>;
    case 'h3':
      return <h3 style={style}>{children}</h3>;
    case 'h4':
      return <h4 style={style}>{children}</h4>;
    case 'h5':
      return <h5 style={style}>{children}</h5>;
    case 'h6':
      return <h6 style={style}>{children}</h6>;
    case 'p':
      return <p style={style}>{children}</p>;
    case 'span':
      return <span style={style}>{children}</span>;
    default:
      return <p style={style}>{children}</p>;
  }
}
