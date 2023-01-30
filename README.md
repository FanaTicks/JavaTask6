# Завдання до лекції 12-13
Задание состоит из 2х частей.

Первая часть задания:
Реализовать простой калькулятор с использованием state из React.
Элементы управления (кнопки и т.д.) нужно взять из библиотеки material-ui.
Интерфейс калькулятора должен состоять из:
- 10 кнопок, соответствующих цифрам 0, 1, 2, 3, 4, 5, 6, 7, 8, 9;
- 5 кнопок, соответствующих операторам +, -, /, *, =;
- поле показывающее историю вычислений пользователя в виде списка (последний элемент списка должен быть выделен как-то по "особенному", т.к. показывает крайне действие пользователя).

Пример работы калькулятора:
1) Нажать кнопку "2". В поле результата имеем:
   "2"
2) Нажать кнопку "+". В поле результата имеем:
   "2 + "
3) Нажать кнопку "2". В поле результата имеем:
   "2 + 2"  
4) Нажать кнопку "3". В поле результата имеем:
   "2 + 23"
5) Нажать кнопку "+". В поле результата имеем:
   "2 + 23 = 45"

   "45 + "
6) Нажать кнопку "1". В поле результата имеем:
   "2 + 23 = 45"

   "45 + 1"
7) Нажать кнопку "*". В поле результата имеем:
   "2 + 23 = 45"
   "45 + 1 = 46"

   "46 * "
8) Нажать кнопку "2". В поле результата имеем:
   "2 + 23 = 45"
   "45 + 1 = 46"

   "46 * 2"
9) Нажать кнопку "=". В поле результата имеем:
   "2 + 23 = 45"
   "45 + 1 = 46"
   "46 * 2 = 92"

   "92"
10) Если дальше пользователь нажмет на кнопку с цифрой, то она добавится в конец текущего числа
11) Если дальше пользователь нажмет на оператор "+", то он добавится в строку после числа как оператор ("922 + ")
12) Если дальше пользователь нажмёт на другой оператор "-", то последний будет заменён на новый ("992 - ")
13) Если пользователь нажмёт на "=" на незаконченном примере, то ничего не должно произойти

Вторая часть задания:
1) Создать на Java GET эндпоинт с адресом "localhost:8080/math/expamples", который принимает 1 параметр "count" типа Integer, и возвращает
массив, размерностью count, случайных простых математический примеров. Каждый пример - это строка. Каждый операнд (число) в примере - это неотрицательный Integer.
Пример:
GET localhost:8080/math/expamples?count=4
вернёт:
[
  "2 + 2",
  "2 / 0",
  "6 - 7",
  "42 * 42"
]
2) Прикрутить к калькулятору кнопку "Получить и решить примеры".
3) По нажатию на кнопку "Получить и решить примеры" будет отправляться GET запрос на БЕ (бэк-енд), c одним целочисленным параметром count = 5, на эндпоинт "localhost:8080/math/expamples"
4) Полученнй с БЕ ответ должен сохраняться в store редюсера и передаваться в калькулятор
5) Каждый раз, когда приходят новые примеры, калькулятор должен их посчитать и ДОБАВИТЬ в свою историю:
"2 + 2 = 4"
"2 / 0 = Error division by zero"
"6 - 7 = -1"
"42 * 42 = 1764"
----------------

