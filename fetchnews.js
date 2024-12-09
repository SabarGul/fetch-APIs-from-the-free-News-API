const apiKey = 'd987a6252d104ab2b8532fa84b7b20e5'; 
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        
        console.log(data.articles);
        data.articles.forEach(article => {
            console.log(`Title: ${article.title}`);
            console.log(`Description: ${article.description}`);
        });
    })
    .catch(error => {
        console.error('Error fetching news:', error);
    });
