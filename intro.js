// ==========================================
// THE OLIVE TABLE
// FINAL MENU JAVASCRIPT
// 120 ITEMS - NO FOOD PHOTOS
// ==========================================

// Format:
// "Food Name|Price|Description"

const menuData = {
    // 🍕 PIZZA - 10 ITEMS
    pizza: [
        "Margherita Pizza|36|Mozzarella, tomato sauce and fresh basil.",
        "Pepperoni Pizza|42|Pepperoni, mozzarella and tomato sauce.",
        "BBQ Chicken Pizza|45|Chicken, BBQ sauce and red onions.",
        "Ranch Chicken Pizza|46|Chicken, mozzarella and ranch dressing.",
        "Four Cheese Pizza|48|A delicious blend of four cheeses.",
        "Truffle Mushroom Pizza|52|Mushrooms, truffle cream and mozzarella.",
        "Veggie Supreme Pizza|40|Peppers, mushrooms, olives and onions.",
        "Buffalo Chicken Pizza|47|Chicken with spicy buffalo sauce.",
        "Meat Lovers Pizza|54|Beef, pepperoni and savoury toppings.",
        "Pesto Chicken Pizza|46|Chicken, basil pesto and mozzarella.",
    ],

    // 🍔 BURGERS - 10 ITEMS
    burgers: [
        "Classic Beef Burger|39|Beef, lettuce, tomato and house sauce.",
        "Classic Cheeseburger|42|Juicy beef with melted cheddar.",
        "Double Smash Burger|49|Two smashed beef patties and cheese.",
        "BBQ Beef Burger|45|Beef, BBQ sauce and onions.",
        "Crispy Chicken Burger|40|Golden chicken with mayonnaise.",
        "Spicy Chicken Burger|42|Crispy chicken and spicy sauce.",
        "Mushroom Swiss Burger|46|Beef, mushrooms and Swiss cheese.",
        "Ranch Chicken Burger|44|Chicken, ranch sauce and lettuce.",
        "Jalapeno Burger|46|Beef, jalapenos and cheese sauce.",
        "Truffle Beef Burger|52|Beef, cheese and truffle mayonnaise.",
    ],

    // 🍝 PASTA - 10 ITEMS
    pasta: [
        "Fettuccine Alfredo|44|Pasta with creamy Alfredo sauce.",
        "Chicken Alfredo Pasta|48|Creamy pasta with grilled chicken.",
        "Spaghetti Bolognese|46|Spaghetti with rich beef tomato sauce.",
        "Penne Arrabbiata|40|Penne with spicy tomato sauce.",
        "Pesto Pasta|43|Pasta with basil pesto and parmesan.",
        "Pink Sauce Pasta|45|Creamy tomato and cheese sauce.",
        "Truffle Mushroom Pasta|52|Pasta with mushrooms and truffle cream.",
        "Mac and Cheese|39|Macaroni with creamy cheddar cheese.",
        "Cajun Chicken Pasta|49|Chicken pasta with Cajun spices.",
        "Shrimp Linguine|56|Linguine with shrimp, garlic and herbs.",
    ],

    // 🥖 STARTERS - 10 ITEMS
    starters: [
        "Mozzarella Sticks|28|Crispy mozzarella with tomato dip.",
        "Garlic Bread|19|Toasted bread with garlic butter.",
        "Cheesy Garlic Bread|24|Garlic bread with melted cheese.",
        "Tomato Bruschetta|27|Toasted bread with tomatoes and basil.",
        "Chicken Wings|34|Crispy wings with dipping sauce.",
        "Buffalo Wings|36|Wings coated in buffalo sauce.",
        "Chicken Tenders|32|Golden chicken strips with dipping sauce.",
        "Loaded Nachos|36|Tortilla chips, cheese and jalapenos.",
        "Loaded Potato Skins|32|Potato skins with melted cheese.",
        "Fried Calamari|42|Crispy calamari served with lemon dip.",
    ],

    // 🥗 SALADS - 10 ITEMS
    salads: [
        "Caesar Salad|32|Romaine, parmesan and Caesar dressing.",
        "Chicken Caesar Salad|39|Caesar salad with grilled chicken.",
        "Greek Salad|34|Tomatoes, cucumber, feta and olives.",
        "Garden Salad|28|Fresh seasonal vegetables and greens.",
        "Avocado Salad|38|Avocado, greens and citrus dressing.",
        "Quinoa Salad|39|Quinoa, vegetables and lemon dressing.",
        "Caprese Salad|36|Tomatoes, mozzarella and basil.",
        "Asian Chicken Salad|42|Chicken, cabbage and sesame dressing.",
        "Mediterranean Salad|37|Vegetables, olives and feta cheese.",
        "Halloumi Salad|43|Grilled halloumi with fresh greens.",
    ],

    // 🍟 SIDES - 10 ITEMS
    sides: [
        "French Fries|16|Golden crispy potato fries.",
        "Curly Fries|19|Seasoned spiral-cut fries.",
        "Sweet Potato Fries|22|Crispy sweet potato fries.",
        "Cheese Fries|24|Fries covered with melted cheese.",
        "Loaded Fries|29|Fries with cheese and house toppings.",
        "Onion Rings|21|Crispy battered onion rings.",
        "Mashed Potatoes|20|Creamy potatoes with butter.",
        "Coleslaw|16|Crunchy cabbage with creamy dressing.",
        "Steamed Vegetables|19|Fresh seasonal steamed vegetables.",
        "Potato Wedges|20|Golden wedges with herb seasoning.",
    ],

    // 🥣 SAUCES - 10 ITEMS
    sauces: [
        "BBQ Sauce|5|Sweet and smoky BBQ dipping sauce.",
        "Ranch Sauce|5|Creamy ranch sauce with herbs.",
        "Garlic Aioli|6|Smooth garlic mayonnaise.",
        "Spicy Mayo|5|Creamy mayonnaise with a spicy kick.",
        "Buffalo Sauce|6|Tangy and spicy buffalo sauce.",
        "Honey Mustard|5|Sweet honey mustard dipping sauce.",
        "Cheese Sauce|7|Warm creamy cheddar cheese dip.",
        "Truffle Mayo|8|Creamy mayonnaise with truffle flavour.",
        "Sweet Chilli Sauce|5|Sweet and spicy chilli sauce.",
        "Tomato Ketchup|4|Classic tomato ketchup.",
    ],

    // 🍰 DESSERTS - 10 ITEMS
    desserts: [
        "Lotus Cheesecake|29|Creamy cheesecake with Lotus biscuits.",
        "Classic Cheesecake|28|Vanilla cheesecake and biscuit crust.",
        "Chocolate Lava Cake|32|Warm cake with melted chocolate.",
        "Tiramisu|32|Coffee and mascarpone layered dessert.",
        "Red Velvet Cake|30|Red velvet with cream cheese frosting.",
        "Chocolate Brownie|25|Rich and fudgy chocolate brownie.",
        "Carrot Cake|28|Spiced cake with cream cheese frosting.",
        "Strawberry Cheesecake|31|Cheesecake topped with strawberries.",
        "Chocolate Chip Cookie|25|Warm cookie with chocolate chips.",
        "Pistachio Cake|36|Soft cake with pistachio cream.",
    ],

    // 🧊 COLD DRINKS - 10 ITEMS
    "cold-drinks": [
        "Iced Vanilla Latte|27|Iced espresso with vanilla milk.",
        "Iced Caramel Latte|28|Iced espresso and caramel syrup.",
        "Iced Spanish Latte|30|Espresso with sweet chilled milk.",
        "Iced Mocha|29|Chilled coffee with chocolate.",
        "Cold Brew Coffee|26|Slow-steeped cold coffee.",
        "Strawberry Smoothie|27|Blended strawberries and milk.",
        "Mango Smoothie|27|Fresh blended mango drink.",
        "Passion Fruit Mojito|28|Alcohol-free passion fruit and mint.",
        "Fresh Orange Juice|24|Freshly squeezed orange juice.",
        "Iced Matcha Latte|30|Matcha green tea with chilled milk.",
    ],

    // 🍨 ICE CREAM - 10 ITEMS
    "ice-cream": [
        "Vanilla Ice Cream|18|Classic creamy vanilla ice cream.",
        "Chocolate Ice Cream|18|Rich chocolate ice cream.",
        "Strawberry Ice Cream|18|Creamy strawberry ice cream.",
        "Pistachio Ice Cream|22|Nutty pistachio ice cream.",
        "Cookies and Cream Ice Cream|22|Ice cream with cookie pieces.",
        "Salted Caramel Ice Cream|22|Sweet and salty caramel flavour.",
        "Mango Sorbet|20|Refreshing frozen mango dessert.",
        "Lotus Ice Cream|24|Ice cream with Lotus biscuits.",
        "Brownie Sundae|32|Brownie, ice cream and chocolate sauce.",
        "Banana Split|34|Banana with ice cream and toppings.",
    ],

    // ☕ HOT DRINKS - 10 ITEMS
    "hot-drinks": [
        "Espresso|16|A rich shot of espresso.",
        "Double Espresso|20|Two shots of rich espresso.",
        "Americano|20|Espresso with hot water.",
        "Cappuccino|24|Espresso, steamed milk and foam.",
        "Classic Latte|24|Espresso with smooth steamed milk.",
        "Flat White|25|Espresso and silky textured milk.",
        "Spanish Latte|28|Sweet and creamy espresso drink.",
        "Hot Chocolate|26|Rich chocolate with steamed milk.",
        "English Breakfast Tea|18|Classic comforting black tea.",
        "Hot Matcha Latte|28|Matcha green tea with warm milk.",
    ],

    // 🍽️ MAIN DISHES - 10 ITEMS
    mains: [
        "Grilled Chicken|48|Grilled chicken with vegetables.",
        "Chicken Parmesan|52|Breaded chicken with tomato and cheese.",
        "Grilled Salmon|69|Salmon fillet with lemon and vegetables.",
        "Beef Steak|89|Grilled steak with potatoes and sauce.",
        "Fish and Chips|54|Crispy fish with golden fries.",
        "Chicken Rice Bowl|46|Chicken, rice and vegetables.",
        "Beef Rice Bowl|52|Tender beef with rice and sauce.",
        "Chicken Quesadilla|45|Tortilla with chicken and cheese.",
        "Grilled Halloumi Plate|44|Halloumi and vegetables.",
        "Chicken Fajitas|56|Chicken, peppers and soft tortillas.",
    ],
};

// ==========================================
// CATEGORY NAMES
// ==========================================

const categoryNames = {
    pizza: "Pizza",
    burgers: "Burgers",
    pasta: "Pasta",
    starters: "Starters",
    salads: "Salads",
    sides: "Sides",
    sauces: "Sauces",
    desserts: "Desserts",
    "cold-drinks": "Cold Drinks",
    "ice-cream": "Ice Cream",
    "hot-drinks": "Hot Drinks",
    mains: "Main Dishes",
};

// ==========================================
// MENU ELEMENTS
// ==========================================

// Check that we are actually on menu.html.
// This allows script.js to be used by
// other pages without causing errors.

const menuGrid = document.getElementById("menuGrid");

if (menuGrid) {
    const searchInput = document.getElementById("searchInput");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const categoryTitle = document.getElementById("categoryTitle");
    const resultCount = document.getElementById("resultCount");
    const noResults = document.getElementById("noResults");
    const resetMenu = document.getElementById("resetMenu");
    const dessertShortcut = document.getElementById("dessertShortcut");

    let selectedCategory = "all";

    // ======================================
    // CREATE A MENU CARD
    // ======================================

    function createMenuCard(name, price, description, category) {
        const card = document.createElement("article");

        card.className = "complete-menu-card";

        card.innerHTML = `
            <div class="complete-menu-photo">

                <div class="photo-placeholder">
                    <span class="placeholder-flower">✿</span>

                    <strong>${name}</strong>

                    <small>Photo coming soon</small>
                </div>

                <span class="menu-photo-label">
                    ${categoryNames[category]}
                </span>

            </div>

            <div class="complete-menu-info">

                <div class="complete-menu-title">
                    <h3>${name}</h3>
                    <strong>AED ${price}</strong>
                </div>

                <p>${description}</p>

            </div>
        `;

        return card;
    }

    // ======================================
    // DISPLAY MENU
    // ======================================

    function displayMenu() {
        const searchText = searchInput.value.toLowerCase().trim();

        menuGrid.innerHTML = "";

        let visibleCount = 0;

        for (const category in menuData) {
            if (selectedCategory !== "all" && selectedCategory !== category) {
                continue;
            }

            menuData[category].forEach(function (entry) {
                const parts = entry.split("|");

                const name = parts[0];
                const price = parts[1];
                const description = parts[2];

                const searchableText = (name + " " + description + " " + categoryNames[category]).toLowerCase();

                if (!searchableText.includes(searchText)) {
                    return;
                }

                const card = createMenuCard(name, price, description, category);

                menuGrid.appendChild(card);

                visibleCount++;
            });
        }

        // Update result count
        resultCount.textContent = "Showing " + visibleCount + (visibleCount === 1 ? " item" : " items");

        // Update heading
        if (selectedCategory === "all") {
            categoryTitle.textContent = "All Our Favourites.";
        } else {
            categoryTitle.textContent = categoryNames[selectedCategory];
        }

        // Show message when no results found
        noResults.hidden = visibleCount !== 0;
    }

    // ======================================
    // HIGHLIGHT CATEGORY
    // ======================================

    function highlightCategory(category) {
        selectedCategory = category;

        filterButtons.forEach(function (button) {
            const isActive = button.dataset.category === category;

            button.classList.toggle("active", isActive);

            button.setAttribute("aria-pressed", String(isActive));
        });

        displayMenu();
    }

    // ======================================
    // FILTER BUTTONS
    // ======================================

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            highlightCategory(button.dataset.category);
        });
    });

    // ======================================
    // SEARCH BAR
    // ======================================

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            displayMenu();
        });
    }

    // ======================================
    // RESET BUTTON
    // ======================================

    if (resetMenu) {
        resetMenu.addEventListener("click", function () {
            searchInput.value = "";

            highlightCategory("all");
        });
    }

    // ======================================
    // DESSERT SHORTCUT
    // ======================================

    if (dessertShortcut) {
        dessertShortcut.addEventListener("click", function () {
            searchInput.value = "";

            highlightCategory("desserts");
        });
    }

    // ======================================
    // SHOW MENU ON PAGE LOAD
    // ======================================

    highlightCategory("all");
}

// ==========================================
// THE OLIVE TABLE - GALLERY
// Works alongside the Menu in script.js
// ==========================================

(function () {
    // Only run on gallery.html
    const galleryGrid = document.getElementById("galleryGrid");

    if (!galleryGrid) {
        return;
    }

    const galleryItems = [
        {title: "Pizza Moments", category: "food", description: "Fresh pizzas made for sharing."},
        {title: "The Perfect Burger", category: "food", description: "Delicious burgers and comforting flavours."},
        {title: "Pasta Perfection", category: "food", description: "Beautiful pasta dishes."},
        {title: "Made to Share", category: "food", description: "Delicious starters and sharing plates."},

        {title: "Morning Coffee", category: "drinks", description: "The perfect start to your day."},
        {title: "Iced Coffee Moments", category: "drinks", description: "Cool and refreshing coffee."},
        {title: "A Little Matcha", category: "drinks", description: "A calming cup of matcha."},
        {title: "Refreshing Sips", category: "drinks", description: "Drinks for sunny afternoons."},

        {title: "Lotus Cheesecake", category: "desserts", description: "Creamy Lotus cheesecake."},
        {title: "Chocolate Indulgence", category: "desserts", description: "Rich chocolate desserts."},
        {title: "Sweet Little Moments", category: "desserts", description: "Delicious treats made with love."},
        {title: "Ice Cream Dreams", category: "desserts", description: "Sweet and creamy ice cream."},

        {title: "Our Cozy Corners", category: "interior", description: "Warm and welcoming spaces."},
        {title: "A Table for Everyone", category: "interior", description: "Spaces made for connection."},
        {title: "Beautiful Details", category: "interior", description: "Thoughtful interior details."},
        {title: "Stay a Little Longer", category: "interior", description: "A place that feels like home."},
    ];

    const filterButtons = document.querySelectorAll(".gallery-filter");

    const modal = document.getElementById("galleryModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalDescription = document.getElementById("modalDescription");
    const closeButton = document.getElementById("closeGalleryModal");
    const backdrop = document.getElementById("modalBackdrop");

    let selectedCategory = "all";
    let previousFocus = null;

    // ======================================
    // CREATE GALLERY CARDS
    // ======================================

    function showGallery() {
        galleryGrid.innerHTML = "";

        const visibleItems = galleryItems.filter(function (item) {
            return selectedCategory === "all" || item.category === selectedCategory;
        });

        visibleItems.forEach(function (item, index) {
            const card = document.createElement("button");
            card.type = "button";
            card.className = "gallery-card";

            if (index % 7 === 0) {
                card.classList.add("gallery-card-wide");
            }

            card.dataset.category = item.category;

            const picture = document.createElement("div");
            picture.className = "gallery-card-picture";

            const flower = document.createElement("span");
            flower.className = "gallery-card-flower";
            flower.textContent = "✿";

            const placeholder = document.createElement("span");
            placeholder.className = "gallery-card-placeholder";
            placeholder.textContent = "PHOTO COMING SOON";

            picture.append(flower, placeholder);

            const overlay = document.createElement("div");
            overlay.className = "gallery-card-overlay";

            const label = document.createElement("span");
            label.className = "gallery-card-category";
            label.textContent = item.category.toUpperCase();

            const heading = document.createElement("h3");
            heading.textContent = item.title;

            const arrow = document.createElement("span");
            arrow.className = "gallery-card-arrow";
            arrow.textContent = "↗";

            overlay.append(label, heading, arrow);
            card.append(picture, overlay);

            card.addEventListener("click", function () {
                openModal(item);
            });

            galleryGrid.appendChild(card);
        });
    }

    // ======================================
    // FILTER BUTTONS
    // ======================================

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (btn) {
                const active = btn.dataset.filter === selectedCategory;

                btn.classList.toggle("active", active);
                btn.setAttribute("aria-pressed", String(active));
            });

            showGallery();
        });
    });

    // ======================================
    // OPEN POP-UP
    // ======================================

    function openModal(item) {
        previousFocus = document.activeElement;

        modalTitle.textContent = item.title;
        modalCategory.textContent = item.category.toUpperCase();
        modalDescription.textContent = item.description;

        modal.hidden = false;
        document.body.classList.add("gallery-modal-open");

        closeButton.focus();
    }

    // ======================================
    // CLOSE POP-UP
    // ======================================

    function closeModal() {
        modal.hidden = true;
        document.body.classList.remove("gallery-modal-open");

        if (previousFocus) {
            previousFocus.focus();
        }
    }

    closeButton.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);

    document.addEventListener("keydown", function (event) {
        if (modal.hidden) return;

        if (event.key === "Escape") {
            closeModal();
        }

        if (event.key === "Tab") {
            event.preventDefault();
            closeButton.focus();
        }
    });

    // ======================================
    // SHOW GALLERY WHEN PAGE OPENS
    // ======================================

    showGallery();
})();

// ==========================================
// THE OLIVE TABLE - CONTACT PAGE
// Add to the BOTTOM of shared script.js
// ==========================================

(function () {
    function initializeContactForm() {
        const form = document.getElementById("contactForm");

        // Only run on contact.html
        if (!form) return;

        const success = document.getElementById("contactSuccess");
        const preview = document.getElementById("contactMessagePreview");
        const copyButton = document.getElementById("copyContactMessage");
        const copyStatus = document.getElementById("copyMessageStatus");
        const newButton = document.getElementById("newContactMessage");

        let preparedMessage = "";

        // ----------------------------------
        // PREPARE MESSAGE
        // ----------------------------------

        form.addEventListener("submit", function (event) {
            // Stop the page from refreshing
            event.preventDefault();

            // Let browser check required fields
            if (!form.reportValidity()) return;

            const name = document.getElementById("contactName").value.trim();

            const email = document.getElementById("contactEmail").value.trim();

            const phone = document.getElementById("contactPhone").value.trim();

            const subject = document.getElementById("contactSubject").value;

            const message = document.getElementById("contactMessage").value.trim();

            if (!name || !email || !subject || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            // Create a message that can be copied
            preparedMessage =
                "THE OLIVE TABLE - CONTACT ENQUIRY\n\n" +
                "Name: " +
                name +
                "\n" +
                "Email: " +
                email +
                "\n" +
                (phone ? "Phone: " + phone + "\n" : "") +
                "Subject: " +
                subject +
                "\n\n" +
                "Message:\n" +
                message;

            // Display the message as plain text.
            // textContent prevents entered text
            // from becoming executable HTML.
            preview.textContent = preparedMessage;

            // Hide form and show confirmation
            form.hidden = true;
            success.hidden = false;

            copyStatus.textContent = "";

            // Move to message preview
            success.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        });

        // ----------------------------------
        // COPY MESSAGE
        // ----------------------------------

        copyButton.addEventListener("click", async function () {
            try {
                // Clipboard API works in secure contexts,
                // such as localhost or HTTPS.
                if (!navigator.clipboard || !navigator.clipboard.writeText) {
                    throw new Error("Clipboard unavailable");
                }

                await navigator.clipboard.writeText(preparedMessage);

                copyStatus.textContent = "Your message has been copied! ♡";
            } catch (error) {
                // Fallback: select the text so users
                // can manually copy it.
                copyStatus.textContent =
                    "Automatic copying is unavailable. " + "Select the message above and press Ctrl + C.";
            }
        });

        // ----------------------------------
        // WRITE ANOTHER MESSAGE
        // ----------------------------------

        newButton.addEventListener("click", function () {
            form.reset();

            form.hidden = false;
            success.hidden = true;

            preview.textContent = "";
            copyStatus.textContent = "";
            preparedMessage = "";

            document.getElementById("contactName").focus();
        });
    }

    // Run once HTML has loaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeContactForm);
    } else {
        initializeContactForm();
    }
})();
