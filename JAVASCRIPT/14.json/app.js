const info =
  '{"peliculas": [{"title": "Titanic","year": 1996,"director": "James Cameron"},{"title": "Dune","year": 2021,"director": "Denis Villeneuve"}],"series": [{"title": "Breaking Bad"}]}'

//Esto saca un string sin más
console.log(info)

//Traducimos a JavaScript JSON
const parsedInfo = JSON.parse(info)
console.log(parsedInfo)
console.log(parsedInfo.peliculas[0].title)

//Traducir a string-JSON JavaScript
const jsonInfo = JSON.stringify(parsedInfo)
console.log(jsonInfo)
