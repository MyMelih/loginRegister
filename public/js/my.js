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


//? Abone Sayfası Form Yönlendirme Bölümleri //

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

//? Abone Sayfası Form Yönlendirme Bölümleri //

// İnput içlerindeki değerlerin boş olup olmadığını kontrol eden fonksiyon....

$(document).ready(function () {
    const aboneControl = {
        ad: document.getElementById("ad"),
        soyad: document.getElementById("soyad"),
        mail: document.getElementById("mail"),
        telefon: document.getElementById("telefon"),
        tc: document.getElementById("tc"),
        dogumtarih: document.getElementById("dogumtarih"),
        kisiselVeri: document.getElementById("bireyCheckbox"),
    };

    const aboneButonNext = document.getElementById("abone-buton-next");
    aboneButonNext.classList.add("disabled");

    Object.values(aboneControl).forEach((input) => {
        input.addEventListener("input", function () {
            if (
                Object.values(aboneControl).every((input) => input.value !== "") &&
                aboneControl.kisiselVeri.checked
            ) {
                aboneButonNext.classList.remove("disabled");
            } else {
                aboneButonNext.classList.add("disabled");
            }
        });
    });
});

// Firma abone formu için input kontrolü

$(document).ready(function () {
    const firmaAboneControl = {
        firmaAd: document.getElementById("firmaAdi"),
        vergiDaire: document.getElementById("vergiDaire"),
        vergiNo: document.getElementById("vergiNo"),
        ad: document.getElementById("ad"),
        soyad: document.getElementById("soyad"),
        mail: document.getElementById("mail"),
        telefon: document.getElementById("telefon"),
        tc: document.getElementById("tc"),
        dogumtarih: document.getElementById("dogumtarih"),
        kisiselVeri: document.getElementById("firmaCheckbox"),
    };

    const firmaAboneButonNext = document.getElementById("firma-buton-next");
    firmaAboneButonNext.classList.add("disabled");

    Object.values(firmaAboneControl).forEach((input) => {
        input.addEventListener("input", function () {
            if (
                Object.values(firmaAboneControl).every((input) => input.value !== "") &&
                firmaAboneControl.kisiselVeri.checked
            ) {
                firmaAboneButonNext.classList.remove("disabled");
            } else {
                firmaAboneButonNext.classList.add("disabled");
            }
        });
    });
});

//? Select Box Seçme Style

function showSelectBox() {
    var sehir = document.querySelector("#select-sehir");
    var ilce = document.querySelector("#select-ilce");
    var mahalle = document.querySelector("#select-mahalle");
    var cadde = document.querySelector("#select-sokak");
    var diskapi = document.querySelector("#select-diskapino");
    var ickapi = document.querySelector("#select-ickapino");
    var gecisButon = document.querySelector("#gecis-buton-next");

    var ykSehir = document.querySelector("#select-yk-sehir");
    var ykIlce = document.querySelector("#select-yk-ilce");
    var ykMahalle = document.querySelector("#select-yk-mahalle");
    var ykCadde = document.querySelector("#select-yk-sokak");
    var ykDiskapi = document.querySelector("#select-yk-diskapino");
    var ykIckapi = document.querySelector("#select-yk-ickapino");
    var yeniButon = document.querySelector("#yeni-buton-next");

    sehir.style.display = "flex";
    ilce.style.display = "none";
    mahalle.style.display = "none";
    cadde.style.display = "none";
    diskapi.style.display = "none";
    ickapi.style.display = "none";
    gecisButon.style.display = "none";

    ykSehir.style.display = "flex";
    ykIlce.style.display = "none";
    ykMahalle.style.display = "none";
    ykCadde.style.display = "none";
    ykDiskapi.style.display = "none";
    ykIckapi.style.display = "none";
    yeniButon.style.display = "none";

}

document.getElementById("internetVar").onclick = showSelectBox;
document.getElementById("internetYok").onclick = showSelectBox;


function showSelectBox2(selectId) {
    var select = document.querySelector(selectId);
    select.style.display = "flex";
    select.style.animation = "animate1 0.75s ease-in-out forwards";
}

document.getElementById("sehir").addEventListener("change", function () {
    showSelectBox2("#select-ilce");
});

document.getElementById("ilce").addEventListener("change", function () {
    showSelectBox2("#select-mahalle");
});

document.getElementById("mahalle").addEventListener("change", function () {
    showSelectBox2("#select-sokak")
})

document.getElementById("sokak").addEventListener("change", function () {
    showSelectBox2("#select-diskapino")
})

document.getElementById("diskapino").addEventListener("change", function () {
    showSelectBox2("#select-ickapino")
})

document.getElementById("ickapino").addEventListener("change", function () {
    showSelectBox2("#gecis-buton-next")
})


document.getElementById("yk-sehir").addEventListener("change", function () {
    showSelectBox2("#select-yk-ilce");
});

document.getElementById("yk-ilce").addEventListener("change", function () {
    showSelectBox2("#select-yk-mahalle");
});

document.getElementById("yk-mahalle").addEventListener("change", function () {
    showSelectBox2("#select-yk-sokak")
})

document.getElementById("yk-sokak").addEventListener("change", function () {
    showSelectBox2("#select-yk-diskapino")
})

document.getElementById("yk-diskapino").addEventListener("change", function () {
    showSelectBox2("#select-yk-ickapino")
})

document.getElementById("yk-ickapino").addEventListener("change", function () {
    showSelectBox2("#yeni-buton-next")
})

//? Kurulum Buton gösterim




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

// Paket Seçme End //


// Abone Sayfalarına yöneldirme Bölümleri
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

// Seçilen Selectboxların tasarımını değiştirme...

function changeDesign() {
    var ykSehir = document.getElementById("yk-sehir");
    var ykIlce = document.getElementById("yk-ilce");
    var ykMahalle = document.getElementById("yk-mahalle");
    var ykSokak = document.getElementById("yk-sokak");
    var ykDisKapi = document.getElementById("yk-diskapino");
    var ykIcKapi = document.getElementById("yk-ickapino");

    var sehir = document.getElementById("sehir");
    var ilce = document.getElementById("ilce");
    var mahalle = document.getElementById("mahalle");
    var sokak = document.getElementById("sokak");
    var disKapi = document.getElementById("diskapino");
    var icKapi = document.getElementById("ickapino");

    const yeniKurulum = [ykSehir, ykIlce, ykMahalle, ykSokak, ykDisKapi, ykIcKapi, sehir, ilce, mahalle, sokak, disKapi, icKapi];

    for (let i = 0; i < yeniKurulum.length; i++) {
        if (yeniKurulum[i].value != "") {
            yeniKurulum[i].style.color = "black";
            yeniKurulum[i].style.backgroundColor = "white !important";
            yeniKurulum[i].style.border = "2px solid var(--primary-color)";
            yeniKurulum[i].style.borderRadius = "20px"
        }
    }
}





