'use client';

import cn from 'classnames';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import Icon from '~/components/Icon';
import { IconName } from '~/components/Icon/icon-set';
import HStack from '~/components/Layout/HStack';
import Typo from '~/components/Typo';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import * as s from '../styles/social.css';

interface SocialButtonProps {
  leadingIcon: IconName;
  children: string;
  href?: string;
  copyable?: boolean;
}

export default function SocialButton({
  leadingIcon,
  children,
  href,
  copyable,
}: SocialButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const { isMobile, isMobileDesktop } = useBreakpoint();

  const content = (
    <HStack
      spacing={6}
      padding={isMobile ? [4, 6] : isMobileDesktop ? [6, 8] : [8, 12]}
      className={cn(s.base, leadingIcon === IconName.INSTAGRAM && s.instagram)}
      onClick={() => {
        if (copyable) {
          navigator.clipboard.writeText(children);
          setIsCopied(true);
          setTimeout(() => {
            setIsCopied(false);
          }, 3000);
        }
      }}>
      <Icon
        name={leadingIcon}
        size={isMobile ? 16 : isMobileDesktop ? 20 : 24}
      />
      <Typo
        variant='p'
        size={isMobile ? 14 : isMobileDesktop ? 16 : 18}
        disableUserSelect>
        {children}
      </Typo>
    </HStack>
  );

  return (
    <HStack className={s.container}>
      {href ? <Link href={href}>{content}</Link> : content}
      <AnimatePresence>
        {copyable && isCopied && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              width: 'fit-content',
              transform: 'translateX(-50%)',
            }}>
            <HStack
              spacing={4}
              className={s.tooltip}
              padding={6}
              onClick={() => setIsCopied(false)}>
              <Icon name={IconName.COPY} size={16} color={'#fff'} />
              <Typo variant='span' size={14} disableUserSelect color={'#fff'}>
                복사되었습니다.
              </Typo>
            </HStack>
          </motion.div>
        )}
      </AnimatePresence>
    </HStack>
  );
}
