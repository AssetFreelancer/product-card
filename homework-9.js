import {userComments} from './comments.js';
//Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.

const numbers = [1,2,3,4,5,6,7,8,9,10];
const newArray = numbers.filter(number => number >= 5);

console.log(newArray);

//Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), 
// проверить, есть ли в массиве какая-то определенная сущность.

const ibnTaimiiBooks = ['Собрание фетв', 'Устранение противоречия между разумом и откровением', 'Васитийская акыда', 
  'Путь пророческой Сунны', 'Следование прямому пути в отличие от обитателей Ада', 'Тадмурская акыда', 
  'Великое правило о посредничестве и поиске путей к Аллаху','Шариатская политика в улучшении пастыря и паствы',
  'Критерий различия между угодниками Милостивого и угодниками сатаны', 'Введение в основы тафсира'
]

const isCreed = ibnTaimiiBooks.includes('Тадмурская акыда');
const creed2 = ibnTaimiiBooks.filter(book => book.includes('акыда'));
console.log(isCreed);
console.log(creed2);

//Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный 
// ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.

const revArray = array => 
  [...array].reverse();

const revNum = revArray(numbers);
const revBooks = revArray(ibnTaimiiBooks);
console.log(revNum);
console.log(revBooks);

//Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива. 
// Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа 
// по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не 
// делать это вручную)

//Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". Таким образом мы сможем внедрить 
// переменную из comments.js в homework-9.js и работать с ней. Когда мы введем название переменной, нам предложит 
// импортировать ее - так и делаем.

//Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"


const usersWithCom = userComments.filter(comment => comment.email.includes('.com'));
console.log(usersWithCom);


//  const getCom = userComments.filter(element => {
//    console.log(element);
// //   console.log(element.id.toString().includes(1));
//  })

//Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, 
// а те, у кого id больше 5, имели postId: 1

const replacePostId = userComments.map(element => ({
  ...element, postId : element.id <= 5 ? 2 : 1
}));
console.log(replacePostId);


// Перебрать массив, что бы объекты состояли только из айди и имени

const IdNameComments = userComments.map(({id, name}) => ({
  id, name
}))
console.log(IdNameComments);

// Перебираем массив, добавляем объектам свойство isInvalid и проверяем: если длина тела сообщения (body) 
// больше 180 символов - устанавливаем true, меньше - false.

const addInvalid = userComments.map(element => {
    return {
      ...element, 
    isInvalid : element.body.length > 180 ? true : false
    };
});

console.log(addInvalid);

// Почитать про метод массива reduce. Используя его, вывести массив почт и провернуть 
// тоже самое с помощью метода map

const arrayEmail = userComments.reduce((acc, element) => {
  acc.push(element.email);
  return acc;  
}, []);
console.log(arrayEmail);

const arrayEmail2 = userComments.map(element =>  element.email)
console.log(arrayEmail2);

// Почитать про методы toString(), join() и перебрав массив с задания №11, привести его к строке.

const result = arrayEmail.toString();
console.log(result);

const result2 = arrayEmail.join("-");
console.log(result2);