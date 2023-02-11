import { useTypedSelector } from '@/hooks/useTypedSelector';

export const useCarousel = () => useTypedSelector(state => state.carousel);
