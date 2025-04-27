// Sample Data
const popularDishes = [
    {
        name: 'Spicy Chicken Burger',
        price: '$12.99',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Margherita Pizza',
        price: '$14.99',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Caesar Salad',
        price: '$9.99',
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=500&q=80'
    }
];

const menuItems = [
    {
        name: 'Oatmeal Bowl',
        price: '$7.99',
        category: 'breakfast',
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=500&q=80' // Example image
    },
    {
        name: 'French Toast',
        price: '$9.49',
        category: 'breakfast',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=80' // Example image
    },
    {
        name: 'Classic Pancakes',
        price: '$8.99',
        category: 'breakfast',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Eggs Benedict',
        price: '$10.99',
        category: 'breakfast',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Avocado Toast',
        price: '$9.99',
        category: 'breakfast',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80'
    },
    {
        name: 'Grilled Chicken Sandwich',
        price: '$11.99',
        category: 'lunch',
        image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Caesar Salad',
        price: '$9.99',
        category: 'lunch',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Pasta Primavera',
        price: '$12.99',
        category: 'lunch',
        image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Veggie Wrap',
        price: '$10.49',
        category: 'lunch',
        image: 'https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Tomato Soup',
        price: '$6.99',
        category: 'lunch',
        image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?auto=format&fit=crop&w=500&q=80' // Tomato soup image
    },
    {
        name: 'Steak and Vegetables',
        price: '$24.99',
        category: 'dinner',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Grilled Salmon',
        price: '$22.99',
        category: 'dinner',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Mushroom Risotto',
        price: '$18.99',
        category: 'dinner',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Chicken Alfredo',
        price: '$19.99',
        category: 'dinner',
        image: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da9?auto=format&fit=crop&w=500&q=80' // Example image
    },

    {
        name: 'Fruit Smoothie',
        price: '$6.99',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Iced Latte',
        price: '$4.99',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Fresh Orange Juice',
        price: '$3.99',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80'
    },
    {
        name: 'Lemonade',
        price: '$3.49',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1575596510825-f748919a2bf7?auto=format&fit=crop&w=500&q=80' // Example image
    },
    {
        name: 'Green Tea',
        price: '$2.99',
        category: 'drinks',
        image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=500&q=80' // Updated image
    }
];

const testimonials = [
    {
        name: 'Ayesha Khan',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/50.jpg',
        text: 'Absolutely loved the food! The flavors were authentic and the service was prompt. Will be coming back for sure.'
    },
    {
        name: 'Zainab Malik',
        rating: 4.7,
        image: 'https://randomuser.me/api/portraits/women/55.jpg',
        text: 'A delightful experience from start to finish. The staff was courteous and the meals exceeded my expectations.'
    },
    {
        name: 'Sara Ahmed',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/60.jpg',
        text: 'The best dining experience I have had in a long time. The ambiance and food quality are top-notch!'
    },
    {
        name: 'Rabia Siddiqui',
        rating: 4.9,
        image: 'https://randomuser.me/api/portraits/women/66.jpg',
        text: 'Fresh ingredients, delicious recipes, and a warm atmosphere. My family enjoyed every bite!'
    }
];

// Cart Modal Elements
const cartModal = document.getElementById('cart-modal');
const cartIcon = document.querySelector('.cart-icon');
const closeModalBtn = document.querySelector('.close-modal-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartTotalPriceElement = document.getElementById('cart-total-price');

// Cart Functionality - localStorage based
function getCartItems() {
    const cart = localStorage.getItem('tasteGridCart');
    return cart ? JSON.parse(cart) : [];
}

function saveCartItems(cart) {
    localStorage.setItem('tasteGridCart', JSON.stringify(cart));
    updateCartCount(); // Update count whenever cart is saved
    displayCartItems(); // Update modal display whenever cart is saved
}

function updateCartCount() {
    const cartItems = getCartItems();
    // Count total quantity of all items instead of just the number of items
    let totalQuantity = 0;
    cartItems.forEach(item => {
        totalQuantity += item.quantity || 1;
    });
    
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalQuantity;
    }
}

// Populate Popular Dishes
function populatePopularDishes() {
    const dishesGrid = document.querySelector('.dishes-grid');
    if (!dishesGrid) return;
    dishesGrid.innerHTML = popularDishes.map(dish => `
        <div class="dish-card" 
             data-name="${dish.name}" 
             data-price="${dish.price}" 
             data-image="${dish.image}">
            <img src="${dish.image}" alt="${dish.name}" class="dish-image">
            <div class="dish-info">
                <h3>${dish.name}</h3>
                <div class="dish-rating">
                    ${getStarRating(dish.rating)}
                </div>
                <p class="dish-price">${dish.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Populate Menu Items
function populateMenuItems(category = 'all') {
    const menuGrid = document.querySelector('.menu-grid');
    if (!menuGrid) return;
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="dish-card" 
             data-name="${item.name}" 
             data-price="${item.price}" 
             data-image="${item.image}">
            <img src="${item.image}" alt="${item.name}" class="dish-image">
            <div class="dish-info">
                <h3>${item.name}</h3>
                <p class="dish-price">${item.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Populate Testimonials
function populateTestimonials() {
    const testimonialSlider = document.querySelector('.testimonials-slider');
    testimonialSlider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial-card">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-img">
            <div class="testimonial-rating">
                ${getStarRating(testimonial.rating)}
            </div>
            <p>${testimonial.text}</p>
            <h4>${testimonial.name}</h4>
        </div>
    `).join('');
}

// Helper function to generate star rating
function getStarRating(rating) {
    return Array.from({ length: 5 }, (_, index) => 
        `<i class="${index < Math.floor(rating) ? 'fas' : 'far'} fa-star"></i>`
    ).join('');
}

// Menu Filter Functionality
function initializeMenuFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-filter');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            populateMenuItems(category);
        });
    });
}

// Smooth Scroll Navigation
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Remove active class from all links and add to clicked link
                navLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // Add event listener for the checkout button
    const checkoutButton = cartModal.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const cartItems = getCartItems();
            if (cartItems.length === 0) {
                showNotification('Your cart is empty. Add items before checking out.', 'warning');
                return;
            }
            // Navigate to the checkout page
            window.location.href = 'checkout.html';
            // Optionally, clear the cart after checkout simulation
            // saveCartItems([]); 
            // cartModal.style.display = 'none'; 
        });
    }
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = navLinks.querySelectorAll('a'); // Get all links within the nav

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active'); // Toggle active class on the button itself
    });

    // Add event listeners to each nav link to close the menu on click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    });

    // Add event listener for the checkout button
    const checkoutButton = cartModal.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const cartItems = getCartItems();
            if (cartItems.length === 0) {
                showNotification('Your cart is empty. Add items before checking out.', 'warning');
                return;
            }
            // Navigate to the checkout page
            window.location.href = 'checkout.html';
            // Optionally, clear the cart after checkout simulation
            // saveCartItems([]); 
            // cartModal.style.display = 'none'; 
        });
    }
}

// Cart Functionality (Refactored with localStorage and Event Delegation)
function initializeCart() {
    const popularDishesContainer = document.querySelector('.dishes-grid');
    const menuContainer = document.querySelector('.menu-grid');

    const handleAddToCart = (event) => {
        if (!event.target.classList.contains('add-to-cart')) {
            return; // Ignore clicks that are not on the add-to-cart button
        }

        const button = event.target;
        const card = button.closest('.dish-card');
        if (!card) return;

        const itemName = card.dataset.name;
        const itemPrice = card.dataset.price;
        const itemImage = card.dataset.image;

        if (!itemName || !itemPrice || !itemImage) {
            console.error('Missing item data on card:', card);
            showNotification('Could not add item to cart.', 'error');
            return;
        }

        const cart = getCartItems();
        
        // Check if the item already exists in the cart
        const existingItemIndex = cart.findIndex(item => item.name === itemName);
        
        if (existingItemIndex > -1) {
            // Item already exists, increment quantity
            cart[existingItemIndex].quantity = (cart[existingItemIndex].quantity || 1) + 1;
            showNotification(`Added another ${itemName} to cart!`, 'success');
        } else {
            // Item doesn't exist, add new item with quantity 1
            const newItem = {
                name: itemName,
                price: itemPrice,
                image: itemImage,
                quantity: 1,
                id: Date.now().toString() // Simple unique ID
            };
            cart.push(newItem);
            showNotification(`${itemName} added to cart!`, 'success');
        }
        
        saveCartItems(cart);
        updateCartCount();

        // Update button state
        button.textContent = 'Added!';
        button.disabled = true;
        setTimeout(() => {
            button.textContent = 'Add to Cart';
            button.disabled = false;
        }, 2000);
    };

    if (popularDishesContainer) {
        popularDishesContainer.addEventListener('click', handleAddToCart);
    }
    if (menuContainer) {
        menuContainer.addEventListener('click', handleAddToCart);
    }
}

// Testimonial Slider
function initializeTestimonialSlider() {
    const slider = document.querySelector('.testimonials-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        const slides = slider.querySelectorAll('.testimonial-card');
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

// Newsletter Form
function initializeNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input').value;
        // Use the notification system instead of alert
        showNotification(`Thank you for subscribing with ${email}!`, 'success'); 
        form.reset();
    });
}

// Helper function to generate bill content (simple text format)
function generateBillContent(cartItems, customerDetails = {}) {
    let bill = `TasteGrid - Order Receipt\n`;
    bill += `=============================\n`;
    if (customerDetails.name) bill += `Customer: ${customerDetails.name}\n`;
    if (customerDetails.address) bill += `Address: ${customerDetails.address}\n`; // Add more details if needed
    bill += `Date: ${new Date().toLocaleString()}\n`;
    bill += `-----------------------------\n`;
    bill += `Items:\n`;

    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        const itemTotal = price * item.quantity;
        bill += `- ${item.name} (x${item.quantity}) - $${itemTotal.toFixed(2)}\n`;
        total += itemTotal;
    });

    bill += `-----------------------------\n`;
    bill += `Total: $${total.toFixed(2)}\n`;
    bill += `=============================\n`;
    bill += `Thank you for your order!\n`;

    return bill;
}

// Helper function to create a download link
function createDownloadLink(content, filename = 'TasteGrid_Bill.txt') {
    const link = document.createElement('a');
    link.style.cssText = `
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        background: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 6px;
        font-weight: 500;
        margin-top: 10px;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    `;

    // Add download icon
    const icon = document.createElement('i');
    icon.className = 'fas fa-download';
    link.appendChild(icon);

    // Add text
    const text = document.createElement('span');
    text.textContent = 'Download Bill';
    link.appendChild(text);

    // Hover effect
    link.addEventListener('mouseover', () => {
        link.style.background = '#45a049';
        link.style.transform = 'translateY(-1px)';
        link.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
    });

    link.addEventListener('mouseout', () => {
        link.style.background = '#4CAF50';
        link.style.transform = 'translateY(0)';
        link.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });

    const blob = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(blob);
    link.download = filename;

    return link;
}

// Notification Popup Functionality
function showNotification(message, type = 'info', duration = 1000, contentElement = null) {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 20px;
        margin: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background: white;
        transform: translateY(-100%);
        opacity: 0;
        transition: all 0.3s ease;
    `;

    let iconClass = 'fas fa-info-circle';
    let bgColor = '#e3f2fd';
    let iconColor = '#2196f3';

    if (type === 'success') {
        iconClass = 'fas fa-check-circle';
        bgColor = '#e8f5e9';
        iconColor = '#4caf50';
    } else if (type === 'error') {
        iconClass = 'fas fa-times-circle';
        bgColor = '#ffebee';
        iconColor = '#f44336';
    } else if (type === 'warning') {
        iconClass = 'fas fa-exclamation-triangle';
        bgColor = '#fff3e0';
        iconColor = '#ff9800';
    }

    notification.style.background = bgColor;

    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('notification-content-wrapper');
    messageWrapper.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
    `;

    const icon = document.createElement('i');
    icon.className = iconClass;
    icon.style.cssText = `
        font-size: 24px;
        color: ${iconColor};
    `;

    const messageText = document.createElement('div');
    messageText.className = 'notification-message';
    messageText.textContent = message;
    messageText.style.cssText = `
        font-size: 16px;
        color: #333;
        font-weight: 500;
    `;

    messageWrapper.appendChild(icon);
    messageWrapper.appendChild(messageText);

    if (contentElement) {
        const contentWrapper = document.createElement('div');
        contentWrapper.style.cssText = `
            margin-left: 15px;
            padding-left: 15px;
            border-left: 1px solid rgba(0, 0, 0, 0.1);
        `;
        contentWrapper.appendChild(contentElement);
        messageWrapper.appendChild(contentWrapper);
    }

    notification.appendChild(messageWrapper);

    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.innerHTML = '&times;';
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: #666;
        font-size: 20px;
        cursor: pointer;
        padding: 0 5px;
        margin-left: 10px;
        opacity: 0.7;
        transition: opacity 0.2s;
    `;

    closeButton.addEventListener('mouseover', () => {
        closeButton.style.opacity = '1';
    });

    closeButton.addEventListener('mouseout', () => {
        closeButton.style.opacity = '0.7';
    });

    notification.appendChild(closeButton);
    container.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
        notification.style.opacity = '1';
    }, 10);

    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateY(-100%)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });

    if (duration > 0) {
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateY(-100%)';
                notification.style.opacity = '0';
                setTimeout(() => notification.remove(), 300);
            }
        }, duration);
    }
}

// Contact Form Submission Handler
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission for this example
            
            // Simulate successful submission
            // In a real app, you would send data to a server here
            // and call showNotification on success.
            showNotification('Message sent successfully!', 'success');

            // Optionally clear the form
            contactForm.reset(); 
        });
    }
}



// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only run page-specific initializations
    if (document.querySelector('.hero')) { // Check for an element unique to index.html
        populatePopularDishes();
        populateMenuItems(); // Populate initially with 'all'
        populateTestimonials();
        initializeMenuFilter();
        initializeMobileMenu();
        initializeCart(); // Initialize cart with event delegation
        initializeTestimonialSlider();
        initializeNewsletterForm();
        initializeSmoothScroll();
        initializeContactForm();
        initializeCartModal();
        updateCartCount(); // Update cart count on initial load
    }

    // Initialization specific to checkout.html
    if (document.getElementById('checkout-form')) {
        initializeCheckoutForm();
        // We might still need cart functions if we display a summary on checkout
        updateCartCount(); // Ensure cart count is visible if header is reused
        // If cart modal elements exist on checkout page (e.g., shared header), initialize them
        if (document.getElementById('cart-modal')) {
             initializeCartModal();
        }
    }
});

// Function to initialize checkout form logic
function initializeCheckoutForm() {
    const checkoutForm = document.getElementById('checkout-form');
    if (!checkoutForm) return;

    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // --- Simulate Order Placement & Bill Generation ---
        const cartItems = getCartItems();
        if (cartItems.length === 0) {
            showNotification('Your cart is empty. Cannot place order.', 'warning');
            return;
        }

        // Optional: Gather customer details from form for the bill
        const customerDetails = {
            name: document.getElementById('fullname')?.value,
            address: document.getElementById('address')?.value
            // Add city, zip, phone if needed
        };

        // 1. Generate Bill Content
        const billContent = generateBillContent(cartItems, customerDetails);

        // 2. Create Download Link
        const downloadLink = createDownloadLink(billContent);

        // 3. Show Success Notification with Download Link
        // Pass the link as the fourth argument to showNotification
        showNotification('Order Placed Successfully!', 'success', 5000, downloadLink); // Longer duration for download

        // 4. Clear Cart (Important after successful order)
        saveCartItems([]);
        updateCartCount(); // Update header cart count

        // 5. Optionally clear the form
        // this.reset(); // 'this' refers to the form

        // 6. Optionally redirect after a delay
        // setTimeout(() => { window.location.href = 'order_confirmation.html'; }, 3000);
    });
}

// Cart Modal Functionality
function initializeCartModal() {
    if (!cartModal || !cartIcon || !closeModalBtn) {
        console.error('Cart modal elements not found.');
        return;
    }

    function toggleModal(show) {
        if (show) {
            cartModal.classList.remove('modal-closing');
            cartModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            displayCartItems();
            updateCartCount();
        } else {
            cartModal.classList.add('modal-closing');
            // Wait for the animation to finish before hiding the modal
            setTimeout(() => {
                cartModal.style.display = 'none';
                cartModal.classList.remove('modal-closing'); // Clean up class
                document.body.style.overflow = '';
            }, 300); // Match animation duration (0.3s)
        }
    }

    cartIcon.addEventListener('click', () => toggleModal(true));
    closeModalBtn.addEventListener('click', () => toggleModal(false));
    // Removed window click listener to prevent closing modal on outside click

    // Handle item removal and quantity changes using event delegation
    cartItemsContainer.addEventListener('click', (event) => {
        const target = event.target;
        
        // Handle remove button
        if (target.classList.contains('remove-item-btn')) {
            const itemId = target.dataset.itemId;
            removeItemFromCart(itemId);
            return;
        }
        
        // Handle quantity decrease button
        if (target.classList.contains('decrease')) {
            const itemId = target.dataset.itemId;
            updateItemQuantity(itemId, 'decrease');
            return;
        }
        
        // Handle quantity increase button
        if (target.classList.contains('increase')) {
            const itemId = target.dataset.itemId;
            updateItemQuantity(itemId, 'increase');
            return;
        }
    });

    // Add event listener for the checkout button
    const checkoutButton = cartModal.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            const cartItems = getCartItems();
            if (cartItems.length === 0) {
                showNotification('Your cart is empty. Add items before checking out.', 'warning');
                return;
            }
            // Navigate to the checkout page
            window.location.href = 'checkout.html';
            // Optionally, clear the cart after checkout simulation
            // saveCartItems([]); 
            // cartModal.style.display = 'none'; 
        });
    }
}

function displayCartItems() {
    const cartItems = getCartItems();
    cartItemsContainer.innerHTML = ''; // Clear previous items
    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalPriceElement.textContent = '$0.00';
        return;
    }

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        // Get item quantity (default to 1 if not set)
        const quantity = item.quantity || 1;
        
        // Calculate item total price
        const priceValue = parseFloat(item.price.replace('$', ''));
        const itemTotal = priceValue * quantity;
        
        itemElement.innerHTML = `
            <button class="remove-item-btn" data-item-id="${item.id}">&times;</button>
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="item-price">$${priceValue.toFixed(2)} each</p>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" data-item-id="${item.id}">-</button>
                    <span class="item-quantity">${quantity}</span>
                    <button class="quantity-btn increase" data-item-id="${item.id}">+</button>
                </div>
            </div>
            <div class="cart-item-total">
                <p class="item-total">$${itemTotal.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.appendChild(itemElement);

        // Add to total price
        if (!isNaN(priceValue)) {
            totalPrice += itemTotal;
        }
    });

    cartTotalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

function updateItemQuantity(itemId, action) {
    let cartItems = getCartItems();
    const itemIndex = cartItems.findIndex(item => String(item.id) === String(itemId));

    if (itemIndex > -1) {
        if (action === 'increase') {
            cartItems[itemIndex].quantity = (cartItems[itemIndex].quantity || 1) + 1;
        } else if (action === 'decrease') {
            const currentQuantity = cartItems[itemIndex].quantity || 1;
            if (currentQuantity > 1) {
                cartItems[itemIndex].quantity = currentQuantity - 1;
            } else {
                cartItems.splice(itemIndex, 1);
            }
        }
        saveCartItems(cartItems);
        displayCartItems();
    }
}

function removeItemFromCart(itemId) {
    let cartItems = getCartItems();
    const itemIndex = cartItems.findIndex(item => String(item.id) === String(itemId));

    if (itemIndex > -1) {
        const item = cartItems[itemIndex];
        if (item.quantity > 1) {
            item.quantity--;
            showNotification(`Removed one ${item.name} from cart.`, 'info');
        } else {
            cartItems.splice(itemIndex, 1);
            showNotification(`${item.name} removed from cart.`, 'info');
        }
        saveCartItems(cartItems);
        updateCartCount();
        displayCartItems();
    } else {
        showNotification('Could not remove item.', 'error');
    }
}

function updateItemQuantity(itemId, action) {
    let cartItems = getCartItems();
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (itemIndex === -1) {
        console.error('Item not found for quantity update:', itemId);
        showNotification('Could not update item quantity.', 'error');
        return;
    }
    
    const item = cartItems[itemIndex];
    const currentQuantity = item.quantity || 1;
    
    if (action === 'increase') {
        // Increase quantity
        item.quantity = currentQuantity + 1;
        showNotification(`Added another ${item.name} to cart.`, 'success');
    } else if (action === 'decrease') {
        // Decrease quantity
        if (currentQuantity > 1) {
            item.quantity = currentQuantity - 1;
            showNotification(`Reduced ${item.name} quantity.`, 'info');
        } else {
            // If quantity would become 0, remove the item instead
            cartItems.splice(itemIndex, 1);
            showNotification(`${item.name} removed from cart.`, 'info');
        }
    }
    
    saveCartItems(cartItems);
}
