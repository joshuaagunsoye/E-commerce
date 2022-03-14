function NavBar(){
    return (
        <div className="header-content">
            <p className="brand-name">sneakers</p>
            <div className="pages">
                <p><a className="links" href="#">Collections</a></p>
                <p><a className="links" href="#">Men</a></p>
                <p><a className="links" href="#">Women</a></p>
                <p><a className="links" href="#">About</a></p>
                <p><a className="links" href="#">Contact</a></p>
            </div>    
            <div className="icon">
                <p><img src="/images/shopping.png" height="25px"/></p>
                <p><img src="/images/image-avatar.png" height="25px"/></p>
            </div>
            </div>

    )
}

export default NavBar;