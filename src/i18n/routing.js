import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['id', 'en'],
  localeDetection: false,
  defaultLocale: 'id'
});