import logo from "../../images/food-deliveryapp-logo.png"

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
  
            <li>
              <a href="#">Contact Us</a>
            </li>
  
            <li>
              <a href="#">cart</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;