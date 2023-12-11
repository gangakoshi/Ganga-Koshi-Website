import Image from "next/image"
import Link from "next/link"
import Navigation from "../client/Navigation"

const Header = () => {
  return (
    <header className="sticky top-0 left-0 backdrop-blur-md border-b">
      <div className="max-w-6xl flex items-center p-2 mx-auto">

        <Link href="/" className="flex flex-col items-center select-none">
          <Image src="/logo.webp" width={200} height={50} alt="Gang_Koshi_Logo" className="w-32 h-8" priority />
          <h1 className="text-xl font-bold">Ganga Koshi</h1>
        </Link>

        <nav className="flex items-center ml-auto">
          <Navigation />
        </nav>

      </div>
    </header>
  )
}

export default Header