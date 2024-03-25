function calculatePrice() {
    const country = document.getElementById('country').value;
    const hasMembership = document.querySelector('input[name="membership"]:checked').value;

    let price = 100; // Base price

    // Adjust price based on country
    switch (country) {
        case 'India':
             price += 200;
        case 'USA':
            price += 100;
            break;
        case 'UK':
            price += 180;
            break;
        case 'Canada':
            price += 220;
            break;
        case 'Australia':
            price += 250;
            break;
       
    }

    // Adjust price based on membership
    if (hasMembership === 'yes') {
        price -= 20; // Assuming a discount of 20/- for members
    }

    document.getElementById('totalPrice').textContent = '$' + price;
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes
    // You can handle form submission here, like sending data to server
    alert('Form submitted successfully!');
});

