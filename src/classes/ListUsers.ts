class ListUsers{
    private container: HTMLElement;

    constructor(container: HTMLElement){
        this.container = container
    }

    renderCards(id:number, name: string, email:string, avatar:URL){
        const cardContianer = document.createElement("div");
        const h4 = document.createElement("h4") as HTMLHeadingElement;
        const p = document.createElement("p") as HTMLParagraphElement;
        const img = document.createElement("img") as HTMLImageElement;

        h4.innerText = name;
        p.innerText = email;
        img.src = avatar.href;

        cardContianer.append(h4, p, img);
    }
    
}