async function getNews() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=e57e4e7d-ec97-4648-9983-88a9ce249ff6&offset=0")
        .then(data => data.json()).then(data => {
            if (data.status != "success") {
                console.log("An unexpected error occured!");
                return;
            }
            
            const matches = data.data;  

            const news = matches.map(match => `${match.name}` + ", " + `${match.status}`);
            console.log(news); 
            document.getElementById("updatedmatches").innerHTML = 
                news.map(match => `<li>${match}</li>`).join('');
                return 0;
        })

}

getNews();