document.getElementById('scanButton').addEventListener('click', function() {
    var barcode = document.getElementById('barcodeInput').value;
    fetch(`https://world.openfoodfacts.net/api/v2/product/${barcode}?fields=product_name,nutriscore_data`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 1 && data.product) {
                displayNutritionInfo(data.product);
            } else {
                alert("Produit non trouvé");
            }
        })
        .catch(error => console.error('Erreur:', error));
});

function displayNutritionInfo(product) {
    var nutritionInfoDiv = document.getElementById('nutritionInfo');
    nutritionInfoDiv.innerHTML = `
        <h3>${product.product_name}</h3>
        <p>Nutri-Score: ${product.nutriscore_data ? product.nutriscore_data.grade.toUpperCase() : 'Non disponible'}</p>
    `;
}
