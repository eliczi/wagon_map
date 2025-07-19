// Initialize the map centered on Poland
const map = L.map('map').setView([52.0689, 19.4803], 6);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Polish cities coordinates
const cityCoordinates = {
    'Białystok': [53.1325, 23.1688],
    'Biesal': [53.6183, 20.1818],
    'Busko Zdrój': [50.4724, 20.7197],
    'Bydgoszcz Główna Towarowa': [53.1235, 18.0009],
    'Bydgoszcz Wschód Towarowa': [53.1271, 18.0324],
    'Chojnice': [53.6953, 17.5714],
    'Czeremcha': [52.5087, 23.2321],
    'Czersk': [53.7953, 17.9745],
    'Czerwieńsk': [52.0153, 15.4225],
    'Czerwieńsk Towarowy': [52.0153, 15.4225],
    'Czerwonka': [53.2312, 21.1047],
    'Częstochowa Towarowa': [50.8118, 19.1203],
    'Dąbrowa Górnicza Towarowa': [50.3197, 19.2315],
    'Dęblin': [51.5623, 21.8471],
    'Dęblin Towarowy': [51.5623, 21.8471],
    'Gdynia Port': [54.5330, 18.5180],
    'Gliwice': [50.2945, 18.6714],
    'Głogów': [51.6639, 16.0845],
    'Gniezno': [52.5349, 17.5826],
    'Gorlice Zagórzany': [49.6547, 21.1597],
    'Gorzów Wlkp': [52.7325, 15.2369],
    'Hanulin': [51.3333, 17.9667],
    'Łazy': [50.4270, 19.3967],
    'Iława': [53.5959, 19.5684],
    'Inowrocław': [52.7993, 18.2594],
    'Jabłonowo Pomorskie': [53.2906, 19.2829],
    'Jarocin': [51.9725, 17.5022],
    'Jasło Towarowa': [49.7453, 21.4723],
    'Jaworzno Szczakowa': [50.2370, 19.2775],
    'Jaworzyna Śląska': [50.9167, 16.4333],
    'Kędzierzyn Koźle': [50.3461, 18.2137],
    'Kielce Herbskie': [50.8920, 20.6188],
    'Kluczbork': [50.9736, 18.2181],
    'Konin': [52.2230, 18.2511],
    'Końskie': [51.1914, 20.4087],
    'Kostrzyn': [52.5897, 14.6558],
    'Kowalewo Pomorskie': [53.1533, 18.8975],
    'Kraków Nowa Huta': [50.0692, 20.0533],
    'Kraków Prokocim': [50.0167, 20.0000],
    'Kutno myjnia': [52.2306, 19.3556],
    'Laskowice Pomorskie': [53.4892, 18.4797],
    'Legnica': [51.2070, 16.1619],
    'Lublin Tatary': [51.2500, 22.5833],
    'Łódź Olechów': [51.7592, 19.5170],
    'Malbork': [54.0361, 19.0379],
    'Małaszewicze Rozrządowa': [52.0472, 23.5083],
    'Medyka': [49.8053, 22.9314],
    'Nidzica': [53.3597, 20.4275],
    'Nowy Sącz': [49.6174, 20.7153],
    'Nysa': [50.4747, 17.3328],
    'Olsztyn Główny': [53.7784, 20.4801],
    'Olsztynek': [53.5833, 20.2833],
    'Opole Główne': [50.6645, 17.9276],
    'Opole Groszowice': [50.6333, 17.9500],
    'Ostrów Wielkopolski': [51.6497, 17.8102],
    'Piła Główna': [53.1508, 16.7381],
    'Piotrków Trybunalski': [51.4047, 19.7037],
    'Poznań Franowo': [52.3903, 16.9537],
    'Przeworsk': [50.0569, 22.4969],
    'Ruda Chebzie': [50.3000, 18.8667],
    'Runowo Pomorskie': [53.5833, 15.5333],
    'Sątopy - Samulewo': [54.0500, 20.9833],
    'Skarżysko Kamienna': [51.1142, 20.8700],
    'Spytkowice': [49.9989, 19.5019],
    'Strzelce Opolskie': [50.5111, 18.3006],
    'Szczecin Port Centralny': [53.4289, 14.5550],
    'Szczecinek': [53.7089, 16.6991],
    'Tarnowskie Góry': [50.4453, 18.8614],
    'Tarnów Filia': [50.0128, 20.9879],
    'Toruń Główny': [53.0137, 18.6124],
    'Wałbrzych Fabryczny': [50.7833, 16.2833],
    'Wałbrzych Główny': [50.7847, 16.2845],
    'Warszawa Praga': [52.2500, 21.0444],
    'Węgliniec': [51.2892, 15.2236],
    'Widzów Teklinów': [50.9333, 19.2500],
    'Wrocław Brochów': [51.0700, 17.1075],
    'Zabrzeg Czarnolesie': [49.9333, 18.9667],
    'Zajączkowo Tczewskie': [54.0833, 18.7833],
    'Zbąszynek': [52.2453, 15.8183],
    'Gorzów Wielkopolski': [52.7325, 15.2369],
    'Żagań': [51.6167, 15.3167],
    'Żurawica': [49.8333, 22.8333],
    'Żytkowice': [51.5833, 21.4667]
};

// Function to get circle color based on wagon count
function getCircleColor(count) {
    if (count > 100) return '#FF0000';
    if (count > 50) return '#FFA500';
    if (count > 20) return '#FFFF00';
    return '#00FF00';
}

// Function to get circle radius based on wagon count
function getCircleRadius(count) {
    return Math.max(5, Math.min(20, count / 5));
}

// Function to create wagon table
function createWagonTable(wagons) {
    return `
        <table class="wagon-table">
            <thead>
                <tr>
                    <th>EVN</th>
                    <th>SAT</th>
                    <th>Seria</th>
                    <th>Typ</th>
                    <th>Rok</th>
                    <th>Masa (t)</th>
                    <th>Region</th>
                </tr>
            </thead>
            <tbody>
                ${wagons.map(wagon => `
                    <tr>
                        <td>${wagon.evn}</td>
                        <td>${wagon.sat}</td>
                        <td>${wagon.seria}</td>
                        <td>${wagon.typ}</td>
                        <td>${wagon.rok}</td>
                        <td>${wagon.masa}</td>
                        <td>${wagon.region}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Function to count wagons per location
async function processData() {
    try {
        const response = await fetch('file.csv');
        const data = await response.text();
        
        const wagonCounts = {};
        const wagonDetails = {};
        
        // Process CSV data
        const lines = data.split('\n');
        lines.slice(1).forEach(line => {
            if (line) {
                const columns = line.split(',');
                const location = columns[6].trim();
                
                // Count wagons
                wagonCounts[location] = (wagonCounts[location] || 0) + 1;
                
                // Store wagon details
                if (!wagonDetails[location]) {
                    wagonDetails[location] = [];
                }
                
                wagonDetails[location].push({
                    evn: columns[1],
                    sat: columns[2],
                    seria: columns[3],
                    typ: columns[4],
                    rok: columns[5],
                    masa: columns[7],
                    region: columns[8]
                });
            }
        });

        // Add markers for each location
        Object.entries(cityCoordinates).forEach(([city, coordinates]) => {
            const count = wagonCounts[city] || 0;
            const details = wagonDetails[city] || [];
            
            // Create circle marker
            const circle = L.circleMarker(coordinates, {
                radius: getCircleRadius(count),
                fillColor: getCircleColor(count),
                color: '#000',
                weight: 1,
                opacity: 1,
                fillOpacity: 0.8
            });

            // Create popup content with wagon table
            const popupContent = `
                <div class="popup-content">
                    <h3>${city}</h3>
                    <p>Liczba wagonów: ${count}</p>
                    <div class="wagon-list">
                        ${createWagonTable(details)}
                    </div>
                </div>
            `;

            // Add popup to circle with custom options
            circle.bindPopup(popupContent, {
                maxWidth: 800,
                maxHeight: 400,
                className: 'custom-popup'
            });
            
            // Add hover effect
            circle.on('mouseover', function(e) {
                this.setStyle({
                    fillOpacity: 1,
                    weight: 2
                });
            });
            
            circle.on('mouseout', function(e) {
                this.setStyle({
                    fillOpacity: 0.8,
                    weight: 1
                });
            });

            circle.addTo(map);
        });

        // Add legend
        const legend = L.control({position: 'bottomright'});
        legend.onAdd = function(map) {
            const div = L.DomUtil.create('div', 'legend');
            div.innerHTML = `
                <h4>Liczba wagonów</h4>
                <div><span style="background: #00FF00"></span> 0-20</div>
                <div><span style="background: #FFFF00"></span> 21-50</div>
                <div><span style="background: #FFA500"></span> 51-100</div>
                <div><span style="background: #FF0000"></span> >100</div>
            `;
            return div;
        };
        legend.addTo(map);

    } catch (error) {
        console.error('Error processing data:', error);
    }
}

// Add zoom controls
map.addControl(new L.Control.Zoom());

// Process the data when the page loads
processData(); 