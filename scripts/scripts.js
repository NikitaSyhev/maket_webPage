//получили днные с json (db.json)

fetch('db.json')
    .then(data => data.json())
    .then(res => console.log(res));



// использую классы для создания карточкек категорий

class MenuCard {
    constructor(img, alt, title, parentSelector) {
        this.img = img;
        this.alt = alt;
        this.title = title;
        this.parent = document.querySelector(parentSelector);
    }
    render() {
        const elenent = document.createElement('div');
        
        elenent.innerHTML = `<div class="good-card">
                <img src=${this.img} alt=${this.alt} class="goods-main">
                <div class="green-category">
                    ${this.title}
                </div>
            </div>`;
            this.parent.append(elenent);
    }
}

//получение данных для карточки товара с JSON 
const getResourses = async (url) => {
    const res = await fetch(url);

    if(!res.ok) {
       throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
}

//строим карточки товаров, фетчим данные с JSON.DB - вызов функции
getResourses('db.json')
    .then(data => {
        
        data['menu'].forEach(({img, alt, title}) => {
            new MenuCard(img, alt, title, '.goods').render();
        });
    })

// //верстка карточек товаров
// new MenuCard(
//     "img/goods1.jfif",
//     "good1",
//     "Цветы",
//     ".goods"
// ).render();
// //2
// new MenuCard(
//     "img/goods2.jfif",
//     "good1",
//     "Воздушные шарики",
//     ".goods"
// ).render();

// //3
// new MenuCard(
//     "img/sladosti.jfif",
//     "good1",
//     "Сладости",
//     ".goods"
// ).render();
// //4
// new MenuCard(
//     "img/korzina.jfif",
//     "good1",
//     "Фруктовые корзины",
//     ".goods"
// ).render();
// //5
// new MenuCard(
//     "img/room_flowers.jfif",
//     "good1",
//     "Комнатные растения",
//     ".goods"
// ).render();
// //6
// new MenuCard(
//     "img/gifts.jfif",
//     "good1",
//     "Подарки",
//     ".goods"
// ).render();
// //7
// new MenuCard(
//     "img/services.jfif",
//     "good1",
//     "Услуги",
//     ".goods"
// ).render();
// //8
// new MenuCard(
//     "img/accesories.jfif",
//     "good1",
//     "Аксессуары",
//     ".goods"
// ).render();


