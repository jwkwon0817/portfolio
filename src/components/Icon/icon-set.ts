import ArrowDownward from './assets/arrow_downward.svg';

export enum IconName {
  ARROW_DOWNWARD = 'arrow_downward',
}

export const IconNameMap = {
  [IconName.ARROW_DOWNWARD]: ArrowDownward,
} as const;
