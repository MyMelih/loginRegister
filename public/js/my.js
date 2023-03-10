// ProgressBar
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress1");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    });
});

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressBar() {
    progressSteps.forEach((progressSteps, idx) => {
        if (idx < formStepsNum + 1) {
            progressSteps.classList.add("progress-step-active");
        } else {
            progressSteps.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
//  Progress Bar Bitiş //


// Abone Sayfası Form Yönlendirme Bölümleri
var bireyselButon = document.getElementById("bireysel");
var kurumsalButon = document.getElementById("kurumsal");

bireyselButon.onclick = function () {
    var bireyselForm = document.querySelector(".bireysel-page");
    var firmaForm = document.querySelector(".firma-page");

    bireyselForm.style.display = "block";
    firmaForm.style.display = "none";
}

kurumsalButon.onclick = function () {
    var bireyselForm = document.querySelector(".bireysel-page");
    var firmaForm = document.querySelector(".firma-page");

    bireyselForm.style.display = "none";
    firmaForm.style.display = "block";
}

//Paket Seçme WaterFall Style

function showPackage1() {
    var paket1 = document.querySelector("#paket1");
    var paket2 = document.querySelector("#paket2");
    var paket3 = document.querySelector("#paket3");
    var paket4 = document.querySelector("#paket4");
    var paketBtn = document.querySelector("#paket-btn-group");


    paket1.style.display = "flex";
    paket2.style.display = "none";
    paket3.style.display = "none";
    paket4.style.display = "none";
    paketBtn.style.display = "none";

}

document.getElementById("bilgi-gecis-buton-next").onclick = showPackage1;
document.getElementById("bilgi-yeni-buton-next").onclick = showPackage1;

// Paket Seçme Bölümleri

function showPackage(packageId) {
    var package = document.querySelector(packageId);
    package.style.display = "flex";
    package.style.animation = "animate1 0.5s ease-in-out forwards";
}

document.getElementById("paket1-1").onclick = function () {
    showPackage("#paket2");
}

document.getElementById("paket1-2").onclick = function () {
    showPackage("#paket2");
}

document.getElementById("paket2-1").onclick = function () {
    showPackage("#paket3");
}

document.getElementById("paket2-2").onclick = function () {
    showPackage("#paket3");
}

document.getElementById("paket3-1").onclick = function () {
    showPackage("#paket4");
}

document.getElementById("paket3-2").onclick = function () {
    showPackage("#paket4");
}

document.getElementById("paket4-1").onclick = function () {
    showPackage("#paket-btn-group");
}

document.getElementById("paket4-2").onclick = function () {
    showPackage("#paket-btn-group");
}

document.getElementById("paket4-3").onclick = function () {
    showPackage("#paket-btn-group");
}




// Aboen Sayfalarına yöneldirme Bölümleri
$(document).ready(function () {
    $("#bireysel").click(function () {
        $(".abone-second-page").show();
        $(".abone").hide();
    });
    $("#kurumsal").click(function () {
        $(".abone-second-page").show();
        $(".abone").hide();
    });
});

// Abone Sayfa Geçişleri
$(document).ready(function () {
    $("#abone-buton-prev").click(function () {
        $(".abone").show();
        $(".abone-second-page").hide();
    });
    $("#abone-buton-next").click(function () {
        $(".tarife").show();
        $(".firma-gecis-page").hide();
        $(".yeni-kurulum-page").hide();
        $(".gecis-tarife-bilgilendirme").hide();
        $(".yeni-tarife-bilgilendirme").hide();
    })
});

// Firma Sayfası Geçişleri

$(document).ready(function () {
    $("#firma-buton-prev").click(function () {
        $(".abone").show();
        $(".abone-second-page").hide();
    });
    $("#firma-buton-next").click(function () {
        $(".tarife").show();
        $(".firma-gecis-page").hide();
        $(".yeni-kurulum-page").hide();
        $(".gecis-tarife-bilgilendirme").hide();
        $(".yeni-tarife-bilgilendirme").hide();
    });
});

$(document).ready(function () {
    $("#internetVar").click(function () {
        $(".firma-gecis-page").show();
        $(".tarife").hide();

    });
    $("#internetYok").click(function () {
        $(".yeni-kurulum-page").show();
        $(".tarife").hide();
    });
})

$(document).ready(function () {
    $("#gecis-buton-prev").click(function () {
        $(".firma-gecis-page").hide();
        $(".tarife").show();
    });
    $("#gecis-buton-next").click(function () {
        $(".firma-gecis-page").hide();
        $(".gecis-tarife-bilgilendirme").show();
    });
    $("#yeni-buton-prev").click(function () {
        $(".yeni-kurulum-page").hide();
        $(".tarife").show();
    });
    $("#yeni-buton-next").click(function () {
        $(".yeni-kurulum-page").hide();
        $(".yeni-tarife-bilgilendirme").show();
    });
    $("#bilgi-gecis-buton-prev").click(function () {
        $(".gecis-tarife-bilgilendirme").hide();
        $(".firma-gecis-page").show();
    });
    $("#bilgi-yeni-buton-prev").click(function () {
        $(".yeni-tarife-bilgilendirme").hide();
        $(".yeni-kurulum-page").show();
    });
});

// Paket Sayfası Aksiyonları
function addClickEventListeners(paketClass) {
    const paketlerBlocks = document.querySelectorAll(paketClass);

    paketlerBlocks.forEach(block => {
        block.addEventListener('click', () => {
            paketlerBlocks.forEach(b => b.classList.remove('selected'));
            block.classList.add('selected');
        });
    });
}

addClickEventListeners('.paketler-block');
addClickEventListeners('.paketler-block1');
addClickEventListeners('.paketler-block2');
addClickEventListeners('.paketler-block3');

// Waterfall açılır menu odaklama vs..

function toggleGroup() {
    var totalHeight = 0;
    var groups = document.getElementsByClassName("paket-int");
    for (var i = 0; i < groups.length; i++) {
        totalHeight += groups[i].offsetHeight;
    }
    window.scrollTo(0, totalHeight);
}

