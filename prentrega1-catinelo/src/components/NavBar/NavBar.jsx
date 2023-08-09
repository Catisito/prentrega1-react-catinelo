import CartWidget from "../CarWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
      <div className="container-fluid">
        {/* Brand */}
        <a className="titulo navbar-brand fs-2 ">Ringo!</a>

        {/* Links */}
        <ul className="navbar-nav ml-auto mb-lg-0">
          <li className="nav-item">
            <a className="listas nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="listas nav-link" href="#">Products</a>
          </li>
          <li className="nav-item">
            <a className="listas nav-link" href="#">Shop</a>
          </li>
        </ul>

        {/* CartWidget */}
        <CartWidget></CartWidget>
      </div>
    </nav>
  );
};

export default Navbar;
