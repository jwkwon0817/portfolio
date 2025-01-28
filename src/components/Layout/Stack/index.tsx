import cn from 'classnames';
import { ChildrenProps } from '~/lib/types/children-props';
import { Padding } from '~/lib/types/padding';
import { StackAlign, StackDirection, StackJustify } from '../shared';

import { getPaddingString } from '~/lib/utils/styles/padding';
import * as s from './style.css';

export interface StackProps {
  direction: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  spacing?: number;
  padding?: Padding;
  children?: ChildrenProps;
  fullWidth?: boolean;
  fullHeight?: boolean;
  className?: string;
  reverse?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  id?: string;
}

export default function Stack(props: StackProps) {
  const {
    direction,
    align = StackAlign.CENTER,
    justify = StackAlign.CENTER,
    spacing = 0,
    padding,
    children,
    fullWidth = false,
    fullHeight = false,
    className,
    style,
    reverse = false,
    onClick,
    id,
  } = props;

  const isHorizontal = direction === StackDirection.HORIZONTAL;

  const baseClassnames = cn(
    s.base,
    className,
    isHorizontal
      ? reverse
        ? s.horizontalReverse
        : s.horizontal
      : reverse
      ? s.verticalReverse
      : s.vertical,
    fullWidth && s.fullWidth,
    fullHeight && s.fullHeight,
  );

  const getStyles = () => {
    if (padding) {
      return {
        padding: getPaddingString(padding),
        gap: `${spacing}px`,
        justifyContent: justify,
        alignItems: align,
      };
    } else {
      return {
        gap: `${spacing}px`,
        justifyContent: justify,
        alignItems: align,
      };
    }
  };

  return (
    <div
      id={id}
      className={baseClassnames}
      style={{
        ...style,
        ...getStyles(),
      }}
      onClick={onClick}>
      {children}
    </div>
  );
}
