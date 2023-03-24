import { Link } from 'react-router-dom'
import './style.scss'

function NavBarAdmin() {
    const userRole = localStorage.getItem('userRole')
  return (
      <>
      <div>
          {(userRole === "admin") && (
              <div className="navContainer">
                  <Link to="/admin/message" className="navbar__links">Message</Link>
                  <Link to="/admin/classrequest" className="navbar__links">Classes Booking</Link>
                  <Link to="/admin/newsletterrequest" className="navbar__links">Newsletter Request</Link>
                  <Link to="/admin/createarticle" className="navbar__links">Create Article</Link>
                  <Link to="/admin/articles" className="navbar__links">Articles</Link>
                  <Link to="/admin/comments" className="navbar__links">Comments</Link>
              </div>
              )}
      </div>
      <div>
              {(userRole === "teacher") && (
                  <div className="navContainer">
                      <Link to="/admin/createarticle" className="navbar__links">Create Article</Link>
                      <Link to="/admin/articles" className="navbar__links">Articles</Link>
                      <Link to="/admin/comments" className="navbar__links">Comments</Link>
                  </div>
                  )}
          </div>
          </>
  );
}

export default NavBarAdmin;
