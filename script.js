 // Cria o mapa com coordenadas iniciais e zoom
 var mapa = L.map('mapa').setView([-23.550520, -46.646732], 13); // Latitude e longitude de São Paulo

 // Adiciona o mapa de tiles do OpenStreetMap
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(mapa);

 // Adiciona um marcador customizado
 var marcador = L.marker([-23.550520, -46.646732]).addTo(mapa)
     .bindPopup("<b>São Paulo</b><br>Centro de São Paulo.") // Pop-up no marcador
     .openPopup();

 // Personalizando o estilo do mapa com uma camada diferente (por exemplo, uma camada de relevo)
 L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors'
 }).addTo(mapa); // Mudança do tipo de camada para OpenTopoMap (relevo)

 // Adicionando mais interatividade - por exemplo, alterando o estilo do mapa após o clique
 mapa.on('click', function(e) {
     var lat = e.latlng.lat.toFixed(5);
     var lon = e.latlng.lng.toFixed(5);
     alert("Você clicou no mapa em " + lat + ", " + lon);
 });