const url = "https://course-api.com/javascript-store-products";

const productsDOM = document.querySelector(".products-center");
// ####### 1st element #######
const fetchedProducts = async () => {
  productsDOM.innerHTML = `<div class="loading"></div>`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
    productsDOM.innerHTML = `<p class="error">there was an error</p>`;
  }
};

// ####### 2nd element #######
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];
      const formatPrice = price / 100;
      // id,name,price,img
      return `<a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span>
            </footer>
          </a>`;
    })
    .join("");
  productsDOM.innerHTML = ` <div class="products-container">
         ${productList}
          
        </div>`;
};

// ####### 3rd element #######
const start = async () => {
  const data = await fetchedProducts();
  displayProducts(data);
};

start();
