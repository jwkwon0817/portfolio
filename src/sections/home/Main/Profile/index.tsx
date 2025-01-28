'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '~/components/Button';
import { IconName } from '~/components/Icon/icon-set';
import {
  StackAlign,
  StackDirection,
  StackJustify,
} from '~/components/Layout/shared';
import Stack from '~/components/Layout/Stack';
import VStack from '~/components/Layout/VStack';
import Typo from '~/components/Typo';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import { ChildrenProps } from '~/lib/types/children-props';
import { useDeeplink } from '~/lib/utils/link';

export default function HomeMainProfileSection() {
  const { isMobile, isMobileDesktop } = useBreakpoint();

  const { getInstagramLink } = useDeeplink();

  return (
    <Stack
      direction={isMobile ? StackDirection.VERTICAL : StackDirection.HORIZONTAL}
      reverse={isMobile ? true : false}
      fullWidth
      justify={StackJustify.BETWEEN}
      align={isMobile ? StackAlign.START : StackAlign.CENTER}
      spacing={isMobile ? 24 : 0}>
      <VStack spacing={32} align={StackAlign.START}>
        <VStack spacing={4} align={StackAlign.START}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <Typo
              variant={'h1'}
              size={isMobile ? 24 : isMobileDesktop ? 48 : 64}
              weight={700}
              noWrap>
              새로운 기술을 배워나가는
            </Typo>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}>
            <Typo
              variant={'h1'}
              size={isMobile ? 24 : isMobileDesktop ? 48 : 64}
              weight={400}
              noWrap>
              학생 개발자, 권지원입니다.
            </Typo>
          </motion.div>
        </VStack>
        <SocialButtonGroup>
          <Stack
            direction={
              isMobile ? StackDirection.VERTICAL : StackDirection.HORIZONTAL
            }
            align={isMobile ? StackAlign.START : StackAlign.CENTER}
            spacing={12}>
            <SocialButtonContainer>
              <Button.Social
                leadingIcon={IconName.MAIL}
                href={'mailto:jeewon.kwon.0817@gmail.com'}>
                jeewon.kwon.0817@gmail.com
              </Button.Social>
            </SocialButtonContainer>
            <SocialButtonContainer>
              <Button.Social
                leadingIcon={IconName.GITHUB}
                href={'https://github.com/jwkwon0817'}>
                jwkwon0817
              </Button.Social>
            </SocialButtonContainer>
            <SocialButtonContainer>
              <Button.Social
                leadingIcon={IconName.VELOG}
                href={'https://velog.io/@jwkwon0817'}>
                jwkwon0817
              </Button.Social>
            </SocialButtonContainer>
          </Stack>
        </SocialButtonGroup>
      </VStack>
      <Stack
        fullWidth={isMobile}
        direction={
          isMobile ? StackDirection.HORIZONTAL : StackDirection.VERTICAL
        }
        justify={isMobile ? StackJustify.BETWEEN : StackJustify.CENTER}
        spacing={24}>
        <VStack spacing={isMobile ? 8 : 24}>
          <Image
            src={'/assets/profile.png'}
            width={isMobile ? 80 : isMobileDesktop ? 180 : 220}
            height={isMobile ? 80 : isMobileDesktop ? 180 : 220}
            alt={'Profile Image'}
          />
          <Typo variant={'h4'} size={18}>
            Software, 119th
          </Typo>
        </VStack>
        <Stack
          direction={
            isMobile ? StackDirection.VERTICAL : StackDirection.HORIZONTAL
          }
          spacing={12}
          align={StackAlign.END}>
          <Button.Social copyable leadingIcon={IconName.PHONE}>
            +82 10 2310 4403
          </Button.Social>
          <Button.Social
            href={getInstagramLink('jeewon__k')}
            leadingIcon={IconName.INSTAGRAM}>
            jeewon__k
          </Button.Social>
        </Stack>
      </Stack>
    </Stack>
  );
}

interface SocialButtonProps {
  children: ChildrenProps;
}

function SocialButtonGroup(props: SocialButtonProps) {
  const { children } = props;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      animate={'visible'}
      initial={'hidden'}>
      {children}
    </motion.div>
  );
}

interface SocialButtonContainerProps {
  children: ChildrenProps;
}

function SocialButtonContainer(props: SocialButtonContainerProps) {
  const { children } = props;

  return (
    <motion.div
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: 'easeOut',
          },
        },
      }}>
      {children}
    </motion.div>
  );
}
