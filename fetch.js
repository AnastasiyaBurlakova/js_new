const URL = 'https://jsonplaceholder.typicode.com/posts'
// data = [{},{}, {}] 
// {}
// {}
// задание: чтобы в title было больше 3 слов



// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         for(let i = 0; i < data.length; i++){
           
//             if(data[i].userId === 1 && data[i].title.split(' ').length > 3){
//                 console.log(data[i])
//             }
//             // console.log(data[i].id+2)
            
//         }

//     })





// ДЗ
// хочу вывести все посты у пользователей 3, 5 у кого текст (body) больше 20 слов и заголовок поста (title) > 4
// split, splice, slice

    const word = 'rem alias distinctio quo quis'
    console.log(word.split(' ').length > 3)



    fetch(URL)
        .then(response => response.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){

                if((data[i].userId == 3 || data[i].userId == 5) && data[i].body.split(' ').length > 20 && data[i].title.split(' ').length > 4){
                    console.log(data[i])
                }


            }
        })

// (id = 3 или id = 5) и body > 20 и title > 4




// задача //
// Есть массив, ну образно [10,5,0,10,6,6,7,2,9,9]. Нужно вернуть массив чисел, которые не повторяются, т.е. [5,0,7,2]

const arr = [10,5,0,10,6,6,7,2,9,9]  

const obj = {
    '10': 2,
    '5': 1,
    '0': 1,
    '6': 2,
    '7': 1,
    '2': 1,
    '9': 2,
}




function getUniqueElements(){
    const obj = {}
    const result = []
    for(let i = 0; i < arr.length; i++){

        if(Object.keys(obj).includes(String(arr[i]))){     // значение элемента в формате строки 
            // если ключ есть
            obj[arr[i]] += 1
        }else {
            // если нет такого ключа
            obj[arr[i]] = 1
        }
        
    }
   for (let key in obj){
    if(obj[key] < 2){
        result.push(key)
    }
   }
   return result
}

console.log(getUniqueElements(arr)) // [5,0,7,2]





const obj = {
    '1': 0,
    '2': 0,
    '3': 2,
    name: 'Gena'
}

console.log(obj['name'])

for (let key in obj){
    console.log(obj[key])
}