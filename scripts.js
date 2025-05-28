const prelims = document.getElementById("prelims");
const midterms = document.getElementById("midterms");
const finals = document.getElementById("finals");
const lect = document.getElementById("lectures")

function openFolder(dialog) {
	dialog.open = true;
}
			
function closeFolder(dialog) {
	dialog.close();
}

document.getElementById("prelims_icon").addEventListener("click", () => {
    openFolder(prelims);
    document.getElementById("prelims-t").style.backgroundColor = "#29538b";
    document.getElementById("prelims-t").style.border = "solid 1px black";
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
    document.getElementById("final-t").style.backgroundColor = "#3c81f3";
    document.getElementById("final-t").style.border = "solid 1px #29538b";
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});

document.getElementById("prelims_close").addEventListener("click", () => {
    closeFolder(prelims);
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
});

document.getElementById("midterms_icon").addEventListener("click", () => {
    openFolder(midterms);
    document.getElementById("mid-t").style.backgroundColor = "#29538b";
    document.getElementById("mid-t").style.border = "solid 1px black";
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
    document.getElementById("final-t").style.backgroundColor = "#3c81f3";
    document.getElementById("final-t").style.border = "solid 1px #29538b";
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});

document.getElementById("midterms_close").addEventListener("click", () => {
    closeFolder(midterms);
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
});

document.getElementById("finals_icon").addEventListener("click", () => {
    openFolder(finals);
    document.getElementById("final-t").style.backgroundColor = "#29538b";
    document.getElementById("final-t").style.border = "solid 1px black";
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});

document.getElementById("finals_close").addEventListener("click", () => {
    closeFolder(finals);
    document.getElementById("final-t").style.backgroundColor = "#3c81f3";
    document.getElementById("final-t").style.border = "solid 1px #29538b";
});

document.getElementById("prelims-t").addEventListener("click", () => {
    openFolder(prelims);
    document.getElementById("prelims-t").style.backgroundColor = "#29538b";
    document.getElementById("prelims-t").style.border = "solid 1px black";
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
    document.getElementById("final-t").style.backgroundColor = "#3c81f3";
    document.getElementById("final-t").style.border = "solid 1px #29538b";
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});

document.getElementById("mid-t").addEventListener("click", () => {
    openFolder(midterms);
    document.getElementById("mid-t").style.backgroundColor = "#29538b";
    document.getElementById("mid-t").style.border = "solid 1px black";
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
    document.getElementById("final-t").style.backgroundColor = "#3c81f3";
    document.getElementById("final-t").style.border = "solid 1px #29538b";
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});

document.getElementById("final-t").addEventListener("click", () => {
    openFolder(finals);
    document.getElementById("final-t").style.backgroundColor = "#29538b";
    document.getElementById("final-t").style.border = "solid 1px black";
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});

document.getElementById("lectures-t").addEventListener("click", () => {
    openFolder(lect);
    document.getElementById("lectures-t").style.backgroundColor = "#29538b";
    document.getElementById("lectures-t").style.border = "solid 1px black";
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
    document.getElementById("finals-t").style.backgroundColor = "#3c81f3";
    document.getElementById("finals-t").style.border = "solid 1px #29538b";
});

document.getElementById("lectures_icon").addEventListener("click", () => {
    openFolder(lect);
    document.getElementById("lectures-t").style.backgroundColor = "#29538b";
    document.getElementById("lectures-t").style.border = "solid 1px black";
    document.getElementById("mid-t").style.backgroundColor = "#3c81f3";
    document.getElementById("mid-t").style.border = "solid 1px #29538b";
    document.getElementById("final-t").style.backgroundColor = "#3c81f3";
    document.getElementById("final-t").style.border = "solid 1px #29538b";
    document.getElementById("prelims-t").style.backgroundColor = "#3c81f3";
    document.getElementById("prelims-t").style.border = "solid 1px #29538b";
});

document.getElementById("lectures_close").addEventListener("click", () => {
    closeFolder(lect);
    document.getElementById("lectures-t").style.backgroundColor = "#3c81f3";
    document.getElementById("lectures-t").style.border = "solid 1px #29538b";
});