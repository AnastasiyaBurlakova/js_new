const URL = 'https://jsonplaceholder.typicode.com/posts'
// data = [{},{}, {}] 
// {}
// {}
// задание: чтобы в title было больше 3 слов
fetch(URL)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
           
            if(data[i].userId === 1 && data[i].title.split(' ').length > 3){
                console.log(data[i])
            }
            // console.log(data[i].id+2)
            
        }

    })
// ДЗ
// хочу вывести все посты у пользователей 3, 5 у кого текст (body) больше 20 слов и заголовок поста (title) > 4
// split, splice, slice

    const word = 'rem alias distinctio quo quis'
    console.log(word.split(' ').length > 3)