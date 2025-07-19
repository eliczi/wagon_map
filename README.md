# Polish Railway Wagon Map

An interactive map showing the locations and details of railway wagons across Poland. The map displays wagon counts at different locations and provides detailed information about each wagon when clicking on a location.

## Features

- Interactive map with location markers
- Color-coded markers based on wagon count:
  - Green: 0-20 wagons
  - Yellow: 21-50 wagons
  - Orange: 51-100 wagons
  - Red: >100 wagons
- Detailed wagon information in a table format
- Scrollable popup windows with wagon details
- Responsive design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet.js for map visualization

## Setup

1. Clone the repository:
```bash
git clone https://github.com/eliczi/wagon_map.git
```

2. Navigate to the project directory:
```bash
cd wagon_map
```

3. Start a local server (e.g., using Python):
```bash
python3 -m http.server 8000
```

4. Open your browser and visit:
```
http://localhost:8000
```

## Data Structure

The wagon data is stored in `file.csv` with the following columns:
- EVN (European Vehicle Number)
- SAT Number
- Series
- Type
- Build Year
- Location
- Mass (tons)
- Region

## License

MIT License 