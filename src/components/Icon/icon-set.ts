import ArrowDownward from './assets/arrow_downward.svg';
import Bun from './assets/bun.svg';
import Copy from './assets/copy.svg';
import Docker from './assets/docker.svg';
import Embedded from './assets/embedded.svg';
import FastAPI from './assets/fastapi.svg';
import GitHub from './assets/github.svg';
import Instagram from './assets/instagram.svg';
import Kotlin from './assets/kotlin.svg';
import Mail from './assets/mail.svg';
import Motion from './assets/motion.svg';
import NestJS from './assets/nestjs.svg';
import NextJS from './assets/nextjs.svg';
import Pencil from './assets/pencil.svg';
import Phone from './assets/phone.svg';
import PostgreSQL from './assets/postgresql.svg';
import Python from './assets/python.svg';
import React from './assets/react.svg';
import Rollup from './assets/rollup.svg';
import School from './assets/school.svg';
import SpringBoot from './assets/spring-boot.svg';
import Storybook from './assets/storybook.svg';
import SwiftUI from './assets/swiftui.svg';
import Trophy from './assets/trophy.svg';
import TypeScript from './assets/typescript.svg';
import VanillaExtract from './assets/vanilla-extract.svg';
import Velog from './assets/velog.svg';

export enum IconName {
  ARROW_DOWNWARD = 'arrow_downward',
  MAIL = 'mail',
  GITHUB = 'github',
  VELOG = 'velog',
  PHONE = 'phone',
  INSTAGRAM = 'instagram',
  COPY = 'copy',
  SCHOOL = 'school',
  PENCIL = 'pencil',
  TROPHY = 'trophy',
  NESTJS = 'nestjs',
  TYPESCRIPT = 'typescript',
  POSTGRESQL = 'postgresql',
  SWIFTUI = 'swiftui',
  FASTAPI = 'fastapi',
  MOTION = 'motion',
  VANILLA_EXTRACT = 'vanilla-extract',
  NEXTJS = 'nextjs',
  PYTHON = 'python',
  STORYBOOK = 'storybook',
  ROLLUP = 'rollup',
  REACT = 'react',
  BUN = 'bun',
  EMBEDDED = 'embedded',
  KOTLIN = 'kotlin',
  SPRING_BOOT = 'spring-boot',
  DOCKER = 'docker',
}

export const IconNameMap = {
  [IconName.ARROW_DOWNWARD]: ArrowDownward,
  [IconName.MAIL]: Mail,
  [IconName.GITHUB]: GitHub,
  [IconName.VELOG]: Velog,
  [IconName.PHONE]: Phone,
  [IconName.INSTAGRAM]: Instagram,
  [IconName.COPY]: Copy,
  [IconName.SCHOOL]: School,
  [IconName.PENCIL]: Pencil,
  [IconName.TROPHY]: Trophy,
  [IconName.NESTJS]: NestJS,
  [IconName.TYPESCRIPT]: TypeScript,
  [IconName.POSTGRESQL]: PostgreSQL,
  [IconName.SWIFTUI]: SwiftUI,
  [IconName.FASTAPI]: FastAPI,
  [IconName.MOTION]: Motion,
  [IconName.VANILLA_EXTRACT]: VanillaExtract,
  [IconName.NEXTJS]: NextJS,
  [IconName.PYTHON]: Python,
  [IconName.STORYBOOK]: Storybook,
  [IconName.ROLLUP]: Rollup,
  [IconName.REACT]: React,
  [IconName.BUN]: Bun,
  [IconName.EMBEDDED]: Embedded,
  [IconName.KOTLIN]: Kotlin,
  [IconName.SPRING_BOOT]: SpringBoot,
  [IconName.DOCKER]: Docker,
} as const;
