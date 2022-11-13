function LoadVisitedStats() {
    return fetch('travel_stats.json', {
              headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
            })
            .then(function(response){
              return response.json();
            })
            .then(function(json) {
              return json;
            })
            .catch((error) => console.error(error));
}

export default LoadVisitedStats;