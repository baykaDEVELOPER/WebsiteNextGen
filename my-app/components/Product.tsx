export default function Product() {
  return (
    <div className="flex align-center justify-left w-screen h-[120vh] bg-white p-10">
      <h1 className="flex align-center justify-left Text-[64px] font-bold text-black">
        Featured Products
      </h1>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col w-[17vw] h-[50vh] border-2 rounded-2xl border-black bg-blue-300">
          <img
            src="ear.jpg"
            alt="Product"
            width={1000}
            height={100}
            className="w-full h-[60%] object-cover rounded-2xl"
          />
          <h3 className="border-2 rounded-2xl p-1 h-[5vh] w-[3vw] mt-1 ml-2">
            Mobile
          </h3>
          <h2 className="ml-2">Premium Wireless Headphones</h2>
          <p className="text-yellow-500 ml-2">★ ★ ★ ★ ★ (5.0)</p>
          <h1 className="font-bold text-[30px] ml-2">$299.99</h1>
        </div>
        <div className="flex flex-col w-[17vw] h-[50vh] border-2 rounded-2xl border-black bg-blue-300">
          <img
            src="watch.jpg"
            alt="Product"
            width={1000}
            height={100}
            className="w-full h-[60%] object-cover rounded-2xl"
          />
          <h3 className="border-2 rounded-2xl p-1 h-[5vh] w-[6vw] mt-1 ml-2">
            Wearables
          </h3>
          <h2 className="ml-2">Smart Fitness Watch Pro</h2>
          <p className="text-yellow-500 ml-2">★ ★ ★ ★ ★ (5.0)</p>
          <h1 className="font-bold text-[30px] ml-2">$399.99</h1>
        </div>
        <div className="flex flex-col w-[17vw] h-[50vh] border-2 rounded-2xl border-black bg-blue-300">
          <img
            src="computer.jpg"
            alt="Product"
            width={1000}
            height={100}
            className="w-full h-[60%] object-cover rounded-2xl"
          />
          <h3 className="border-2 rounded-2xl p-1 h-[5vh] w-[5vw] mt-1 ml-2">
            Computer
          </h3>
          <h2 className="ml-2">Ultra-Thin Laptop</h2>
          <p className="text-yellow-500 ml-2">★ ★ ★ ★ ★ (5.0)</p>
          <h1 className="font-bold text-[30px] ml-2">$1299.99</h1>
        </div>
        <div className="flex flex-col w-[17vw] h-[50vh] border-2 rounded-2xl border-black bg-blue-300">
          {" "}
          <img
            src="camera.jpg"
            alt="Product"
            width={1000}
            height={100}
            className="w-full h-[60%] object-cover rounded-2xl"
          />
          <h3 className="border-2 rounded-2xl p-1 h-[5vh] w-[4vw] mt-1 ml-2">
            Camera
          </h3>
          <h2 className="ml-2">Professional DSLR Camera</h2>
          <p className="text-yellow-500 ml-2">★ ★ ★ ★ ★ (5.0)</p>
          <h1 className="font-bold text-[30px] ml-2">$1899.99</h1>
        </div>
        <div className="flex flex-col w-[17vw] h-[50vh] border-2 rounded-2xl border-black bg-blue-300">
          {" "}
          <img
            src="phone.jpg"
            alt="Product"
            width={1000}
            height={100}
            className="w-full h-[60%] object-cover rounded-2xl"
          />
          <h3 className="border-2 rounded-2xl p-1 h-[5vh] w-[3vw] mt-1 ml-2">
            Mobile
          </h3>
          <h2 className="ml-2">5G smart phone</h2>
          <p className="text-yellow-500 ml-2">★ ★ ★ ★ ★ (5.0)</p>
          <h1 className="font-bold text-[30px] ml-2">$899.99</h1>
        </div>
        <div className="flex flex-col w-[17vw] h-[50vh] border-2 rounded-2xl border-black bg-blue-300">
          {" "}
          <img
            src="ipad.jpg"
            alt="Product"
            width={1000}
            height={100}
            className="w-full h-[60%] object-cover rounded-2xl"
          />
          <h3 className="border-2 rounded-2xl p-1 h-[5vh] w-[3vw] mt-1 ml-2">
            Audio
          </h3>
          <h2 className="ml-2">Pro tablet</h2>
          <p className="text-yellow-500 ml-2">★ ★ ★ ★ ★ (5.0)</p>
          <h1 className="font-bold text-[30px] ml-2">$799.99</h1>
        </div>
      </div>
    </div>
  );
}
