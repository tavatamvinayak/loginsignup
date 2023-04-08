import Link from 'next/link';
import React from 'react';

const Navbar = () => {
   
    return (
        <>
            <div className='m-2 container'>

                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                         <a className="navbar-brand h1 fs-1" href="/" >Navbar</a> 
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active h1" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active h1 " aria-current="page" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active h1 " aria-current="page" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active h1" aria-current="page" href="#">Projects</a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-end justify-content-end">
                            <Link href="/login"><button type="button" className="btn btn-outline-dark me-2">Login</button></Link>
                            <Link href="/signup"><button type="button" className="btn  btn-outline-dark">Sign-up</button></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;




