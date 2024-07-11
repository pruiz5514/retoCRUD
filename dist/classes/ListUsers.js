export class ListUsers {
    constructor(container) {
        this.container = container;
    }
    renderCards(id, name, email, avatar) {
        const cardContianer = document.createElement("div");
        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        const img = document.createElement("img");
        h4.innerText = name;
        p.innerText = email;
        img.src = avatar;
        cardContianer.append(h4, p, img);
        this.container.append(cardContianer);
    }
}
