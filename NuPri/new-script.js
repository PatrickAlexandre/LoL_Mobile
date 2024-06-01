 function voirPrix() {
    var codeBarre = document.getElementById('codeBarre').value;
    if (codeBarre === '') {
        alert("Veuillez entrer un code barre");
        return;
    }
    for (var i = 1; i <= 5; i++) {
        var fournisseur = document.getElementById('fournisseur' + i);
        if (fournisseur.checked) {
            var url = fournisseur.value + codeBarre;
            window.open(url, '_blank');
        }
    }
}
