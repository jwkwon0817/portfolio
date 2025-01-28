import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/icon-set';
import HStack from '@/components/Layout/HStack';
import Typo from '@/components/Typo';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useDeeplink } from '@/lib/utils/link';
import { PortfolioLink } from '@/sections/home/portfolio/Result';
import cn from 'classnames';
import Link from 'next/link';
import * as s from '../styles/link.css';

interface LinkButtonProps {
  link: PortfolioLink;
}

const getLinkIcon = (link: PortfolioLink) => {
  const linkList: Record<PortfolioLink['type'], IconName> = {
    github: IconName.GITHUB,
    npm: IconName.NPM,
    link: IconName.LINK,
    instagram: IconName.INSTAGRAM,
    docker: IconName.DOCKER_GLYPH,
  };

  return linkList[link.type] || IconName.LINK;
};

const getLinkFallback = (link: PortfolioLink) => {
  const linkList: Record<PortfolioLink['type'], string> = {
    github: 'repository',
    npm: 'package',
    link: 'link',
    instagram: 'account',
    docker: 'image',
  };

  return linkList[link.type] || 'link';
};

export default function LinkButton(props: LinkButtonProps) {
  const { link } = props;

  const { getInstagramLink } = useDeeplink();
  const { isMobile } = useBreakpoint();

  const isPrivate = link.label === undefined;

  const isInstagram = link.type === 'instagram';

  const getLink = (link: PortfolioLink): string => {
    if (link.url && link.label) {
      if (isInstagram) {
        return getInstagramLink(link.label);
      } else {
        return link.url;
      }
    }
    return 'https://github.com/jwkwon0817';
  };

  const content = (
    <HStack
      spacing={6}
      padding={isMobile ? [6, 8] : [8, 12]}
      className={cn(s.base, isPrivate && s.privateButton)}>
      <Icon
        name={getLinkIcon(link)}
        size={isMobile ? 16 : 24}
        color={isPrivate ? '#B5B5B5' : '#000'}
      />
      <Typo
        variant='p'
        size={isMobile ? 14 : 18}
        disableUserSelect
        color={isPrivate ? '#B5B5B5' : '#000'}>
        {isPrivate ? `private ${getLinkFallback(link)}` : link.label}
      </Typo>
    </HStack>
  );

  return link.url ? (
    <Link href={getLink(link)}>{content}</Link>
  ) : (
    <>{content}</>
  );
}
