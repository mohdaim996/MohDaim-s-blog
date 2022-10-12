const burgerbtn = document.getElementById('burger-btn');
const burgerbtnstyle = getComputedStyle(burgerbtn);

const burgerbtnopen = {
    backgroundColor: '#1d1d1d3f',
    position: 'absolute'
}
const showmenu = () => {
    console.table(burgerbtnstyle)
    let mobileNav = document.getElementById('mobile-navmenu');
    let mobileNavstyle = () => getComputedStyle(mobileNav).display;

    if (mobileNavstyle() == 'none') {
        mobileNav.style.display = 'block';

        burgerbtn.style.backgroundColor = '#1d1d1d3f';
        burgerbtn.style.position = 'fixed';

        burgerbtn.style.right = '23px';
        burgerbtn.style.top = '5px';
    } else {
        mobileNav.style.display = 'none';

        burgerbtn.style.backgroundColor = 'transparent';
        burgerbtn.style.position = 'relative';

        burgerbtn.style.right = null;
        burgerbtn.style.top = null;
    }


}

