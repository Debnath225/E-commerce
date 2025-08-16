document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Fetch and Render Products ---
    async function loadProducts() {
        try {
            const response = await fetch('products.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            // Get containers
            const featuredContainer = document.getElementById('featured-products');
            const newArrivalsContainer = document.getElementById('new-arrivals');
            const onSaleContainer = document.getElementById('on-sale');

            // Filter products by category
            const featured = data.products.filter(p => p.category === 'featured');
            const newArrivals = data.products.filter(p => p.category === 'new');
            const onSale = data.products.filter(p => p.category === 'sale');

            // Render products into their respective containers
            renderProducts(featured, featuredContainer);
            renderProducts(newArrivals, newArrivalsContainer);
            renderProducts(onSale, onSaleContainer);

        } catch (error) {
            console.error("Could not fetch products:", error);
        }
    }

    function renderProducts(products, container) {
        if (!container) return;
        container.innerHTML = ''; // Clear existing content
        products.forEach(product => {
            const productCard = createProductCard(product);
            container.innerHTML += productCard;
        });

        // After rendering, setup animations and event listeners
        setupInteractivity();
    }
    
    function createProductCard(product) {
        return `
            <div class="product-card" data-id="${product.id}">
                <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // --- 2. Setup Interactivity ---
    function setupInteractivity() {
        // "Add to Cart" button functionality
        const cartButtons = document.querySelectorAll('.add-to-cart-btn');
        cartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (!button.classList.contains('added')) {
                    button.classList.add('added');
                    button.textContent = 'Added ✔';
                }
            });
        });

        // GSAP Stagger Animation for newly loaded product cards
        gsap.from(".product-card:not(.animated)", {
            duration: 0.8,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: "power3.out",
            onComplete: function() {
                // Add an 'animated' class to prevent re-animating
                this.targets().forEach(card => card.classList.add('animated'));
                gsap.set(this.targets(), { clearProps: "all" });
            }
        });
    }

    // --- 3. Initial Load ---
    loadProducts();

});
