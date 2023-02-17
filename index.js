const btn =document.getElementById("btn");
const animeContainer = document.querySelector(".anime-container")
const animeImg = document.querySelector(".anime-img")
const animeName = document.querySelector(".anime-name")

btn.addEventListener("click",async function(){
    try {
        // before fetching api we add loading effect code
        btn.disabled=true;
        btn.innerText = "Loading...";
        animeName.innerText ="Updating...";
        animeImg.src ="rolling.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data =await response.json();
        // after fetching we add information fetched from api 
        btn.disabled=false;
        btn.innerText = "GET ANIME";
        // console.log(data);
        animeContainer.style.display ="block";
        animeImg.src =data.url;
        animeName.innerText = data.artist;
        // await help to stop going to next code until the fetching finish 
        // to use await we need to change the function to asynchronous function 
    } catch (error) {
        console.log(error);
        btn.disabled=false;
        btn.innerText = "GET ANIME";
        animeName.innerText ="an error happened,please try again";
    }
})