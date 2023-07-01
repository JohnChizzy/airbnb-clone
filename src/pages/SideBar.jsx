import React from "react";

const Sidebar = () => {
    return (
        <section id="sidebar">
            <div className="img-logo">
                <p>How are you</p>

            </div>
            <div className="user-info">
                <h2>User details</h2>
            </div>
            <div className="btn-group">
                <button>Login</button>
                <button>Logout</button>

            </div>


        </section>
    );
}


export default Sidebar;