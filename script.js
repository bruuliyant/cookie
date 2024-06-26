let doc = document

doc.cookie = "user=John"
console.log(doc.cookie);
alert( document.cookie );

let me = '1'
let em = '2'

localStorage.setItem(me, em)

// Одну из возможностей сохранения данных в браузере представляет использование куки. 
//Так, каждый раз, когда мы обращаемся к веб-странице в интернете, то веб-сервер вместо с этой страницей 
//присылает связаные с этой страницей куки (при их наличии). И браузер хранит эти данные некоторое время. 
//При последующих обращениях к той же странице или сайту в зависимости от настроек куки обратно посылаются из браузера на сервер.
// Для работы с куками в языке JavaScript в объекте document предназначено свойство cookie.
// Для установки куки достаточно свойству document.cookie присвоить строку с куками