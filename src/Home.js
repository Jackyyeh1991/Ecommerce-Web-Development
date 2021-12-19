import React from "react";
import "./Home.css";
import Product from "./Product";

// function Home() {
//   return (
//     <div className="home">
//       <div className="home__container">
//         <img
//           className="home__image"
//           src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
//           alt=""
//         />

//         <div className="home__row">
//           <Product
//             id="12321341"
//             title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
//             price={11.96}
//             rating={5}
//             image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
//           />
//           <Product
//             id="49538094"
//             title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
//             price={239.0}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
//           />
//         </div>

//         <div className="home__row">
//           <Product
//             id="4903850"
//             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
//             price={199.99}
//             rating={3}
//             image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
//           />
//           <Product
//             id="23445930"
//             title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
//             price={98.99}
//             rating={5}
//             image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
//           />
//           <Product
//             id="3254354345"
//             title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
//             price={598.99}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
//           />
//         </div>

//         <div className="home__row">
//           <Product
//             id="90829332"
//             title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
//             price={1094.98}
//             rating={4}
//             image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

function Home() {
  return (
      <div className="home">
          <div className="home__container">
              <img className="home__image" src="../images/banner.jpg" alt=""/>
              {/* <img className="home__image" src="https://assets.aboutamazon.com/dims4/default/e352376/2147483647/strip/true/crop/2700x1520+0+0/resize/1320x743!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fc5%2Fc3%2Fad52802c4e7b8f31eef18779a6da%2Fdisney-am-photo-final.jpg" alt=""/> */}
          

              <div className="home__row">
                  <Product id='99' title='theh skldfn klsfnls dksanf/ dskfndasngk/nnvnd,,n  dsf dksn/flasdnf /lsadnf, afn a' price={300} image='../images/IMG_0010-front-v2-S.jpg' rating={5} />
                  <Product id='100' title='theh skldfn klsfnls dksanf/ dskfndasngk/nnvnd,,n  dsf dksn/flasdnf /lsadnf, afn a' price={400} image='../images/IMG_0148-front-v2-S.jpg' rating={5} />
                  {/* <Product id='100' title='the trending' price={456} image='https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/1:1/w_1332,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg' rating={5} /> */}
              </div>

              <div className="home__row">
                  <Product id='101' title='the test' price={300} image='../images/IMG_0164-front-v2-S.jpg' rating={5} />
                  <Product id='102' title='the classic' price={200} image='../images/IMG_0168-front-v2-S.jpg' rating={3} />
                  <Product id='103' title='the latest' price={150} image='../images/IMG_1883-lighter-S.jpg' rating={4} />
              </div>

              <div className="home__row">
                  <Product id='104' title='the oldest' price={700} image='../images/IMG_9919-front-V2-S.jpg' rating={3} />
     
              </div>



              




          </div>
      </div>
  )
}


export default Home;
