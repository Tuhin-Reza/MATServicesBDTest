const newsFeed_scroller = document.querySelector(".newsFeed_scroller");
const newsFeed_scrollerInner = newsFeed_scroller.querySelector(".newsFeed_scroller__inner");
const newsFeed_scrollerContent = Array.from(newsFeed_scrollerInner.children);
newsFeed_scrollerContent.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    newsFeed_scrollerInner.appendChild(clone);
});