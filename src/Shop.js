import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import MiniCart from "./components/MiniCart";
import Loading from "./components/Loading";

const Shop = (props) => {

  const [type, setType] = useState("");
  const [price, setPrice] = useState([]);
  const products = [];

  const typeSearch = (type) => {
    return () => {
      setType(type);
    }
  };


  const priceSearch = (price) => {
    return () => {
      setPrice(price);
    }
  };

  const sideProps = {
    tSearch: typeSearch,
    pSearch: priceSearch
  }

  const pauldron = {
    name: "cermaic pauldron",
    type: "apparel",
    description: "a ceramic pauldron",
    img: "./images/ceramic-pauldron.jpg",
    price: 45.99
  };

  const coat = {
    name: "fungal overcoat",
    type: "apparel",
    description: "an overcoat made of fungus",
    img: "./images/fungal-coat.jpg",
    price: 41.99
  };

  const arm = {
    name: "prosthetic cyborg arm",
    type: "accessory",
    description: "a cybernetic replacement arm",
    img: "./images/cyborg-arm.jpg",
    price: 221.99
  };

  const evilRock = {
    name: "evil rock",
    type: "rock",
    description: "a strangely menacing rock",
    img: "./images/evil-rock.jpg",
    price: 11.99
  };

  const funRock = {
    name: "true fun rock",
    type: "rock",
    description: "the one true FUN rock",
    img: "./images/fun-rock.jpg",
    price: 3.99
  };

  const sword = {
    name: "lazer sword",
    type: "accessory",
    description: "a sword that is either made of or shoots lazers",
    img: "./images/lazer-sword.jpg",
    price: 111.99
  };

  const emerald = {
    name: "magic emerald",
    type: "rock",
    description: "an emerald that is possibly magical",
    img: "./images/magic-emerald.jpg",
    price: 4444.99
  };

  const chalice = {
    name: "neon chalice",
    type: "accessory",
    description: "a neon chalice",
    img: "./images/neon-chalice.jpg",
    price: 13.99
  };

  const helm = {
    name: "rococo greathelm",
    type: "apparel",
    description: "a greathelm made in the rococo style",
    img: "./images/rococo-greathelm.jpg",
    price: 111.99
  };

  const superRock = {
    name: "super rock",
    type: "rock",
    description: "a rock that is super",
    img: "./images/super-rock.jpg",
    price: 4.99
  };

  const trinket = {
    name: "unstable trinket",
    type: "accessory",
    description: "a trinket that is somehow unstable",
    img: "./images/trinket.jpg",
    price: 7.99
  };

  const crown = {
    name: "poison emerald blood crown",
    type: "apparel",
    description: "a crown that has both poison and emeralds",
    img: "./images/crown.jpg",
    price: 777.99
  };

  const jumpsuit = {
    name: "uranium jumpsuit",
    type: "apparel",
    description: "a jumpsuit that is either made of or for uranium",
    img: "./images/jumpsuit.jpg",
    price: 24.99
  };

  const eyepatch = {
    name: "sorrowful eyepatch",
    type: "apparel",
    description: "a very sad eyepatch",
    img: "./images/eyepatch.jpg",
    price: 33.50
  };

  const pants = {
    name: "vegan necro pants",
    type: "apparel",
    description: "a pair of comfortable and stylish vegan necro pants",
    img: "./images/pants.jpg",
    price: 94.99
  };

  const console = {
    name: "regence style lava console",
    type: "decor",
    description: "a regence style console table made of lava",
    img: "./images/console.jpg",
    price: 1124.99
  };

  const candelabra = {
    name: "haunted candelabra",
    type: "decor",
    description: "a haunted candelabra",
    img: "./images/candelabra.jpg",
    price: 999.99
  };

  const niche = {
    name: "baroque plasma niche",
    type: "decor",
    description: "a barqoue style niche that is either for or made of plasma",
    img: "./images/niche.jpg",
    price: 1500.99
  };

  const fauteuil = {
    name: "neoclassical radiactive fauteuil",
    type: "decor",
    description: "a neoclassical style fauteuil that is radioactive",
    img: "./images/fauteuil.jpg",
    price: 4000.99
  };

  const sampleOne = {
    name: "fun rock",
    type: "rock",
    description: "a fun little rock",
    img: "./images/rock.jpg",
    price: 2.99
  };

  const sampleTwo = {
    name: "more fun rock",
    type: "rock",
    description: "another fun little rock",
    img: "./images/rock.jpg",
    price: 3.99
  };

  const sampleThree = {
    name: "most fun rock",
    type: "rock",
    description: "another fun little rock",
    img: "./images/rock.jpg",
    price: 4.99
  };

  products.push(fauteuil);
  products.push(niche);
  products.push(candelabra);
  products.push(console);
  products.push(pants);
  products.push(eyepatch);
  products.push(jumpsuit);
  products.push(crown);
  products.push(trinket);
  products.push(superRock);
  products.push(helm);
  products.push(chalice);
  products.push(emerald);
  products.push(sword);
  products.push(funRock);
  products.push(evilRock);
  products.push(arm);
  products.push(pauldron);
  products.push(coat);
  products.push(sampleOne);
  products.push(sampleTwo);
  products.push(sampleThree);

  const makeItem = (item) => {
    return (
      <div key={item.name} className="item-card">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <img className="item-image" src={item.img} alt="product" />
        <div className="item-footer">
          <p>${item.price.toFixed(2)}</p>
          <button className="plus" onClick={props.cartProps.add(item)}></button>
        </div>
      </div>
    )
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
  }, [type, price])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [type, price])

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])




  return (
    <main>
        
      <h2 className="shop-title">shop</h2>
      <div className="shop-container">
        <SideBar sideProps={sideProps}/>
        <div className="shop">
          <>
          {loading === false ? (
          <>
          {products.map((item) => {
            if (type && price.length < 1) {
              if (type === item.type) {
                return makeItem(item);
              }
            } else if (!type && price.length > 1) {
              if (item.price >= price[0] && item.price < price[1]) {
                return makeItem(item);
              }
            } else if (type && price.length > 1) {
              if (item.price >= price[0] && item.price < price[1] && type === item.type) {
                return makeItem(item);
              }
            } else {
            return makeItem(item);
            }
          })}
          </>
          ) : (
            <Loading />
          )}
          </>
        </div>
        <MiniCart cartProps={props.cartProps}/>
      </div>
        
    </main>
  );
};

export default Shop;