const ulList = document.getElementById("links-ul-list");
const linkButton = document.getElementById("link-button");
const linkErrorMessage = document.getElementById("link-error-message");

function addLink(){
    const titleInput = document.getElementById("title-input").value;
    const urlInput = document.getElementById("url-input").value;

    if(titleInput == "" || urlInput == ""){
        linkErrorMessage.style.display = "block";
        linkErrorMessage.innerHTML = "Debes rellenar los dos campos";
        return;
    };

    linkErrorMessage.style.display = "none";

    const li = document.createElement("li");
    const link = document.createElement("a");
    const deleteButton = document.createElement("button");

    let croppedTitle = titleInput;
    if (croppedTitle.length > 10){
        croppedTitle = croppedTitle.substring(0, 10) + "...";
    };

    link.href = urlInput;
    link.target = "_blank";
    link.innerHTML = croppedTitle;
    link.title = titleInput;

    deleteButton.innerHTML = "x";

    deleteButton.addEventListener("click" , () => deleteLink(li, titleInput, urlInput));

    li.appendChild(link);
    li.appendChild(deleteButton);
    ulList.appendChild(li);

    saveLink(titleInput, urlInput);

};

linkButton.addEventListener("click", addLink);

function saveLink(title, url) {
    let links = JSON.parse(localStorage.getItem("links"));

    if(links === null) {
        links = [];
    };
   
    links.push({"title": title, "url": url});

    localStorage.setItem("links", JSON.stringify(links));
};

function loadLink() {
    let links = JSON.parse(localStorage.getItem("links"));
   
    if (links === null){
        links = [];
    };

    links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const deleteButton = document.createElement("button");

        a.innerHTML = link.title;
        a.href = link.url;
        a.target = "_blank";

        deleteButton.innerHTML = "x";

        deleteButton.addEventListener("click" , () => deleteLink(li, link.title, link.url));

        li.appendChild(a);
        li.appendChild(deleteButton);
        ulList.appendChild(li);
    });
};

function deleteLink(li, title, url) {
    li.remove();

    let links = JSON.parse(localStorage.getItem("links"));
   
    if (links === null){
        links = [];
    };

    const savedLinks = links.filter(link => link.title !== title || link.url !== url);
   
    localStorage.setItem("links", JSON.stringify(savedLinks));
};

loadLink();
