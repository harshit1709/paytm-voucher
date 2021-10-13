import React from 'react'

function Nav() {
    return (
        
        <nav className="bg-dark">
            <img 
                src="https://manmatters.com/wp-content/uploads/2019/12/new-man-logo.png"
                id="logo"
                alt="logo"
            />
            <p id="id1">
                <span id="congrats">Congratulations</span>
                <span style={{fontSize:"35px"}}>🥳</span>
            </p>
            <div className="card">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/1200px-Paytm_Logo_%28standalone%29.svg.png"
                    id="paytmLogo"
                    alt="paytmLogo"
                />
                <div className="card-title">Gift Card 200</div>


            </div>


        </nav>
    
    )
}

export default Nav;