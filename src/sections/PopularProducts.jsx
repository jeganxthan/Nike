import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
const PopularProducts = () => {
  return (
    <div>
      <section id="products" className="max-container
      max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-4xl font-palanquin font-bold">Our
               <span className="text-coral-red">Popular</span> products</h2>
            <p className="clg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience top-notch quality and
               style with our sought-after selections. 
               Discover a world of comfort, design, and 
               value</p>
        </div>

        
      </section>
    </div>
  )
}

export default PopularProducts