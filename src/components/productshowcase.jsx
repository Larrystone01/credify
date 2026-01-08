import { products } from "@/lib/media";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="bg-gray-200">
      <div className="section-container container mx-auto px-6 py-8">
        <div className="heading flex justify-between text-[20px] pb-5">
          <h3>
            Top <span className="font-bold">Products</span>
          </h3>
          <button className="capitalize text-blue-600 text-[16px]">
            view all
          </button>
        </div>
        <div className="product-section grid md:grid-cols-4 gap-y-3 md:gap-x-15 mb-3">
          {products.map((product, idx) => {
            return (
              <div
                className="product rounded-[15px] w-[300px] border-[0.3px] border-gray-400 py-4"
                key={idx}
              >
                <div className="img-container relative w-[240px] h-[260px] mx-auto">
                  <Image
                    src={product.img}
                    fill
                    className="object-cover"
                    sizes="(max-width: 760px) 100vw, 240px"
                  />
                </div>
                <div className="details px-8">
                  <p className="py-[2px]">{product.name}</p>
                  <p className="pb-[2px]">23</p>
                  <div className="color-container flex space-x-1">
                    {product.colors.map((color, idx) => {
                      return (
                        <div
                          className={`color w-[20px] h-[20px] ${color} rounded-[2px]`}
                          key={idx}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="size-price flex justify-between">
                    <p>{product.size}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="product-section grid md:grid-cols-4 space-y-3 md:gap-x-15">
          {products.map((product, idx) => {
            return (
              <div
                className="product rounded-[15px] w-[300px] border-[0.3px] border-gray-400 py-4"
                key={idx}
              >
                <div className="img-container relative w-[240px] h-[260px] mx-auto">
                  <Image
                    src={product.img}
                    fill
                    className="object-cover"
                    sizes="(max-width: 760px) 100vw, 240px"
                  />
                </div>
                <div className="details px-8">
                  <p className="py-[2px]">{product.name}</p>
                  <p className="pb-[2px]">23</p>
                  <div className="color-container flex space-x-1">
                    {product.colors.map((color, idx) => {
                      return (
                        <div
                          className={`color w-[20px] h-[20px] ${color} rounded-[2px]`}
                          key={idx}
                        ></div>
                      );
                    })}
                  </div>
                  <div className="size-price flex justify-between">
                    <p>{product.size}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
