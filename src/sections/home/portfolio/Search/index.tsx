import Icon from '@/components/Icon';
import { IconName } from '@/components/Icon/icon-set';
import HStack from '@/components/Layout/HStack';
import { StackAlign, StackJustify } from '@/components/Layout/shared';
import VStack from '@/components/Layout/VStack';
import Typo from '@/components/Typo';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import * as s from './style.css';

interface HomePortfolioSearchSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export default function HomePortfolioSearchSection(
  props: HomePortfolioSearchSectionProps,
) {
  const { searchQuery, setSearchQuery, searchValue, setSearchValue } = props;

  const { isMobile } = useBreakpoint();

  return (
    <VStack
      spacing={16}
      align={StackAlign.START}
      fullWidth
      justify={StackJustify.START}
      className={s.base}>
      <HStack spacing={16} fullWidth>
        <label htmlFor={'search-input'} className={s.input}>
          <HStack fullWidth spacing={10} justify={StackJustify.START}>
            <Icon
              name={IconName.SEARCH}
              size={isMobile ? 18 : 20}
              color={'#d2d2d2'}
            />
            <input
              type='text'
              value={searchQuery}
              placeholder={'검색어를 입력해주세요'}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setSearchValue(searchQuery);
                }
              }}
              id={'search-input'}
            />
          </HStack>
        </label>
        <HStack
          padding={[10, 32]}
          className={s.searchButton}
          onClick={() => {
            if (searchQuery === '') {
              setSearchValue('');
            } else {
              setSearchValue(searchQuery);
            }
          }}>
          <Typo weight={600} color={'#fff'}>
            검색
          </Typo>
        </HStack>
      </HStack>
      {searchValue != '' && (
        <HStack spacing={8}>
          <HStack padding={[6, 12]} className={s.searchResult}>
            <Typo variant={'h4'} size={14} color={'#666666'}>
              검색어
            </Typo>
          </HStack>
          <Typo variant={'h4'} size={16}>
            {searchValue}
          </Typo>
        </HStack>
      )}
    </VStack>
  );
}
