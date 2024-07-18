import GreekSalad from "../assets/images/greek_salad.png";
import Bruschetta from "../assets/images/bruschetta.png";
import LemonCake from "../assets/images/lemon_cake.png";

function CardsSection() {
  return (
    <>
      <div id="menu" class="py-5" style={{backgroundColor: "#ebebeb"}}>
        <h1 class="text-center">Menu</h1>
        <div class="container py-5">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img
                  src={GreekSalad}
                  class="card-img-top"
                  alt="Hollywood Sign on The Hill"
                />
                <div class="card-body">
                  <h2 class="card-title">Greek Salad</h2>
                  <p class="card-text">This is an amazing Greek salad.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={Bruschetta}
                  class="card-img-top"
                  alt="Palm Springs Road"
                />
                <div class="card-body">
                  <h2 class="card-title">Bruschetta</h2>
                  <p class="card-text">This is an amazing bruschetta.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={LemonCake}
                  class="card-img-top"
                  alt="Los Angeles Skyscrapers"
                />
                <div class="card-body">
                  <h2 class="card-title">Lemon Cake</h2>
                  <p class="card-text">This is an amazing lemon cake!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardsSection;
