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

async function fe1() {
    try {
        let responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let responseUser = await fetch("https://jsonplaceholder.typicode.com/users/1");
        let dataPost = await responsePost.json();
        let dataUser = await responseUser.json();
        console.log(dataPost.title); 
        console.log(dataUser.name); 
    }
    catch(err) {
        console.log("error");
    }
}

fe1();