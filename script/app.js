let products = JSON.parse(localStorage.getItem('products')) || [];

document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let price = document.getElementById('price').value;

    let product = { name, amount: parseInt(amount), price: parseFloat(price)};
    products.push(product);

    localStorage.setItem('products', JSON.stringify(products));

    updateProductList();
    calculateTotalCost();
    this.reset();
});

function updateProductList() {
    let productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((product) => {
        let li = document.createElement('li');
        li.classList.add('alert');
        li.textContent = `${product.name} - Amount: ${product.amount}, Price: ${product.price}`;
        productList.appendChild(li);
    });


    let listItems = productList.getElementsByTagName('li');
    if (listItems.length > 0) {
        listItems[0].style.backgroundColor = 'green';
        listItems[listItems.length - 1].style.backgroundColor = 'red'; 
    }
}

function calculateTotalCost() {
    let totalCost = products.reduce((sum, product) => sum + (product.amount * product.price), 0);
    document.getElementById('totalCost').textContent = `Total Cost: ${totalCost}`;
}

updateProductList();
calculateTotalCost();

