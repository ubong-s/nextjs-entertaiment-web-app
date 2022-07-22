import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Navbar from './Navbar';
import UserModal from './UserModal';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   const { bookmarks } = useSelector((state: RootState) => state.user);

   useEffect(() => {
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }, [bookmarks]);

   return (
      <div className='layout-container lg:flex lg:gap-10 relative'>
         <Navbar />
         <UserModal />
         <main className='w-full'>{children}</main>
      </div>
   );
};

export default Layout;
