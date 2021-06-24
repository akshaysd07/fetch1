var randomWord="https://random-word-api.herokuapp.com//word?number=1";
                
var giphy="https://api.giphy.com/v1/gifs/search?api_key=Wnt5jUvg9o8Laqnc8O50ZBJJ4PfpYF6U&limit=1&offset=0&rating=g&lang=en";

fetch(randomWord)
.then(resp=>{
    return resp.json();
})
.then((result) =>{
    let word = result[0];
    return fetch(giphy + "&q=" + word);
})
.then((resp1) => {
    return resp1.json();
})
.then((result1) => {
        //console.log(result1.data[0].images.original.url);
        let object = document.createElement("object");
        object.data=result1.data[0].images.original.url;
        document.body.append(object);
    })
    .catch((error)=>{
        console.log(error)
    });
