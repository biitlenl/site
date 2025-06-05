const icon = (document.getElementById("icon") as HTMLDivElement);
const description = (document.getElementById("description") as HTMLParagraphElement);
const hint = (document.getElementById("hint") as HTMLDivElement);

const mice = (document.getElementById("cursor") as HTMLDivElement);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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

function enter(text: string) {
    hint.classList.add("w-max");
    hint.classList.add("visible");
    hint.classList.remove("opacity-0");

    hint.textContent = text;
}

function hrefEnter(event: MouseEvent) {
    enter((event.target as HTMLAnchorElement).href);
}

function leave() {
    hint.classList.add("opacity-0");
}

icon?.addEventListener("mouseenter", animation);
icon?.addEventListener("click", animation);

const a = document.querySelectorAll("a");

a.forEach((element: HTMLAnchorElement) => {
    element.addEventListener("mouseover", hrefEnter);
    element.addEventListener("mouseleave", leave);
})

icon?.addEventListener("mouseover", () => { enter("Click to change project") });
icon?.addEventListener("mouseleave", () => { leave() });