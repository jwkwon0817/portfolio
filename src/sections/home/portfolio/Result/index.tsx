'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Badge } from '~/components/Badge';
import { Tech } from '~/components/Badge/categories/tech';
import { Button } from '~/components/Button';
import HStack from '~/components/Layout/HStack';
import {
  StackAlign,
  StackDirection,
  StackJustify,
} from '~/components/Layout/shared';
import Stack from '~/components/Layout/Stack';
import VStack from '~/components/Layout/VStack';
import Typo from '~/components/Typo';
import { useBreakpoint } from '~/hooks/useBreakpoint';
import * as s from './style.css';

export interface PortfolioLink {
  type: 'github' | 'link' | 'npm' | 'instagram' | 'docker';
  url?: string;
  label?: string;
}

export interface Portfolio {
  name: string;
  description: string;
  skills: Tech[];
  thumbnail: string;
  links: PortfolioLink[];
}

interface HomePortfolioResultSectionProps {
  query?: string;
}

export default function HomePortfolioResultSection(
  props: HomePortfolioResultSectionProps,
) {
  const { query } = props;
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [filteredPortfolios, setFilteredPortfolios] = useState<Portfolio[]>([]);

  const { isMobile } = useBreakpoint();

  useEffect(() => {
    fetch('/data/_portfolio.json')
      .then((res) => res.json())
      .then((data) => {
        setPortfolios(data);
      });
  }, []);

  useEffect(() => {
    if (query || query === '') {
      setFilteredPortfolios(
        portfolios.filter((portfolio) => {
          return (
            portfolio.name.includes(query) ||
            portfolio.description.includes(query)
          );
        }),
      );
    } else {
      setFilteredPortfolios(portfolios);
    }
  }, [portfolios, query]);

  return (
    <VStack spacing={150} align={StackAlign.START} fullWidth={isMobile}>
      {filteredPortfolios.map((portfolio, index) => {
        return <PortfolioCard key={index} portfolio={portfolio} />;
      })}
    </VStack>
  );
}

interface PortfolioCardProps {
  portfolio: Portfolio;
}

function PortfolioCard(props: PortfolioCardProps) {
  const { portfolio } = props;

  const { isMobile, isMobileDesktop, isDesktop } = useBreakpoint();

  const getImageHeight = (width: number) => {
    return (width / 16) * 9;
  };

  const getDescriptionString = (description: string) => {
    return description.split('\n').map((line, index) => {
      return (
        <React.Fragment key={index}>
          {line}
          {index !== description.split('\n').length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <Stack
      direction={
        isDesktop ? StackDirection.HORIZONTAL : StackDirection.VERTICAL
      }
      fullWidth
      spacing={40}
      justify={StackJustify.START}
      align={isMobile ? StackAlign.CENTER : StackAlign.START}>
      <Image
        unoptimized
        src={portfolio.thumbnail}
        width={isDesktop ? 600 : 300}
        height={getImageHeight(isDesktop ? 600 : 300)}
        alt={portfolio.name}
        className={s.image}
      />
      <VStack
        spacing={isDesktop ? 18 : 12}
        align={StackAlign.START}
        fullWidth={isMobile}>
        <VStack
          fullWidth={isMobile}
          spacing={isMobile ? 6 : isMobileDesktop ? 8 : 12}
          align={StackAlign.START}>
          <Typo
            variant={'h2'}
            size={isMobile ? 20 : isMobileDesktop ? 24 : 36}
            weight={600}>
            {portfolio.name}
          </Typo>
          <Typo variant={'p'} size={isDesktop ? 18 : 14} color={'#787878'}>
            {getDescriptionString(portfolio.description)}
          </Typo>
        </VStack>
        <VStack
          spacing={isDesktop ? 32 : 16}
          align={StackAlign.START}
          fullWidth={isMobile}>
          <HStack
            spacing={isMobile ? 12 : 20}
            className={s.skills}
            align={StackAlign.START}
            justify={StackJustify.START}>
            {portfolio.skills.map((skill, index) => {
              return <Badge.Tech key={index} type={skill}></Badge.Tech>;
            })}
          </HStack>
          <HStack
            spacing={isMobile ? 8 : 16}
            className={s.links}
            align={StackAlign.START}
            justify={StackJustify.START}>
            {portfolio.links.map((link, index) => {
              return <Button.Link link={link} key={index} />;
            })}
          </HStack>
        </VStack>
      </VStack>
    </Stack>
  );
}
