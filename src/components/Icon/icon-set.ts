import ArrowDownward from './assets/arrow_downward.svg';
import Copy from './assets/copy.svg';
import GitHub from './assets/github.svg';
import Instagram from './assets/instagram.svg';
import Mail from './assets/mail.svg';
import Phone from './assets/phone.svg';
import Velog from './assets/velog.svg';

export enum IconName {
  ARROW_DOWNWARD = 'arrow_downward',
  MAIL = 'mail',
  GITHUB = 'github',
  VELOG = 'velog',
  PHONE = 'phone',
  INSTAGRAM = 'instagram',
  COPY = 'copy',
}

export const IconNameMap = {
  [IconName.ARROW_DOWNWARD]: ArrowDownward,
  [IconName.MAIL]: Mail,
  [IconName.GITHUB]: GitHub,
  [IconName.VELOG]: Velog,
  [IconName.PHONE]: Phone,
  [IconName.INSTAGRAM]: Instagram,
  [IconName.COPY]: Copy,
} as const;
