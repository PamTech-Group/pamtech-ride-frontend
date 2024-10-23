'use client'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import CustomButton from "./CustomButton";
const NavBar = () => {
  const router = useRouter()
  const handleNavigate = () => {
    router.push('/book-now')
  }
  return(

    <header className='w-full  absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/pamtech_logo.webp'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
  
        <CustomButton
          title='Call Us'
          btnType='button'
          containerStyles='bg-primary-blue text-white rounded-full min-w-[130px]'
          handleClick={handleNavigate}
        />
      </nav>
    </header>
  )
}

export default NavBar;
