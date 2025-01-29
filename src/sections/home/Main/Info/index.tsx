'use client';

import React, { useEffect, useState } from 'react';
import * as s from './style.css';

import { Badge } from '@/components/Badge';
import { IconName } from '@/components/Icon/icon-set';
import HStack from '@/components/Layout/HStack';
import {
  StackAlign,
  StackDirection,
  StackJustify,
} from '@/components/Layout/shared';
import Stack from '@/components/Layout/Stack';
import VStack from '@/components/Layout/VStack';
import Typo from '@/components/Typo';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import cn from 'classnames';

const content = `안녕하세요. 저는 현재 선린인터넷고등학교에 재학중인 권지원입니다.
  현재 저는 웹과 앱 개발에 관심이 있는 학생으로, 이를 위해 노력하고 있습니다.
  웹과 백엔드에서 주로 사용하는 언어는 TypeScript, Python이며, 
  React, Next.js, Nest.js, FastAPI 등의 프레임워크를 사용하고 있습니다.
  앱 개발에서는 SwiftUI를 사용하여 iOS 앱을 개발합니다.
  현재는 선린인터넷고등학교 전공동아리인 TAPIE에서 부장으로 활동하고 있습니다.
  이 외에도 다양한 언어와 프레임워크를 배우고 있으며,
  새로운 기술을 배우는 것에 대한 열정이 있습니다.
`;

interface Award {
  contestName: string;
  grade: number;
  gradeLabel: string;
}

export default function HomeMainInfoSection() {
  const { isMobile } = useBreakpoint();

  const getContentString = () => {
    const string = content.split('\n').map((line, index) => {
      return (
        <React.Fragment key={index}>
          {line}
          {index !== content.split('\n').length - 1 && <br />}
        </React.Fragment>
      );
    });

    return string;
  };

  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    fetch('/data/_awards.json')
      .then((res) => res.json())
      .then((data) => {
        setAwards(data);
      });
  }, []);

  const getAwardColor = (grade: number) => {
    const colorList = ['#FF6262', '#64A6D5', '#D59764'];

    return colorList[grade - 1];
  };

  return (
    <Stack
      direction={isMobile ? StackDirection.VERTICAL : StackDirection.HORIZONTAL}
      fullWidth
      justify={StackJustify.BETWEEN}
      spacing={isMobile ? 24 : 0}>
      <HStack padding={24} className={s.content}>
        {getContentString()}
      </HStack>
      <VStack
        spacing={36}
        className={cn(!isMobile && s.info)}
        fullWidth={isMobile}>
        <InfoContainer
          title={'학력'}
          data={[
            {
              name: '상인초등학교',
              badgeColor: '#919191',
              badgeIcon: IconName.SCHOOL,
              badgeLabel: '졸업',
            },
            {
              name: '석천중학교',
              badgeColor: '#919191',
              badgeIcon: IconName.SCHOOL,
              badgeLabel: '졸업',
            },
            {
              name: '선린인터넷고등학교',
              badgeColor: '#42b7f7',
              badgeIcon: IconName.PENCIL,
              badgeLabel: '재학',
            },
          ]}
        />
        <InfoContainer
          title={'수상 실적'}
          data={awards.map((award) => ({
            name: award.contestName,
            badgeColor: getAwardColor(award.grade),
            badgeIcon: IconName.TROPHY,
            badgeLabel: award.gradeLabel,
          }))}
        />
      </VStack>
    </Stack>
  );
}

interface InfoContainerProps {
  title: string;
  data: {
    name: string;
    badgeColor: string;
    badgeIcon: IconName;
    badgeLabel: string;
  }[];
}

function InfoContainer(props: InfoContainerProps) {
  const { title, data } = props;

  const { isMobile } = useBreakpoint();

  return (
    <VStack spacing={8} align={StackAlign.START} fullWidth>
      <Typo variant={'h3'} size={isMobile ? 18 : 24}>
        {title}
      </Typo>
      <VStack
        padding={[16, 0]}
        spacing={16}
        fullWidth
        className={s.infoContainer}>
        {data.map((item, index) => (
          <HStack fullWidth justify={StackJustify.BETWEEN} key={index}>
            <Typo variant={'h4'} size={isMobile ? 14 : 18}>
              {item.name}
            </Typo>
            <Badge.Default
              color={item.badgeColor}
              icon={item.badgeIcon}
              label={item.badgeLabel}
            />
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
}
