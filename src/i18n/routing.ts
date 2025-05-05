import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'es'],
 
  // Used when no locale matches
  defaultLocale: 'es',
  pathnames: {
   '/contact': {
    es:'/contacto',
    en:'/contact'
   },
   '/resume':{
    es:'/resumen',
    en:'/resume'
   },
   '/services':{
    es:'/servicios',
    en:'/services'
   },
   '/work':{
    es:'/trabajos',
    en:'/work'
   }
  }
});