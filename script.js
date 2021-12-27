function displayItems(display, elem) {
    elem.style.display = "flex";

    if (display === 'center') {
        elem.style.alignItems = "center";
        elem.style.justifyContent = "center";
    }
    if (display === "space-between") {
        elem.style.alignItems = "center";
        elem.style.justifyContent = "space-between";
    }
    return elem;
}

function myFunction() {

    let headerDiv = document.createElement("DIV");
    headerDiv.style.width = "100%";
    headerDiv.style.backgroundColor = "#212121";
    headerDiv.style.textAlign = "center";
    headerDiv.style.padding = "20px  0px";

    let headerTag = document.createElement("DIV");
    headerTag.innerHTML = "Art Hub";
    headerTag.style.color = "white"
    headerTag.style.fontSize = "25px ";
    headerDiv.appendChild(headerTag);
    document.body.appendChild(headerDiv);

    // creating first section

    let firstDiv = document.createElement("DIV");
    firstDiv.style.backgroundImage = "url('images/wall.jpg')";
    firstDiv.style.backgroundRepeat = "no-repeat";
    firstDiv.style.backgroundSize = "cover";
    firstDiv.style.backgroundPosition = "center";
    firstDiv.style.height = "500px";
    firstDiv.style.width = "100%";
    firstDiv.style.display = "flex";
    firstDiv.style.justifyContent = "center";
    firstDiv.style.alignItems = "center";

    let centerTag = document.createElement("DIV");
    centerTag.style.height = "200px";
    centerTag.style.width = "50%";
    centerTag.style.border = "1px solid white";
    centerTag.style.fontSize = "25px";
    centerTag.style.color = "white";
    centerTag.innerHTML = "Some people are Artist, some themselves are Art";
    centerTag.style.fontFamily = "serif";

    centerTag.style.display = "flex";
    centerTag.style.justifyContent = "center";
    centerTag.style.alignItems = "center";
    firstDiv.appendChild(centerTag);
    document.body.appendChild(firstDiv);
}

// artworks
function mySection(display, ele) {
    ele.style.display = "block";

    if (display === 'center') {
        ele.style.justifyContent = "center";
        ele.style.backgroundColor = "white";
        ele.style.color = "black";
    }
    if (display === 'space-between') {
        ele.style.alignItems = "center";
        ele.style.justifyContent = "space-between";
        ele.style.color = "gray";
        ele.style.backgroundColor = "black";
        ele.style.width = "100%";
        ele.style.textAlign = "center";
    }
    return ele;
}

function artworks() {

    let secondDiv = document.createElement("DIV");
    secondDiv = mySection('space-between', secondDiv);
    secondDiv.id = "artworks";
    secondDiv.style.padding = "20px 0";

    let heading = document.createElement("h1");
    heading.innerHTML = "Artworks";
    secondDiv.appendChild(heading);

    let gallery = document.createElement("DIV");
    gallery = mySection('center', gallery)
    gallery.style.display = "flex";
    gallery.style.padding = "30px 30px";
    secondDiv.appendChild(gallery);

    let artworks = [
        { 'src': "images/2.jpg" },
        { 'src': "images/3.jpg" },
        { 'src': "images/4.jpg" },
        { 'src': "images/6.jpg" },
    ]
    
    artworks.forEach(index => {
        let centerDiv = document.createElement("img");
        centerDiv.src = index.src;
        centerDiv.style.width = "25%";
        gallery.appendChild(centerDiv);
    });
    document.body.appendChild(secondDiv);
}

function footer() {
    let footerDiv = document.createElement("DIV");

    footerDiv.style.width = "100%";
    footerDiv.style.height = "100px";
    footerDiv.style.backgroundColor = "black";

    let footerContent = document.createElement("Div");

    footerContent.innerHTML = "© Copyright by ArtHub | All rights reserved"
    footerContent.style.color = "gray";
    footerContent.style.fontSize = "25px";
    footerContent.style.paddingTop = "20px";
    footerContent.style.textAlign = "center";
    footerContent.style.fontFamily = "serif";

    footerDiv.appendChild(footerContent);
    document.body.appendChild(footerDiv);
}

function renderPage() {
    myFunction();
    artworks();
    footer();
}
