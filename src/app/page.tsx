'use client';

import VStack from '~/components/Layout/VStack';

import { useCallback } from 'react';
import { Button } from '~/components/Button';
import HStack from '~/components/Layout/HStack';
import { StackJustify } from '~/components/Layout/shared';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import HomeMainInfoSection from '~/sections/home/main/Info';
import HomeMainProfileSection from '~/sections/home/main/Profile';
import HomePortfolioResultSection from '~/sections/home/portfolio/Result';
import * as s from './page.css';

export default function Home() {
  const { isMobile, isMobileDesktop } = useBreakpoint();

  const scrollToPortfolio = useCallback(() => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <VStack className={s.base} fullWidth justify={StackJustify.START}>
      <VStack fullWidth spacing={120} className={s.wrapper}>
        <VStack
          className={s.container}
          fullWidth
          spacing={isMobile ? 50 : isMobileDesktop ? 60 : 80}>
          <HomeMainProfileSection />
          <HomeMainInfoSection />
        </VStack>
        <HStack fullWidth>
          <Button.Default onClick={scrollToPortfolio}>
            아래로 내려 포트폴리오 보기
          </Button.Default>
        </HStack>
      </VStack>
      <VStack fullWidth fullHeight>
        <HomePortfolioResultSection query={undefined} />
      </VStack>
    </VStack>
  );
}
