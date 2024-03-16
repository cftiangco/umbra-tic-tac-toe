import { FaHouse } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="absolute bg-slate-100 w-full h-12 flex items-center justify-between bg-opacity-90">
            <Link to="/" className="ms-5">
              <FaHouse className="text-2xl text-slate-800 hover:text-slate-600"/>
            </Link>
            <h1 className="me-5 text-sm text-slate-700"><strong>Umbra Exam</strong> | Crimson Tiangco</h1>
        </header>
    )
}


export default Header