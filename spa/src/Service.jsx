import AccordionSection from "./AccordionSection";
import './Service.css'

function Service(){
  return(
    <div className="services">
      <h2>Our Service</h2>
      <AccordionSection title = " Nuts">
        <ul className="service">
          <li className="service-item"> Hex Nut - Size range: M1.6 - M100, Material: Steel, Stainless Steel, Brass, Nylon, etc.</li>
          <li className="service-item">Square Nut - Size range: M3 - M20, Material: Steel, Stainless Steel, Brass.</li>
          <li className="service-item">Wing Nut - Size range: M3 - M12, Material: Steel, Stainless Steel, Brass.</li>
        </ul>
      </AccordionSection>
      <AccordionSection title=" Screws">
        <ul className="service">
          <li className="service-item">Wood screws:
            Sizes: #2, #3, #4, #5, #6, #7, #8, #9, #10, #12, #14
            Materials: Steel, stainless steel, brass</li>
          <li className="service-item">Machine screws:
            Sizes: #0, #1, #2, #3, #4, #5, #6, #8, #10, #12, 1/4", 5/16", 3/8"
            Materials: Steel, stainless steel, brass</li>
          <li className="service-item">Sheet metal screws:
            Sizes: #4, #6, #8, #10, #12, #14
            Materials: Steel, stainless steel, aluminum, brass</li>
        </ul>
        </AccordionSection>
      <AccordionSection title=" Washers">
        <ul className="service">
          <li className="service-item">Flat Washers:
            Size: #4 - 3" (inner diameter), 1/4" - 4" (outer diameter)
            Material: Steel, Stainless Steel, Brass, Copper, Aluminum, Nylon, Rubber</li>
          <li className="service-item">Split Lock Washers:
            Size: #2 - 1-1/2" (inner diameter), 3/16" - 3-3/4" (outer diameter)
            Material: Steel, Stainless Steel, Brass</li>
        </ul>
      </AccordionSection>
    </div>
    
    
  );
}

export default Service;