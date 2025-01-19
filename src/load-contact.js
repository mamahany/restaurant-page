export default  function loadContact(){
    const content = document.querySelector("#content");
    const contactDiv = document.createElement("div");
    contactDiv.setAttribute("class", "contact");
    contactDiv.innerHTML = `  <div class="contact">
            <form>
                <h1>Send us a message</h1>
                <div><label for="email"></label><input placeholder="you@example.com" id="email" type="email"></div>
                <div><label for="msg"></label><textarea rows="8" placeholder="Write your message..." id="msg" type="text"></textarea></div>
                <a>Send</a>
            </form>
        </div>`;
    content.appendChild(contactDiv);
}