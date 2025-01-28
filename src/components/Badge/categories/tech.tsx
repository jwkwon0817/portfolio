import Icon from '~/components/Icon';
import { IconName } from '~/components/Icon/icon-set';
import HStack from '~/components/Layout/HStack';
import { hexToRgba } from '~/lib/utils/styles/hexToRgba';

import Typo from '~/components/Typo';
import * as s from '../styles//tech.css';

export type Tech =
  | 'TypeScript'
  | 'NestJS'
  | 'PostgreSQL'
  | 'SwiftUI'
  | 'FastAPI'
  | 'Motion'
  | 'Vanilla Extract'
  | 'NextJS'
  | 'Python'
  | 'Storybook'
  | 'Rollup'
  | 'React'
  | 'Bun'
  | 'Embedded'
  | 'Kotlin'
  | 'Spring Boot'
  | 'Docker';

const getTechBackgroundColor = (tech: Tech) => {
  const colorList = {
    NestJS: '#DF234F',
    TypeScript: '#007ACC',
    PostgreSQL: '#336791',
    SwiftUI: '#F05138',
    FastAPI: '#049688',
    Motion: '#FFF312',
    'Vanilla Extract': '#F77CA5',
    NextJS: '#000000',
    Python: '#306998',
    Storybook: '#FF4785',
    Rollup: '#FF3333',
    React: '#61DAFB',
    Bun: '#FBF0DF',
    Embedded: '#000000',
    Kotlin: '#7F52FF',
    'Spring Boot': '#77BC1F',
    Docker: '#019BC6',
  };

  return colorList[tech];
};

const getTechColor = (tech: Tech) => {
  const colorList = {
    NestJS: '#DF234F',
    TypeScript: '#007ACC',
    PostgreSQL: '#336791',
    SwiftUI: '#F05138',
    FastAPI: '#049688',
    Motion: '#000000',
    'Vanilla Extract': '#70CFDA',
    NextJS: '#000000',
    Python: '#306998',
    Storybook: '#FF4785',
    Rollup: '#FF3333',
    React: '#61DAFB',
    Bun: '#000000',
    Embedded: '#000000',
    Kotlin: '#7F52FF',
    'Spring Boot': '#77BC1F',
    Docker: '#019BC6',
  };

  return colorList[tech];
};

const getTechOpacity = (tech: Tech) => {
  if (tech === 'Motion' || tech === 'Bun') {
    return 0.3;
  } else if (tech === 'React') {
    return 0.25;
  } else {
    return 0.15;
  }
};

const getTechIcon = (tech: Tech) => {
  const iconList = {
    NestJS: IconName.NESTJS,
    TypeScript: IconName.TYPESCRIPT,
    PostgreSQL: IconName.POSTGRESQL,
    SwiftUI: IconName.SWIFTUI,
    FastAPI: IconName.FASTAPI,
    Motion: IconName.MOTION,
    'Vanilla Extract': IconName.VANILLA_EXTRACT,
    NextJS: IconName.NEXTJS,
    Python: IconName.PYTHON,
    Storybook: IconName.STORYBOOK,
    Rollup: IconName.ROLLUP,
    React: IconName.REACT,
    Bun: IconName.BUN,
    Embedded: IconName.EMBEDDED,
    Kotlin: IconName.KOTLIN,
    'Spring Boot': IconName.SPRING_BOOT,
    Docker: IconName.DOCKER,
  };

  return iconList[tech];
};

interface TechBadgeProps {
  type: Tech;
}

export default function TechBadge(props: TechBadgeProps) {
  const { type } = props;

  return (
    <HStack
      className={s.base}
      padding={[4, 8]}
      spacing={6}
      style={{
        background: hexToRgba(
          getTechBackgroundColor(type),
          getTechOpacity(type),
        ),
      }}>
      <Icon name={getTechIcon(type)} size={20} />
      <Typo color={getTechColor(type)}>{type}</Typo>
    </HStack>
  );
}
