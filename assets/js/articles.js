let articles = document.querySelector('.layout__articles');

let posts = [
    {
        title: "Articulo 1",
        date: "24/08/2025",
        body: "Lorem tempor incididunt qui mollit ex adipisicing. Eu exercitation magna consequat voluptate aute laboris fugiat nulla sit occaecat incididunt mollit enim id. Ipsum pariatur in cupidatat duis."
    },
    {
        title: "Articulo 2",
        date: "26/08/2025",
        body: "Lorem tempor incididunt qui mollit ex adipisicing. Eu exercitation magna consequat voluptate aute laboris fugiat nulla sit occaecat incididunt mollit enim id. Ipsum pariatur in cupidatat duis."
    },
    {
        title: "Articulo 3",
        date: "28/08/2025",
        body: "Lorem tempor incididunt qui mollit ex adipisicing. Eu exercitation magna consequat voluptate aute laboris fugiat nulla sit occaecat incididunt mollit enim id. Ipsum pariatur in cupidatat duis."
    },
    {
        title: "Articulo 4",
        date: "29/08/2025",
        body: "Lorem tempor incididunt qui mollit ex adipisicing. Eu exercitation magna consequat voluptate aute laboris fugiat nulla sit occaecat incididunt mollit enim id. Ipsum pariatur in cupidatat duis."
    }
];

posts.forEach(article => {
    articles.innerHTML += `
    <article class="aricles__article">
        <h3 class="article__title">${article.title}</h3>
        <span class="article__date">${article.date}</span>
        <p class="article__body">
            ${article.body}
        </p>
        <a href="#" class="article__btn">Leer mas</a>
    </article>
    `;
});