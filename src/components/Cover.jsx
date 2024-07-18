import Chef from "../assets/images/chef.png"

function Cover() {
  return (
<>
<div>
	<div class="row flex-lg-row-reverse align-items-center mx-auto py-5 " style={{backgroundColor: "#495E57"}}>
		<div class="col-lg-4 ms-lg-4 ">
			<div class="lc-block mb-4 " >
				<img id="featured-image" class="img-fluid shadow" src={Chef} width="70%" style={{borderRadius: "50px", marginBottom: "-140px"}}/>
			</div>
		</div>
		<div class="col-lg-7 ps-lg-4 ">
			<div class="lc-block mb-4">
				<div editable="rich">
					<h1 class="rfs-30 fw-bold text-warning">Little Lemon</h1>
				</div>
			</div>
			<div class="lc-block mb-4">
				<div editable="rich">
					<p class="lead text-white">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
				</div>
			</div>
			<div class="lc-block">
				<a class="btn btn-warning btn-lg" href="#" role="button">Reserve a Table</a>
			</div>
		</div>
	</div>
</div>
</>
  );
}

export default Cover;
