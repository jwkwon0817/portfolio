import * as motion from 'motion/react-client';
import Image from 'next/image';
import { Button } from '~/components/Button';
import { IconName } from '~/components/Icon/icon-set';
import HStack from '~/components/Layout/HStack';
import { StackAlign } from '~/components/Layout/shared';
import VStack from '~/components/Layout/VStack';
import Typo from '~/components/Typo';
import { ChildrenProps } from '~/lib/types/children-props';

export default function HomeMainProfileSection() {
  return (
    <HStack fullWidth spacing={320}>
      <VStack spacing={32} align={StackAlign.START}>
        <VStack spacing={4} align={StackAlign.START}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <Typo variant={'h1'} size={64} weight={700}>
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
            <Typo variant={'h1'} size={64} weight={400}>
              학생 개발자, 권지원입니다.
            </Typo>
          </motion.div>
        </VStack>
        <SocialButtonGroup>
          <HStack spacing={12}>
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
          </HStack>
        </SocialButtonGroup>
      </VStack>
      <VStack spacing={24}>
        <VStack spacing={24}>
          <Image
            src={'/assets/profile.png'}
            width={220}
            height={220}
            alt={'Profile Image'}
          />
          <Typo variant={'h4'} size={18}>
            Software, 119th
          </Typo>
        </VStack>
        <HStack spacing={12}>
          <Button.Social copyable leadingIcon={IconName.PHONE}>
            +82 10 2310 4403
          </Button.Social>
          <Button.Social
            href={'https://instagram.com/jeewon__k'}
            leadingIcon={IconName.INSTAGRAM}>
            jeewon__k
          </Button.Social>
        </HStack>
      </VStack>
    </HStack>
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
            staggerChildren: 0.1,
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
        hidden: { y: 10, opacity: 0 },
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
