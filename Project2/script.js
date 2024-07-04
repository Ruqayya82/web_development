document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();
    updateTotalPrice();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));
            cart.push({ name: productName, price: productPrice });
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Product added to cart');
            updateCartCount();
            updateTotalPrice();
        });
    });

    document.getElementById('viewCart').addEventListener('click', function() {
        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = '';
        cart.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button class="btn btn-danger remove-from-cart" data-index="${index}">Remove</button></td>
            `;
            cartItems.appendChild(row);
        });
        $('#cartModal').modal('show');

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCartCount();
                updateTotalPrice();
                $(this).closest('tr').remove();
            });
        });
    });

    document.getElementById('checkoutForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

        alert(`Order placed successfully\nName: ${name}\nEmail: ${email}\nTotal Price: $${totalPrice.toFixed(2)}`);
        localStorage.clear();
        location.reload();
    });

    function updateCartCount() {
        document.getElementById('cartCount').textContent = cart.length;
    }

    function updateTotalPrice() {
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('totalPrice').value = `$${totalPrice.toFixed(2)}`;
    }
});
