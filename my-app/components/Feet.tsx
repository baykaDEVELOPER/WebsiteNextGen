export default function Feet() {
  return (
    <div>
      <div className="flex items-center justify-evenly text-black gap-15 p-5 w-[100vw] h-[20vh] bg-blue-800">
        <div className="flex flex-col">
          <h1>TechStore</h1>
          <h3>
            Your trusted destination for premium electronics and tech
            accessories.
          </h3>
        </div>
        <div className="flex flex-col">
          <h1>Shop</h1>
          <h3>All Products</h3>
          <h3>New arrivals</h3>
          <h3>sale</h3>
        </div>
        <div className="flex flex-col">
          <h1>Support</h1>
          <h3>Contact us</h3>
          <h3>shipping info</h3>
          <h3>returns</h3>
        </div>
        <div className="flex flex-col">
          <h1>Company</h1>
          <h3>about us</h3>
          <h3>privacy policy</h3>
          <h3>Terms of service</h3>
        </div>
      </div>
      <div className="flex items-center justify-center bg-blue-800">
        <h1>© 2025 TechStore. All rights reserved</h1>
      </div>
    </div>
  );
}
