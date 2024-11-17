// Tablica obiektów
const tablicaObiektow = [
    {
        imie: "Jan",
        wiek: 25,
        zawod: "Programista"
    },
    {
        imie: "Anna",
        wiek: 30,
        zawod: "Designer"
    },
    {
        imie: "Piotr",
        wiek: 28,
        zawod: "Manager"
    }
];

// Nasłuchiwanie na kliknięcie przycisku
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('pokazDane').addEventListener('click', function() {
        let wynik = '';
        
        tablicaObiektow.forEach((obiekt, index) => {
            wynik += `<div class="card mb-3 p-3">`;
            wynik += `<h5>Obiekt ${index + 1}:</h5>`;
            for (const [klucz, wartosc] of Object.entries(obiekt)) {
                wynik += `<p class="mb-1">${klucz}: ${wartosc}</p>`;
            }
            wynik += `</div>`;
            
            // Logowanie w konsoli
            console.log(`Obiekt ${index + 1}:`);
            for (const [klucz, wartosc] of Object.entries(obiekt)) {
                console.log(`${klucz}: ${wartosc}`);
            }
            console.log('-------------------');
        });
        
        document.getElementById('wynikDanych').innerHTML = wynik;
    });
});