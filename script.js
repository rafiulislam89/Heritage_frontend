

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");

    // Toggle navigation menu on button click
    toggleButton.addEventListener("click", function() {
        navMenu.classList.toggle("hidden");
    });
});


document.addEventListener('DOMContentLoaded', function () {
    
    const findPropertyButton = document.getElementById('findPropertyButton');
    const findPropertyButton2 = document.getElementById('findPropertyButton2');

   
    function handleFindPropertyClick() {
       
        alert('Redirecting to property search page...');
        window.location.href = 'property-listing.html'; // Redirects to a new page (adjust URL as needed)
    }

    // Add click event listeners for both buttons
    if (findPropertyButton) {
        findPropertyButton.addEventListener('click', handleFindPropertyClick);
    }

    if (findPropertyButton2) {
        findPropertyButton2.addEventListener('click', handleFindPropertyClick);
    }
});



  document.getElementById('findPropertyButton').addEventListener('click', function() {
    window.location.href = 'buyerPage.html'; // Redirect to the buyer page
  });
  
  /
  document.getElementById('findPropertyButton2').addEventListener('click', function() {
    window.location.href = 'buyerPage.html'; // Redirect to the buyer page
  });
  

  // buyer page

  document.getElementById('find-property').addEventListener('click', function() {
    const location = document.querySelector('.search-box input[type="text"]').value;
    const propertyType = document.querySelector('.search-box select').value;
    const budget = document.querySelector('.search-box input[type="number"]').value;

    if (!location || !propertyType || !budget) {
        alert("Please fill in all fields.");
        return;
    }

    const queryString = `?location=${encodeURIComponent(location)}&propertyType=${encodeURIComponent(propertyType)}&budget=${encodeURIComponent(budget)}`;
    
    window.location.href = 'index.html' + queryString;
});


/

// Fetch property data from the PHP backend
function fetchProperties() {
    fetch('get_properties.php')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle your property data here
            // You can update your UI with the property data here
        })
        .catch(error => console.error('Error:', error));
}

// Call the fetchProperties function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    fetchProperties(); // Fetch properties when the page loads
});


