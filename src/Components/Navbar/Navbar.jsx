import React from 'react';
import "./Navbar.css";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo-container'>
                <img src="https://imgs.search.brave.com/eQkpPVWTgHE7-TxdJFg9_14qEehRt4GExSNKlfSbJTs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvTmV0/ZmxpeC1Mb2dvLVBO/Ry1QaG90b3MucG5n" alt="netflix-logo" className='netflix-logo' />
                <img src="https://static.vecteezy.com/system/resources/thumbnails/024/391/692/small_2x/popcorn-design-illustration-png.png" alt="netflix-sub-logo" className='netflix-sub-logo' />
            </div>


            <div className='nav-links'>
                <a href="" className='link'>Home</a>
                <a href="" className='link'>TV Shows</a>
                <a href="" className='link'>Movies</a>
                <a href="" className='link'>New & Popular</a>
                <a href="" className='link'>My List</a>
                <a href="" className='link'>Browse by Language</a>
            </div>


            <div className='btn-container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile-image" className='profile-image' />
                <a href="" className='navbar-notification'><i className='fa-regular fa-bell'></i></a>
                <a href="" className='navbar-link'>Chilldren</a>
                <a href="" className='navbar-search'><i className="fa-solid fa-magnifying-glass"></i></a>
            </div>
        </div>
    )
}

export default Navbar