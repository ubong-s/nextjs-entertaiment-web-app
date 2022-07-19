import Navbar from './Navbar';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className='layout-container lg:flex'>
         <Navbar />
         <main className='w-full'>{children}</main>
      </div>
   );
};

export default Layout;
