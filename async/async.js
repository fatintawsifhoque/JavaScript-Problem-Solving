async function fe() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data.title); 
    }
    catch(err) {
        console.log("error");
    }
}

fe();