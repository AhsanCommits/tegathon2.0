import MobileSidebar from '@/components/mobile-sidebar';
import NavLinks from '@/components/NavLinks';
import HomeButton from '@/components/HomeButton';

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full sticky top-0 z-50">
        <div className="w-full justify-end hidden lg:flex">
          <NavLinks />
        </div>

        <div className="w-11/12 flex justify-between lg:hidden p-2 rounded-[20px]  items-center max-container absolute top-4 text-white glass-container">
          <HomeButton />
          <MobileSidebar />
        </div>
      </div>
    </>
  );
};

export default Nav;
