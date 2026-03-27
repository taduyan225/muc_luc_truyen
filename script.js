
const chapterList = document.getElementById("chapterList");

if(chapterList){
    chapterList.innerHTML = "";

    chapters.forEach(chapter => {
        const a = document.createElement("a");
        a.href = chapter.link;
        a.className = "chapter";

        a.innerHTML = `
            <span class="chapter-title">${chapter.title}</span>
            <span class="date">${chapter.date}</span>
        `;

        chapterList.appendChild(a);
    });
}

});
