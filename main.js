// // const api = {
// //     _employees: [
// //         { id: 1, name: 'Alex', salary: 60000 },
// //         { id: 2, name: 'Fred', salary: 90000 },
// //         { id: 3, name: 'Bob', salary: 80000 },
// //     ],

// //     getEmployees() {
// //         return new Promise((resolve) => {
// //             resolve(this._employees.slice());
// //         });
// //     },

// //     setEmployeeSalary(employeeId, newSalary) {
// //         return new Promise((resolve) => {
// //             this._employees = this._employees.map((employee) =>
// //                 employee.id !== employeeId
// //                     ? employee
// //                     : {
// //                         ...employee,
// //                         salary: newSalary,
// //                     }
// //             );
// //             resolve(this._employees.find(({ id }) => id === employeeId));
// //         });
// //     },

// //     notifyEmployee(employeeId, text) {
// //         return new Promise((resolve) => {
// //             resolve(true);
// //         });
// //     },

// //     notifyAdmin(error) {
// //         return new Promise((resolve) => {
// //             resolve(true);
// //         });
// //     },

// //     setEmployees(newEmployees) {
// //         return new Promise((resolve) => {
// //             this._employees = newEmployees;
// //             resolve();
// //         });
// //     },
// // };

// // function increaseSalary() {
// //     api.getEmployees()
// //         .then(workers => {
// //             let currentWorker = workers[0];
// //             for(let i in workers){
// //                 if(workers[i].salary <= currentWorker?.salary){
// //                     currentWorker = workers[i]
// //                 }
// //             }
// //             return currentWorker
// //         })
// //         .then(currentWorker => {
// //             let currentWorkerUpdate = api.setEmployeeSalary(currentWorker.id, currentWorker.salary * 1.2)

// //             return currentWorkerUpdate
// //         })
// //         .then(currentWorkerUpdate => {
// //             console.log(currentWorkerUpdate)
// //             api.notifyEmployee(`Hello, ${currentWorkerUpdate.name}! Congratulations, your new salary is ${currentWorkerUpdate.salary}`)
// //         })
// //         .catch(err => api.notifyAdmin(error))
// // }


// // increaseSalary()

// // fetch then/catch

// // function fetchPost(){
// //     fetch('https://jsonplaceholder.typicode.com/users')
// //     .then(res => res.json())
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err))
// // }

// // fetchPost()

// // async fetch post async/await
// async function fetchPostAsync(){
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// fetchPostAsync()

// const asyncFetchPost  = async () => {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users')
//         let data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }



    
// // fetch('https://www.google.ru/')
// //     .then(res => res.json())
// //     .then(data => console.log(data))
// //     .catch(err => {
// //         document.body.innerHTML = 'Произошла ошибка получения данных. Попробуйте повторить снова'
// //         throw new Error('Ошибка получения данных', err)
// //     })








const api = {
    _employees: [
      { id: 1, name: 'Alex', salary: 120000 },
      { id: 2, name: 'Fred', salary: 110000 }, 
      { id: 3, name: 'Bob', salary: 80000 },
    ],
  
    getEmployees() {
      return new Promise((resolve) => {
        resolve(this._employees.slice());
      });
    },
  
    setEmployeeSalary(employeeId, newSalary) {
      return new Promise((resolve) => {
        const updatedEmployees = this._employees.map((employee) =>
          employee.id !== employeeId
            ? employee
            : {
              ...employee,
              salary: newSalary,
            }
        );
        this._employees = updatedEmployees;
        resolve(this._employees.find(({ id }) => id === employeeId));
      });
    },
  
    notifyEmployee(employeeId, text) {
      return new Promise((resolve) => {
        resolve(true);
      });
    },
  
    notifyAdmin(error) {
      return new Promise((resolve) => {
        resolve();
      });
    },
  
    setEmployees(newEmployees) {
      return new Promise((resolve) => {
        this._employees = newEmployees;
        resolve();
      });
    },
  
    sendBudgetToAccounting(newBudget) {
      return new Promise((resolve) => {
        resolve();
      });
    },
  };
  

  async function increaseSalary(){
    try {
      // получаем сотрудников
      const res = await api.getEmployees()
      // общая зп всех сотрудников
      let totalSalary = 0
      // пробегаем циклом и суммируем все
      for(let i = 0; i < res.length; i++){
        totalSalary = totalSalary + res[i].salary
      }
      // находим среднюю зп сотрудника
      let averageSalary = totalSalary / res.length

      const enoughSalary = await api.setEmployeeSalary()

    } catch (e) {
      console.error(e)
    }
    
  }

  increaseSalary()

  async function newEmployeesData(){
    try {
      // let enoughSalary = 0
      const enoughSalary = await api.setEmployeeSalary()
      for(let i = 0; i < enoughSalary.length; i++){
        if(workers[i].salary <= currentWorker?.salary){
          currentWorker = workers[i]
      }
      return currentWorker
    }
     
    } catch (e) {
      console.error(e)
    }
  }
  


  // setEmployeeSalary(employeeId, newSalary) {
  //   return new Promise((resolve) => {
  //     const updatedEmployees = this._employees.map((employee) =>
  //       employee.id !== employeeId
  //         ? employee
  //         : {
  //           ...employee,
  //           salary: newSalary,
  //         }
  //     );
  //     this._employees = updatedEmployees;
  //     resolve(this._employees.find(({ id }) => id === employeeId));
  //   });
  // },






    // //     api.getEmployees()
    // //         .then(workers => {
    // //             let currentWorker = workers[0];
    // //             for(let i in workers){
    // //                 if(workers[i].salary <= currentWorker?.salary){
    // //                     currentWorker = workers[i]
    // //                 }
    // //             }
    // //             return currentWorker
    // //         })
    // //         .then(currentWorker => {
    // //             let currentWorkerUpdate = api.setEmployeeSalary(currentWorker.id, currentWorker.salary * 1.2)
    
    // //             return currentWorkerUpdate
    // //         })
    // //         .then(currentWorkerUpdate => {
    // //             console.log(currentWorkerUpdate)
    // //             api.notifyEmployee(`Hello, ${currentWorkerUpdate.name}! Congratulations, your new salary is ${currentWorkerUpdate.salary}`)
    // //         })
    // //         .catch(err => api.notifyAdmin(error))



// // 19.10.23

      

// // 1 способ

//     let numArray = [2, 7, 8, 9, 3, 10, 4, 5, 6, 1];
//     numArray.sort((a, b) => {
//     if (a % 2 ) {
//     return b % 2 ? b - a : 1; 
//   }else{
//   return b % 2 ? -1 : a - b
// }
// })
//   console.log(numArray)

//   // Тернарный оператор
//   // уловие ? если true : условие2 ? : условие2 true : false условие2 : false условие1;





// // 2 способ

// // let numAr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // let odds = numAr.filter((a) => a % 2 !== 0).sort((a, b) => b - a);
// // let even = numAr.filter((a) => a % 2 === 0).sort((a, b) => a - b);
// // let sorted = even.concat(odds);
// // console.log(sorted);



// // 3 способ

// let odd = [];
// let even = [];
// let arrN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(let i = 0; i<arrN.length; i++){
//      if(arrN[i] % 2){
//      even.push(arrN[i])
// }else {
//   odd.push(arrN[i])
// }
// odd.sort(function (a, b) {
//   return b - a;
// });
// }
// console.log(odd);
// console.log(even);




// 1) [1, 7, 3, 5, 1]
// 2) [1, 1, 3, 5, 7]
// [1, 3, 5, 7]
// [3, 5, 7]
// [5, 7]
// 3) ??
// const outut = [2, 1, 8, 1, 4, 3, 4, 2, 5, 7, 8];
// советы
// 1. пробегаемся циклом, вытаскиваем все элементы которые являются нечетными запихиваемм их всех в массив нечетных чисел
// 2. сортируем по возрастанию // [1,1,3,5,7]
// 3. еще раз пробегаем по массиву и меняем элементы 

const abc = [2, 1, 8, 7, 4, 3, 4, 2, 5, 1, 8];
function newNums(arr) {
  let count = 0
  let oddArr = [];
  for (let i = 0; i < arr.length; i++ ) {
    if(arr[i] % 2 !== 0){
      oddArr.push(arr[i])
    }
  }
  oddArr.sort((a,b) => a - b);

 

  const result = [];
   
  for (let k = 0; k < arr.length; k++) {
    if(arr[k] % 2 === 0) {
      // четное
      result.push(arr[k]);
    } else {
      // нечетное
      let elem = oddArr.splice(0, 1)
      result.push(...elem);

    }
  }

  return result;

  
}
console.log('=====>', newNums(abc));




// 1) Отдебажить фукцию, она должна работать как задумано и возвращать массив чисел
// 2) Проверить на разных массивах ( с 0, отрицательными числами, Infinity)
// 3)* Сделать алгоритм с вторим проходм, короче первого 
//  подсказка: временная структура данных 


const arr = [5, 3, 2, 8, 1, 4];

const odd = arr.filter(i => i%2 !== 0).sort();
let i = 0,
  result = [];
arr.forEach(e => {
  if (e%2 === 0) {
    result.push(e)
  } else {
    result.push(odd[i]);
    i++;
  }
});

console.log(result);






const array = [1,2,3,4,5,6]

let elem = array.slice(0,1)

console.log(...array)


