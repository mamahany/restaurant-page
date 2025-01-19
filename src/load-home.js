import image from "./assets/food.jpg";
export default  function loadHome(){
    const content = document.querySelector("#content");
    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("class", "home");
    homeDiv.innerHTML = `
            <h1>Amazing turkish food</h1>
            <img src="${image}" alt="">
            <p>Step into a world of rich flavors, vibrant spices, and the warm hospitality of Turkey. At [Restaurant Name], we bring you the authentic taste of Turkish cuisine, crafted with traditional recipes and the finest ingredients.
                Savor a diverse menu that showcases the best of Turkey’s culinary heritage, from sizzling kebabs and savory gözleme to hearty stews and fresh mezes. Don’t forget to indulge in our signature desserts like baklava and kunefe, paired perfectly with a cup of Turkish tea or aromatic coffee.
            
                Our cozy, welcoming atmosphere is the perfect setting for family gatherings, romantic dinners, or simply a delicious meal with friends. Let us transport you to the bustling streets of Istanbul and the serene coastal villages of Turkey with every bite.
            
                Discover the soul of Turkey at [Restaurant Name].
                Your table is ready—come and experience flavors that tell a story.</p>`;
    content.appendChild(homeDiv);
}