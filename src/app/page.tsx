'use client';

import VStack from '~/components/Layout/VStack';

import { Button } from '~/components/Button';
import HStack from '~/components/Layout/HStack';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import HomeMainInfoSection from '~/sections/home/main/Info';
import HomeMainProfileSection from '~/sections/home/main/Profile';
import * as s from './page.css';

export default function Home() {
  const { isMobile, isMobileDesktop } = useBreakpoint();

  return (
    <VStack className={s.base}>
      <VStack
        className={s.container}
        fullWidth
        spacing={isMobile ? 50 : isMobileDesktop ? 60 : 80}>
        <HomeMainProfileSection />
        <HomeMainInfoSection />
      </VStack>
      <HStack className={s.button} fullWidth>
        <Button.Default>아래로 내려 포트폴리오 보기</Button.Default>
      </HStack>
    </VStack>
  );
}
