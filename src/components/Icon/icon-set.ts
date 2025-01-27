import ArrowDownward from './assets/arrow_downward.svg';
import GitHub from './assets/github.svg';
import Mail from './assets/mail.svg';

export enum IconName {
  ARROW_DOWNWARD = 'arrow_downward',
  MAIL = 'mail',
  GITHUB = 'github',
}

export const IconNameMap = {
  [IconName.ARROW_DOWNWARD]: ArrowDownward,
  [IconName.MAIL]: Mail,
  [IconName.GITHUB]: GitHub,
} as const;
