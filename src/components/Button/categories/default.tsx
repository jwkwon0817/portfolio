'use client';

import cn from 'classnames';
import Icon from '~/components/Icon';
import { IconName } from '~/components/Icon/icon-set';
import HStack from '~/components/Layout/HStack';
import Typo from '~/components/Typo';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import * as s from '../styles/default.css';

interface DefaultButtonProps {
  className?: string;
  children: string;
  onClick?: () => void;
}

export default function DefaultButton(props: DefaultButtonProps) {
  const { onClick, children, className } = props;

  const { isMobile } = useBreakpoint();

  return (
    <HStack
      onClick={onClick}
      className={cn(s.base, className)}
      padding={isMobile ? 8 : 12}
      spacing={8}>
      <Icon name={IconName.ARROW_DOWNWARD} size={isMobile ? 16 : 20} />
      <Typo variant={'span'} size={isMobile ? 12 : 16} disableUserSelect>
        {children}
      </Typo>
    </HStack>
  );
}
