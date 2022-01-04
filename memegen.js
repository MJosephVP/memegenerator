const form = document.forms[0];
const gallery = document.querySelector('.meme-gallery');
let currentID = 1000;

form.addEventListener("submit", memeOperation)
gallery.addEventListener("click", selfDestruct)



form.addEventListener("formdata", event => {
    currentID++;
    const data = event.formData;

    const values = [...data.values()];
    console.log(values);

    let memeTile = create_memeTile(currentID);
    
    memeTile.appendChild(create_d1(values.shift()))
    memeTile.appendChild(create_d2(values.shift()))
    memeTile.appendChild(create_img(values.shift()))
    memeTile.appendChild(create_deleteButton())

    gallery.appendChild(memeTile);
    

    // event.formData grabs the object
    const entries = [...data.entries()];
    console.log(entries);



    

    function create_d1(activeText) {
        let d1 = document.createElement('div');
        d1.innerHTML = activeText;
        d1.className = 'active-top-text';
        return d1
    }

    function create_d2(activeText) {
        let d2 = document.createElement('div');
        d2.innerHTML = activeText;
        d2.className = 'active-bottom-text';
        return d2
    }

    function create_img(activeText) {
        let img1 = document.createElement('img');
        img1.src = activeText;
        img1.className = 'meme-image';
        return img1
    }

    function create_memeTile(currentID) {
        let tile1 = document.createElement('div');
        tile1.id = currentID
        tile1.className = 'meme-tile';
        return tile1
    }

    function create_deleteButton() {
        let dele1 = document.createElement('button');
        dele1.className = 'delete-button'
        dele1.type = "button";
        dele1.innerHTML = "X"
        return dele1
    }
});

function memeOperation(e) {
    e.preventDefault();
    new FormData(form);
    e.target.reset();
    // console.log("Let's look at the event object!", e);
}

function selfDestruct(e){
    if (e.target.className == "delete-button") {
        e.target.parentNode.remove();  
    }
}