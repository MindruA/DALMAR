// script.js

window.addEventListener('load', () => {
    // Inițializăm variabilele pentru elementele de animație
    const truck = document.getElementById('truck');
    const goods = document.getElementById('goods');
    const money = document.getElementById('money');
    const stars = document.getElementById('stars');
    
    // Așteptăm finalizarea animației camionului
    truck.addEventListener('animationend', () => {
        // Animația pentru marfă
        goods.style.animation = 'goodsToMoney 2s forwards';
        
        // După ce marfa dispare, facem bani vizibili și începem animația pentru stele
        goods.addEventListener('animationend', () => {
            money.style.opacity = 1;
            setTimeout(() => {
                money.style.animation = 'moneyToStars 2s forwards';
                
                // După ce banii devin stele
                money.addEventListener('animationend', () => {
                    stars.style.opacity = 1;
                });
            }, 1000); // Delay pentru tranziția dintre bani și stele
        });
    });
});
