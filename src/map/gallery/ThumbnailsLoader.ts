function loadThumbnail(url: string) {
    return fetch(url, {
              headers : {
                'Content-Type': 'image/png',
                'Accept': 'image/png'
               }
            })
            .then(function(response){
              return response.blob();
            })
            .then(function(blob) {
              return URL.createObjectURL(blob);
            })
            .catch((error) => console.error(error));
}

export default loadThumbnail;