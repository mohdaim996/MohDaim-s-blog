
const posts = [...document.querySelectorAll(".card:not(.side-item")];
const showFilterAction = (state) => {
    let filterActions = document.querySelector('.clear');
    filterActions.style.display = state ? 'inline' : 'none';
}


function filterPostsByDate(query) {
    showFilterAction(true);


    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = "";


    for (let i = 0; i < posts.length; i++) {

        let postDate = posts[i].getElementsByClassName('post-date')[0];
        let postMonth = new Date(postDate.innerHTML).getDate();

        if (postMonth === Number(query)) {

            mainContainer.innerHTML += posts[i].outerHTML;
        }
    }

}

function filterPostsByTag(query) {

    showFilterAction(true);


    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = "";


    for (let i = 0; i < posts.length; i++) {

        let tag = [...posts[i].getElementsByClassName('tag')].map((i) => i.innerHTML);

        if (tag.includes(query)) {

            mainContainer.innerHTML += posts[i].outerHTML;
        }
    }

}

function removeFilter() {
    showFilterAction(false);

    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {

        mainContainer.innerHTML += posts[i].outerHTML;

    }
}
