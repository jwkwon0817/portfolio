import VStack from '~/components/Layout/VStack';

import { Button } from '~/components/Button';
import HStack from '~/components/Layout/HStack';
import HomeMainProfileSection from '~/sections/home/main/Profile';
import * as s from './page.css';

export default function Home() {
  return (
    <VStack className={s.base}>
      <HomeMainProfileSection />
      <HStack className={s.button}>
        <Button.Default>아래로 내려 포트폴리오 보기</Button.Default>
      </HStack>
    </VStack>
  );
}
