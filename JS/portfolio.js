async function fetchPortfolioImages() {
    const repoOwner = 'JackTFB';
    const repoName = 'bellacartoon-website';
    const path = 'Assets/Images/Portfolio';
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;

    const response = await fetch(url);
    const data = await response.json();

    const portfolio = document.getElementsByClassName('portfolio');
    portfolio.innerHTML = '';

    data.forEach((file => {
        if (file.type === 'file' && file.name.match(/\.(jpe?g|png|gif)$/)) {
            const portfolioitem = document.createElement('div');
            portfolioitem.className = 'portfolio-item';
            const img = document.createElement('img');
            img.src = file.download_url;
            img.alt = file.name;
            img.classList.add('portfolio-image');
            portfolioitem.appendChild(img);
            portfolio.appendChild(portfolioitem);
        }
    }))
}