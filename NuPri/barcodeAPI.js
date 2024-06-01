document.getElementById('scanButton').addEventListener('click', function() {
    const barcode = document.getElementById('barcodeInput').value;
    fetchNutritionData(barcode);
});

function fetchNutritionData(barcode) {
    fetch(`https://world.openfoodfacts.net/api/v2/product/${barcode}?fields=product_name,nutriscore_data`)
        .then(response => response.json())
        .then(data => {
            if (data.status === 1) {
                displayNutritionData(data.product.nutriments);
            } else {
                document.getElementById('nutritionInfo').innerHTML = 'Product not found';
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function displayNutritionData(nutriments) {
    let htmlContent = '<h3>Nutritional Information</h3>';
    for (const [key, value] of Object.entries(nutriments)) {
        htmlContent += `<p><b>${key}</b>: ${value}</p>`;
    }
    document.getElementById('nutritionInfo').innerHTML = htmlContent;
}
