const now = new Date();
const today = {
    year : now.getFullYear(),
    month : now.getMonth()+1,
    date : now.getDate()
}

for (let key in today) {
    document.getElementById(key).textContent = today[key];
}