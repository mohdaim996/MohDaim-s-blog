
// const copy of posts
const posts = [...document.querySelectorAll(".card:not(.side-item")];

// mobile filter wrapper

const filterhandler = (id, handler) => {
    let drpfilter = document.querySelector(`#${id}`);
    drpfilter.addEventListener('change', function () {
        handler(drpfilter.value);
    });
}

// add the event lister to the mobile filter
filterhandler('tag-drp', filterPostsByTag);
filterhandler('date-drp', filterPostsByDate)

// display the button for the remove filter option
const showFilterAction = (state) => {
    let filterActions = document.querySelector('.clear');
    filterActions.style.display = state ? 'inline' : 'none';
}


function filterPostsByDate(query) {
    showFilterAction(true);

    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        // iterate the posts. read and compare date element
        let postDate = posts[i].getElementsByClassName('post-date')[0];
        let postMonth = new Date(postDate.innerHTML).getDate();

        if (postMonth === Number(query)) {
            // append to display if the date match the filter parameter
            mainContainer.innerHTML += posts[i].outerHTML;
        }
    }
}

function filterPostsByTag(query) {
    showFilterAction(true);

    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        // get the post tags as a list
        let tag = [...posts[i].getElementsByClassName('tag')].map((i) => i.innerHTML);

        if (tag.includes(query)) {
            // append to display if the filter parameter in the tag list
            mainContainer.innerHTML += posts[i].outerHTML;
        }
    }
}


function removeFilter() {
    showFilterAction(false);

    // restore original posts from the const posts list
    let mainContainer = document.getElementById('main');
    mainContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        mainContainer.innerHTML += posts[i].outerHTML;
    }
}


