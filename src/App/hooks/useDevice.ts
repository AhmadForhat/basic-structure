import {useMedia} from 'react-use';

const useDevide = () => {
  const isDesktop = useMedia('(min-width: 1200px)');
  const isMobile = useMedia('(min-width: 400px)') && !isDesktop
  const isSmallMobile = useMedia('(max-width: 360px)') && !isMobile

  return {
    isSmallMobile,
    isMobile,
    isDesktop
  }
};

export default useDevide