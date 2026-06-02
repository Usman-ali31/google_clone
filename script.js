document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const luckyBtn = document.getElementById('lucky-btn');

    const performSearch = () => {
        const query = searchInput.value;
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    };

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    luckyBtn.addEventListener('click', () => {
        window.location.href = "https://www.google.com/doodles";
    });
});