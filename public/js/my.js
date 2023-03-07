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
});
