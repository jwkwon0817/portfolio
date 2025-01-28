import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Badge } from '~/components/Badge';
import { Tech } from '~/components/Badge/categories/tech';
import HStack from '~/components/Layout/HStack';
import { StackAlign, StackJustify } from '~/components/Layout/shared';
import VStack from '~/components/Layout/VStack';
import Typo from '~/components/Typo';
import * as s from './style.css';

interface Portfolio {
  name: string;
  description: string;
  skills: Tech[];
  thumbnail: string;
  links: {
    type: string;
    url?: string;
    label?: string;
  }[];
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
          return portfolio.name.includes(query);
        }),
      );
    } else {
      setFilteredPortfolios(portfolios);
    }
  }, [portfolios, query]);

  return (
    <VStack spacing={150} align={StackAlign.START} id={'portfolio'}>
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
    <HStack
      fullWidth
      spacing={40}
      justify={StackJustify.START}
      align={StackAlign.START}>
      <Image
        src={portfolio.thumbnail}
        width={600}
        height={getImageHeight(600)}
        alt={portfolio.name}
        className={s.image}
      />
      <VStack spacing={18} align={StackAlign.START}>
        <VStack spacing={12} align={StackAlign.START}>
          <Typo variant={'h2'} size={36} weight={600}>
            {portfolio.name}
          </Typo>
          <Typo variant={'p'} size={18} color={'#787878'}>
            {getDescriptionString(portfolio.description)}
          </Typo>
        </VStack>
        <VStack spacing={32} align={StackAlign.START}>
          <HStack spacing={20}>
            {portfolio.skills.map((skill, index) => {
              return <Badge.Tech key={index} type={skill}></Badge.Tech>;
            })}
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
}
