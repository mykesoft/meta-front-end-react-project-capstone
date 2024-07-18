import logo from "../assets/images/header_logo.png";

function Navbar() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg justify-content-around navbar-light"
        style={{ backgroundColor: "#ebebeb" }}
      >
        <a class="navbar-brand" href="#">
          <img src={logo} alt="logo" width="240px" />
        </a>

        <div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              class="navbar-nav mr-auto"
              style={{ marginTop: "4px", fontSize: "24px" }}
            >
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="/#reservations">
                  Reservations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#menu">
                  Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/#testimonials">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <form
            class="form-inline d-inline-flex p-2"
            method="GET"
            action="/search"
          >
            <input
              class="form-control"
              type="search"
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-warning" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
