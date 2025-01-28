import { IconName } from '@/components/Icon/icon-set';
import { hexToRgba } from '@/lib/utils/styles/hexToRgba';
import Icon from '../../Icon';
import HStack from '../../Layout/HStack';
import Typo from '../../Typo';
import * as s from '../styles/default.css';

interface DefaultBadgeProps {
  color: string;
  icon: IconName;
  label: string;
}

export default function DefaultBadge(props: DefaultBadgeProps) {
  const { color, icon, label } = props;

  return (
    <HStack
      spacing={6}
      padding={[4, 6]}
      style={{
        background: hexToRgba(color, 0.15),
      }}
      className={s.base}>
      <Icon name={icon} size={16} color={color} />
      <Typo variant='p' size={12} color={color} disableUserSelect>
        {label}
      </Typo>
    </HStack>
  );
}
