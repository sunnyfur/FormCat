let avatar;
const subm = (e) => {
    e.preventDefault();

    let cat = new Cat();
    cat.name = document.querySelector("#idNamePet").value;
    cat.growth = document.querySelector("#idGrowth").value;
    cat.breed = document.querySelector("#idBreed").value;
    cat.feed = [...document.querySelectorAll("input[name='feed']:checked")].map((elem) => elem.value);
    cat.gender = document.querySelector("input[name='maleFemale']:checked").value;
    cat.comment = document.querySelector("#idComment").value;
    cat.photo = avatar;
    console.log(cat);

    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: new FormData(e.target)
        })
        .then(response => response.json())
        .then(form => {
            console.log(form);
        })
        .catch(error => console.log(error));

};

document.getElementById("idPhoto").addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    // при успешном завершении операции чтения
    reader.onload = (function (file) {
        return function (e) {
            const r = e.target;
            // получаем содержимое файла, состояние чтения, ошибки(или null)
            avatar = r.result
        };
    })(file);

    reader.readAsDataURL(file);
})

document.getElementById("idFormCat").onsubmit = subm;