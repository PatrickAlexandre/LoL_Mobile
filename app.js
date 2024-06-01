document.addEventListener('DOMContentLoaded', () => {
    const championsContainer = document.getElementById('champions');
    const searchInput = document.getElementById('search');
    let allChampions = [];

    const apiUrl = 'https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json';

    const fetchChampions = async () => {
        try {
            const response = await axios.get(apiUrl);
            allChampions = Object.values(response.data.data);
            displayChampions(allChampions);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const displayChampions = (champions) => {
        championsContainer.innerHTML = '';
        champions.forEach(champion => {
            const championCard = document.createElement('div');
            championCard.className = 'bg-gray-800 p-4 rounded-lg shadow-lg';

            championCard.innerHTML = `
                <h2 class="text-2xl font-bold mb-2">${champion.name}</h2>
                <p class="text-sm">${champion.title}</p>
                <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg" alt="${champion.name}" class="w-full h-auto mt-4 rounded-lg">
            `;

            championsContainer.appendChild(championCard);
        });
    };

    const filterChampions = (searchTerm) => {
        const filteredChampions = allChampions.filter(champion => 
            champion.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        displayChampions(filteredChampions);
    };

    searchInput.addEventListener('input', (event) => {
        filterChampions(event.target.value);
    });

    fetchChampions();
});
