import requests
from bs4 import BeautifulSoup

url = "https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub"
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')
data = []

for row in soup.find_all('tr')[1:]:
    cells = row.find_all('td')
    if len(cells) == 3:  
        x = cells[0].text.strip()
        char = cells[1].text.strip()
        y = cells[2].text.strip()
        data.append((x, char, y))

print(data)

data = [(int(x), char, int(y)) for x, char, y in data]

max_x = max(x for x, _, _ in data) + 1
max_y = max(y for _, _, y in data) + 1

grid = [[' ' for _ in range(max_x)] for _ in range(max_y)]

for x, char, y in data:
    grid[max_y - y - 1][x] = char 

for row in grid:
    print("".join(row))

