const url = "https://www.amazon.com/s?k=mouse&qid=1638725752&ref=sr_pg_1&page=2"

const breakUrl = (url) =>{
    const firstPart = url.split('&')[1]
    const secondPart = url.split('&')[2]
    const thirdPart = url.split('&')[3]

    return(`&${firstPart}&${secondPart}&${thirdPart}`)
}
console.log(breakUrl(url))