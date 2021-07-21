import Admin from './pages/Admin';
import Home from './pages/Home';
import ExitLog from './pages/ExitLog';
import Archive from './pages/Archive';
import PhoneBook from './pages/PhoneBook';
import { ADMIN_ROUTE, ARCHIVE_ROUTE, EXITLOG_ROUTE, HOME_ROUTE, PHONEBOOK_ROUTE } from './utils/const';

export const authRoutes = [
   {
      path: ADMIN_ROUTE,
      Component: Admin
   }  
]

export const publicRoutes = [
   {
      path: HOME_ROUTE,
      Component: Home
   },
   {
      path: EXITLOG_ROUTE,
      Component: ExitLog
   },
   {
      path: ARCHIVE_ROUTE,
      Component: Archive
   },
   {
      path: PHONEBOOK_ROUTE,
      Component: PhoneBook
   } 
]