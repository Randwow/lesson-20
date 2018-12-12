var key = 'user_name';
var userName = localStorage.getItem(key) ? localStorage.getItem(key) : '';

function prepareString(name) {
    var currentName = name ? name : 'guest';
    return 'Hello ' + currentName + ' !';
}

function updateName(name){
    document.getElementById('id').innerHTML = prepareString(name);
} 
updateName(userName);

document.getElementById('increment').addEventListener('click', function(){
    userName = prompt('Введите своё имя:', '');
    if (userName.length > 2){
        localStorage.setItem(key, userName);
    }else{
        localStorage.setItem('Erorr');
    }
    updateName(userName);
});
document.getElementById('reset').addEventListener('click', function(){
    userName = '';
    localStorage.removeItem(key);
    updateName(userName);
});
