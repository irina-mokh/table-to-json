# Вопрос 1
var xxx = 4;
function test1() {
return(xxx === 4 && 'Cool');
}
function test2() {
return(xxx === 4 || 'Cool');
}

## Ответ:
test1(); // --> 'Cool'
Опрератор && возвращает первое ложное значение,а т.к. в данном случае все значение истины, то возвращается последнее - 'Cool'

test2();// --> true
Оператор || возвращает первое истиннное значение, в данном случае xxx === 4 -->true (если все значения false --> false)

# Вопрос 2
Для чего используется метод preventDefault объекта события при работе с DOM
(event.preventDefault())?
Приведите пример использования.

## Ответ:
Метод события preventDefault используется для отмены дефолтного поведения при наступлении данного события.

Например, произвести валидацию формы при ее сабмите.

[Пример в задании](https://github.com/irina-mokh/table-to-json/blob/ec17d3b49168ae1ed0d85aa036802c06910aaefa/src/components/App/index.tsx#L42)

# Тестовая задача
Деплой: https://table-to-json.netlify.app/

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:
## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
