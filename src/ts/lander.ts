const icon = (document.getElementById("icon") as HTMLDivElement);
const description = (document.getElementById("description") as HTMLParagraphElement);

const mice = (document.getElementById("cursor") as HTMLDivElement);

function animation() {
    const item = Math.floor(Math.random() * icon.childElementCount);
    let index: number = 0;

    Array.from(icon.children).forEach((element) => {
        if(index != item) {
            (element as HTMLElement).classList.remove("opacity-100");
            (element as HTMLElement).classList.add("opacity-0");

            (icon as HTMLElement).classList.remove((element as HTMLElement).dataset.bg ?? "");
        } else {
            (element as HTMLElement).classList.remove("opacity-0");
            (element as HTMLElement).classList.add("opacity-100");

            (icon as HTMLElement).style.backgroundColor = (element as HTMLElement).dataset.bg ?? "";
            (description as HTMLElement).textContent = (element as HTMLElement).dataset.name ?? "";
        }

        index += 1;
    });
}

icon?.addEventListener("mouseenter", animation)