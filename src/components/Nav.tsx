import { Link } from 'react-router-dom'
import { TonConnectButton } from '@tonconnect/ui-react'

function Nav() {
  return (
    <>
      <div className="fixed z-10 backdrop-blur-sm w-full">
        <section className="relative mx-auto">
          <nav className="flex justify-between text-white w-full px-4 md:px-24">
            <div className="px-5 xl:px-12 py-6 flex gap-10 w-full items-center justify-between">
              <a className="text-3xl font-bold font-heading">
                Ignitus Networks
              </a>
              <ul className="flex flex-wrap px-0 mx-auto text-sm md:text-base font-semibold font-heading space-x-6 md:space-x-12">
                <Link className='no-underline text-gray-200' to="/">
                  <li>Home</li>
                </Link>
                <Link className='no-underline text-gray-200' to="/all-nft">
                  <li>All NFT</li>
                </Link>
                <Link className='no-underline text-gray-200' to="/create">
                  <li>Mint NFT</li>
                </Link>
              </ul>
              <div className="flex items-center space-x-5">
                <TonConnectButton />
              </div>
            </div>
          </nav>
        </section>
      </div>

    </>
  )
}

export default Nav  