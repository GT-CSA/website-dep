import { useState } from 'react';
import Link from 'next/link'

const Navbar = () => {
    const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
    return (
    <>
      <nav className='flex items-center flex-wrap bg-white p-3 '>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <img className='h-2/4 rounded-full mr-3' src='/pandragon-nav.png' />
            <span className='text-xl text-black font-bold tracking-wide'>
                Chinese Student Association
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto space-x-3 mr-8'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center transform transition hover:scale-110 duration-200 ease-in-out'>
                  Community
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center transform transition hover:scale-110 duration-200 ease-in-out'>
                  Events
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center transform transition hover:scale-110 duration-200 ease-in-out'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='mx-auto lg:mx-0 bg-green-400 text-white font-bold rounded-full my-2 py-2 px-6 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-200 ease-in-out'>
                  Join Us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
    )
}

export default Navbar;