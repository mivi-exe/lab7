const img = document.getElementById("pic_swap");


async function getDog() {
    const response_dog = await fetch("https://dog.ceo/api/breeds/image/random");
    const response_json_dog = await response_dog.json();
    return response_json_dog.message;
}

async function changeDog() {
    const random_dog = await getDog();
    img.src = random_dog;
    console.log(`Pic changed to: ${random_dog}`);
}



async function getCat() {
    const cat_url = "https://api.thecatapi.com/v1/images/search?api_key=live_Y9885Hbl3xgw8cdNAcX1JgIIPVtbdxHHfwXUSmDMdkTfNgkh6xCoVHeWHuXOzC6F";

      const response_cat = await fetch(cat_url);
      const response_json_cat = await response_cat.json();
      return response_json_cat[0].url;
} 


async function changeCat() {
    const random_cat = await getCat();
    img.src = random_cat;
    console.log(`Pic changed to: ${random_cat}`);
}
