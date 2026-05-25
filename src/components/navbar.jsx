import { Link } from 'react-router-dom'
import { PATHS } from "../constants/paths"
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="font-bold text-xl">MyApp</h1>

        <div className="flex gap-6">
          <Link to={PATHS.HOME}>Home</Link>
          <Link to={PATHS.ABOUT}>About</Link>
        </div>
      </div>
    </nav>
  )
}