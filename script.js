document.addEventListener("DOMContentLoaded", function() {

const chapters = [
{
title:"Chương 1: chap 1",
date:"16-10-2025",
link:"https://hihianankawaii.com/wp-admin/post.php?post=4367&action=edit"
},
{
title:"Chương 2: chap 2",
date:"12-11-2025",
link:"https://hihianankawaii.com/wp-admin/post.php?post=4367&action=edit"
}
];

const chapterList = document.getElementById("chapterList");

if(chapterList){
    chapterList.innerHTML = "";

    chapters.forEach(chapter => {
        const a = document.createElement("a");
        a.href = "#";
        a.className = "chapter";

        a.onclick = function() {
            window.open(chapter.link, "_blank");
        };

        a.innerHTML = `
            <span class="chapter-title">${chapter.title}</span>
            <span class="date">${chapter.date}</span>
        `;

        chapterList.appendChild(a);
    });
}

});
