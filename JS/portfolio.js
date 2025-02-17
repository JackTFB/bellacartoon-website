async function fetchPortfolioImages() {
    const repoOwner = 'JackTFB';
    const repoName = 'bellacartoon-website';
    const path = 'Assets/Images/Portfolio';
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${path}`;
    const spinner = document.querySelector('.spinner');
    const portfolio = document.querySelector('.portfolio');


    try {
        spinner.style.display = 'block';
        const response = await fetch(url);
        const data = await response.json();
        spinner.style.display = 'none';



        for (let index = data.length - 1; index >= 0; index--) {
            const file = data[index];
            if (file.type === 'file' && file.name.match(/\.(jpe?g|png|gif)$/)) {
                const portfolioitem = document.createElement('div');
                portfolioitem.className = 'portfolioitem';
                portfolioitem.style.animationDelay = `${(data.length - index) * 0.3}s`;
                const img = document.createElement('img');
                img.src = file.download_url;
                img.alt = file.name;
                img.classList.add('portfolioimage');
                img.style.display = 'block';
                portfolioitem.appendChild(img);
                portfolio.appendChild(portfolioitem);


            }
        }
    }
    catch (error) {
        console.error('Error fetching images:', error);
        const portfolio = document.querySelector('.portfolio');
        portfolio.innerHTML = '<p>Failed to load images. Please try again later.</p>';
    }
}