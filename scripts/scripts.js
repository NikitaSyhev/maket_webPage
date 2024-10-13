//получили днные с json (db.json)

fetch('db.json')
    .then(data=>data.json())
    .then(res=>console.log(res));