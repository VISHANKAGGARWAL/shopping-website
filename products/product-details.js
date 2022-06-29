

function loadDetails() {
    var paramString = window.location.search.split('?')[1];
    var queryString = new URLSearchParams(paramString);
    
    for (var pair of queryString.entries()) {
        if (pair[0] === 'name'){
            document.getElementById('title').innerHTML = pair[1]
        }
        if (pair[0] === 'image'){
            document.getElementById('image').src = pair[1]
        }
        if (pair[0] === 'desc'){
            document.getElementById('desc').innerHTML = pair[1]
        }
        if (pair[0] === 'price'){
            document.getElementById('price').innerHTML = pair[1]
        }
    }
    
}


function buy() {
    alert('Wow!, Successfully bought Item');
    window.location.href = 'home-page.html'
}