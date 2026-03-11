
const chapters = [

{
title:"Chapter 1: Đây là tiêu đề chương rất dài để test dấu ba chấm",
date:"16-10-2025",
link:"chapter1.html"
},

{
title:"Chapter 2",
date:"12-11-2025",
link:"chapter2.html"
},

{
title:"Chapter 3",
date:"20-11-2025",
link:"chapter3.html"
},

{
title:"Chapter 4",
date:"04-12-2025",
link:"chapter4.html"
},

{
title:"Chapter 5",
date:"04-12-2025",
link:"chapter5.html"
},

{
title:"Chapter 6",
date:"29-12-2025",
link:"chapter6.html"
},

{
title:"Chapter 7",
date:"29-12-2025",
link:"chapter7.html"
},

{
title:"Chapter 8",
date:"08-01-2026",
link:"chapter8.html"
}

];

const chapterList = document.getElementById("chapterList");

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