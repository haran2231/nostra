// Search

// Product container
var products = document.getElementById("product_search");
// Search input
var search = document.getElementById("search");
// Product list 
var productlist = document.querySelectorAll("#product_search > div");

search.addEventListener("keyup", function(event) {
    // console.log(event);
    var enteredValue = event.target.value.toUpperCase();
    // console.log(enteredValue.indexOf("a"));

    for (var count = 0; count < productlist.length; count++) {
        // console.log(productlist);
        var productName = productlist[count].querySelector("p").textContent.toUpperCase();
        // console.log(productName);
        // console.log(productName.indexOf(enteredValue));
        if (productName.indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});



// checkbox 

document.addEventListener('DOMContentLoaded', function () {
    // Select the filter section and all product elements
    const filterSection = document.querySelector('.filter-section');
    const products = document.querySelectorAll('.product');

    // Add an event listener to the filter section that triggers on any change (e.g., checkbox toggle)
    filterSection.addEventListener('change', function () {
        // Object to store selected filter options
        const selectedFilters = {
            occasion: [],
            color: [],
            arrivals: []
        };

        // Select all checked checkboxes within the filter section
        filterSection.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
            // console.log(checkbox.parentElement.previousElementSibling.textContent.includes('Occasion'));
            // console.log(checkbox.value);
            // Determine the filter category based on the text content of the previous sibling element (h3)
            if (checkbox.parentElement.previousElementSibling.textContent.includes('Occasion')) {
                // Add the value of the checkbox to the 'occasion' array
                selectedFilters.occasion.push(checkbox.value);
            } else if (checkbox.parentElement.previousElementSibling.textContent.includes('Colors')) {
                // Add the value of the checkbox to the 'color' array
                selectedFilters.color.push(checkbox.value);
            } else if (checkbox.parentElement.previousElementSibling.textContent.includes('Arrivals')) {
                // Add the value of the checkbox to the 'arrivals' array
                selectedFilters.arrivals.push(checkbox.value);
            }
        });

        // Iterate over all products to show/hide them based on the selected filters
        products.forEach(product => {
            const occasion = product.getAttribute('data-occasion');
            const color = product.getAttribute('data-color');
            const arrival = product.getAttribute('data-arrival');

            // Check if the product matches all selected filters
        //    console.log(selectedFilters.occasion.length);
            let occasionMatch = true;
            if (selectedFilters.occasion.length) {
                occasionMatch = selectedFilters.occasion.includes(occasion);
                console.log(occasionMatch = selectedFilters.occasion.includes(occasion));
            }

            let colorMatch = true;
            if (selectedFilters.color.length) {
                colorMatch = selectedFilters.color.includes(color);
            }

            let arrivalMatch = true;
            if (selectedFilters.arrivals.length) {
                arrivalMatch = selectedFilters.arrivals.includes(arrival);
            }
            // Show the product if it matches all filters, otherwise hide it
            if (occasionMatch && colorMatch && arrivalMatch) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
