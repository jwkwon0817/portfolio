'use client';

import VStack from '@/components/Layout/VStack';

import { Button } from '@/components/Button';
import HStack from '@/components/Layout/HStack';
import { StackAlign, StackJustify } from '@/components/Layout/shared';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import HomeMainInfoSection from '@/sections/home/Main/Info';
import HomeMainProfileSection from '@/sections/home/Main/Profile';
import HomePortfolioResultSection from '@/sections/home/portfolio/Result';
import HomePortfolioSearchSection from '@/sections/home/portfolio/Search';
import { useCallback, useState } from 'react';
import * as s from './page.css';

export default function Home() {
  const { isMobile, isMobileDesktop, isDesktop } = useBreakpoint();

  const scrollToPortfolio = useCallback(() => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

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
      <VStack
        fullWidth={isDesktop}
        fullHeight
        className={s.portfolioWrapper}
        spacing={120}
        align={isDesktop ? StackAlign.CENTER : StackAlign.START}
        id={'portfolio'}>
        <HomePortfolioSearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <HomePortfolioResultSection query={searchValue} />
      </VStack>
    </VStack>
  );
}
