import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <>
      <div id="testimonials" class=" py-5" style={{ backgroundColor: "#495E57" }}>
        <div class="container mt-5 mb-5">
          <h1 class="text-warning text-center">Testimonials</h1>
          <div class="row g-2 my-5 py-4">
            <div class="col-md-4">
              <div class="card p-3 text-center px-4">
                <div class="user-image">
                  <img
                    src="https://i.imgur.com/PKHvlRS.jpg"
                    class="rounded-circle mb-2"
                    width="80"
                    alt="img"
                  />
                </div>
                <div class="user-content">
                  <h3 class="mb-1">Bruce Hardy</h3>
                  <h5 class="mb-4">Software Developer</h5>
                  <p style={{ fontSize: "16px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="ratings">
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold"/>
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 text-center px-4">
                <div class="user-image">
                  <img
                    src="https://i.imgur.com/ACeArwY.jpg"
                    class="rounded-circle mb-2"
                    width="80"
                    alt="img"
                  />
                </div>
                <div class="user-content">
                  <h3 class="mb-1">John London</h3>
                  <h5 class="mb-4">Writer</h5>
                  <p style={{ fontSize: "16px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="ratings">
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card p-3 text-center px-4">
                <div class="user-image">
                  <img
                    src="https://i.imgur.com/w2CKRB9.jpg"
                    class="rounded-circle mb-2"
                    width="80"
                    alt="img"
                  />
                </div>
                <div class="user-content">
                  <h3 class="mb-1">Max Ford</h3>
                  <h5 class="mb-4">Software Tester</h5>
                  <p style={{ fontSize: "16px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="ratings">
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                  <FontAwesomeIcon icon={faStar} size="2x" color="gold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
