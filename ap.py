import requests
from bs4 import BeautifulSoup

url = "https://docs.google.com/document/d/e/2PACX-1vRMx5YQlZNa3ra8dYYxmv-QIQ3YJe8tbI3kqcuC7lQiZm-CSEznKfN_HYNSpoXcZIV3Y_O3YoUB1ecq/pub"
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')
data = []

# Extract x, y coordinates and characters
for row in soup.find_all('tr'):
    cells = row.find_all('td')
    if len(cells) == 3:
        x = int(cells[0].text.strip())
        y = int(cells[2].text.strip())
        char = cells[1].text.strip()
        data.append((x, y, char))

# Find grid size
max_x = max([x for x, _, _ in data]) + 1
max_y = max([y for _, y, _ in data]) + 1

# Create an empty grid
grid = [[' ' for _ in range(max_x)] for _ in range(max_y)]

# Fill the grid with characters
for x, y, char in data:
    grid[y][x] = char

# Print the grid
for row in grid:
    print("".join(row))
