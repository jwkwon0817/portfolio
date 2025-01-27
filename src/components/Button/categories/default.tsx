import Icon from '~/components/Icon';
import { IconName } from '~/components/Icon/icon-set';
import HStack from '~/components/Layout/HStack';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import * as s from '../styles/default.css';

interface DefaultButtonProps {
  children: string;
  onClick?: () => void;
}

export default function DefaultButton(props: DefaultButtonProps) {
  const { onClick, children } = props;

  const { isMobile } = useBreakpoint();

  return (
    <HStack
      onClick={onClick}
      classNames={s.base}
      padding={isMobile ? 8 : 12}
      spacing={8}>
      <Icon name={IconName.ARROW_DOWNWARD} size={isMobile ? 16 : 20} />
      <p className={s.text}>{children}</p>
    </HStack>
  );
}
