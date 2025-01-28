// hooks/useDeeplink.ts
import { useEffect, useState } from 'react';

const createDeeplink = (
  scheme: string,
  path: string,
  params?: Record<string, string>,
) => {
  if (typeof window === 'undefined') return '';

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isMobile = isIOS || isAndroid;

  if (isMobile) {
    return `${scheme}://${path}${
      params ? '?' + new URLSearchParams(params).toString() : ''
    }`;
  }

  if (scheme === 'instagram') {
    return `https://www.instagram.com/${params?.username || ''}`;
  }

  return `https://${scheme}.com/${path}${
    params ? '/' + Object.values(params).join('/') : ''
  }`;
};

export const useDeeplink = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getInstagramLink = (username: string) => {
    return createDeeplink('instagram', 'user', { username });
  };

  return {
    getInstagramLink: isMounted ? getInstagramLink : () => '',
  };
};
