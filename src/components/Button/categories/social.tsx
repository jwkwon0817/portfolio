import * as s from '../styles/social.css';

import Link from 'next/link';
import Icon from '~/components/Icon';
import { IconName } from '~/components/Icon/icon-set';
import HStack from '~/components/Layout/HStack';
import Typo from '~/components/Typo';

interface SocialButtonProps {
  leadingIcon: IconName;
  children: string;
  href: string;
}

export default function SocialButton(props: SocialButtonProps) {
  const { leadingIcon, children, href } = props;

  return (
    <Link href={href}>
      <HStack spacing={6} padding={[8, 12]} className={s.base}>
        <Icon name={leadingIcon} size={24} />
        <Typo variant={'p'} size={18}>
          {children}
        </Typo>
      </HStack>
    </Link>
  );
}
