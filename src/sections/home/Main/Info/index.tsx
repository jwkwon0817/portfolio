'use client';

import * as s from './style.css';

import HStack from '~/components/Layout/HStack';
import { StackJustify } from '~/components/Layout/shared';

const content = `안녕하세요. 저는 현재 선린인터넷고등학교에 재학중인 권지원입니다.
  안녕하세요. 저는 현재 선린인터넷고등학교에 재학중인 권지원입니다.
  안녕하세요. 저는 현재 선린인터넷고등학교에 재학중인 권지원입니다.
  안녕하세요. 저는 현재 선린인터넷고등학교에 재학중인 권지원입니다.
`;

export default function HomeMainInfoSection() {
  const getContentString = () => {
    const string = content.split('\n').map((line, index) => {
      return (
        <>
          {line}
          {index !== content.split('\n').length - 1 && <br />}
        </>
      );
    });

    return string;
  };

  return (
    <HStack fullWidth justify={StackJustify.BETWEEN}>
      <HStack padding={24} className={s.content}>
        {getContentString()}
      </HStack>
    </HStack>
  );
}
