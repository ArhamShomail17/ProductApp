async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json(); // Call .json() to parse the response
    return data.products; // Return the parsed JSON data
}

async function main() {
    const products = await getAllProducts();
    console.log(products)
    const productContainer = document.getElementById("product-container")
    products.forEach(item => {
      
        const productCard = document.createElement("div");
        productCard.classList.add("row", "justify-content-center", "mb-3");

        productCard.innerHTML = `
            <div class="col-md-12 col-xl-10">
                <div class="card shadow-0 border rounded-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                    <img src="${item.thumbnail}" class="w-100" />
                                    <a href="#!">
                                        <div class="hover-overlay">
                                            <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-6">
                                <h5>${item.title}</h5>
                                <div class="d-flex flex-row">
                                    <div class="text-danger mb-1 me-2">
                                        ${'★'.repeat(item.rating)} 
                                        ${'★'.repeat(5 - item.rating)}
                                    </div>
            
                                </div>
                                <div class="mt-1 mb-0 text-muted small">
                                    <span class="text-primary"> Weight </span>
                                    <span>${item.weight}</span>
                                    <span class="text-primary">Stock</span>
                                    <span>${item.stock == 0 ? 'Out of Stock':item.stock}</span><br />
                                </div>
                                <p class="text-truncate mb-4 mb-md-0">
                                    ${item.description}
                                </p>
                            </div>
                            <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                <div class="d-flex flex-row align-items-center mb-1">
                                    <h4 class="mb-1 me-1">$${item.price}</h4>
                                  <span class="text-danger"><s>$${(item.price + item.price * (item.discountPercentage / 100)).toFixed(0)}</s></span>

                                </div>
                                <h6 class="text-success">Free shipping</h6>
                                <div class="d-flex flex-column mt-4">
                                    <button class="btn btn-primary btn-sm" type="button">Details</button>
                                    <button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        // Append the product card to the container
        productContainer.appendChild(productCard);
    });
}

main();
