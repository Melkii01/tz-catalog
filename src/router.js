import {Catalog} from "./components/pages/catalog";

export class Router {
    titlePageElement = document.getElementById('title');
    contentPageElement = document.getElementById('content');

    // Страницы
    routes = [
        {
            route: '/',
            title: 'Каталог',
            filePathTemplate: '/templates/pages/catalog.html',
            load: () => {
                new Catalog();
            },
            styles: ['catalog.css']
        },
    ]

    constructor() {
        this.initEvents();
    }

    // Слушатель всего сайта
    initEvents() {
        window.addEventListener("DOMContentLoaded", this.activateRoute.bind(this));
    }

    // Активация страницы по url
    async activateRoute() {

        // Ищем название страничку по массиву
        const urlRoute = window.location.pathname;
        const newRoute = this.routes.find(item => item.route === urlRoute);
        if (newRoute) {
            // Если есть оглавление
            if (newRoute.title) {
                this.titlePageElement.innerText = newRoute.title + ' | AVTOALFA';
            }

            // Если есть стили добавляем на страничку
            if (newRoute.styles && newRoute.styles.length > 0) {
                newRoute.styles.forEach(style => {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = '/css/' + style;
                    document.head.insertBefore(link, this.titlePageElement);
                })
            }

            // Если есть путь к страничке
            if (newRoute.filePathTemplate) {
                this.contentPageElement.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());
            }
            if (newRoute.load && typeof newRoute.load === 'function') {
                newRoute.load();
            }
        } else {
            // Нет такой страницы
            console.log('No route found');
        }
    }
}
