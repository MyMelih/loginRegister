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
        document.getElementById("firmaAdi").value = "";
        document.getElementById("vergiDaire").value = "";
        document.getElementById("vergiNo").value = "";
        document.getElementById("firmaAdi").value = "";
        document.getElementById("firmaSoyad").value = "";
        document.getElementById("firmaEmail").value = "";
        document.getElementById("firmaTelefon").value = "";
        document.getElementById("firmaTc").value = "";
        document.getElementById("firmaDogumtarih").value = "";
        document.getElementById("firmaCheckbox").checked = false;
        $(".abone-second-page").show();
        $(".abone").hide();
    });
    $("#kurumsal").click(function () {
        document.getElementById("ad").value = "";
        document.getElementById("soyad").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("telefon").value = "";
        document.getElementById("tc").value = "";
        document.getElementById("dogumtarih").value = "";
        document.getElementById("bireyCheckbox").checked = false;
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
        var fields = [
            document.getElementById("ad"),
            document.getElementById("soyad"),
            document.getElementById("mail"),
            document.getElementById("telefon"),
            document.getElementById("tc"),
            document.getElementById("dogumtarih")
        ]

        var checkbox = document.getElementById("bireyCheckbox");
        var formValid = true;

        fields.forEach(function (field) {
            if (field.value === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops..',
                    text: 'Lütfen Tüm Kutucukları Doldurunuz!',
                });
                formValid = false;
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
            } else {
                field.style.borderColor = "";
            }

            //? Mail Kontrolü
            if (field.id === "mail") {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops..',
                        text: 'Lütfen Geçerli Bir E-Posta Adresi Giriniz!',
                    });
                    formValid = false;
                    field.style.borderColor = "red";
                    field.style.borderWidth = "2px";
                } else {
                    field.style.borderColor = "";
                }
            }

            //todo: Tc Kontrolü
            if (field.id === "tc") {
                var tcNo = field.value;
                if (tcNo.length != 11) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops..',
                        text: 'Lütfen 11 Haneli Tc Kimlik Numaranızı Giriş Yapınız!',
                    })
                    formValid = false;
                    field.style.borderColor = "red";
                    field.style.borderWidth = "2px";
                } else {
                    field.style.borderColor = "";
                }
            }

            //? Telefon Kontrolü
            if (field.id === "telefon") {
                var telefonNo = field.value;
                if (telefonNo.length <= 9 || telefonNo.length >= 11) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops..',
                        text: 'Lütfen 10 Haneli Telefon Numaranızı Giriş Yapınız!',
                    });
                    formValid = false;
                    field.style.borderColor = "red";
                    field.style.borderWidth = "2px";
                } else {
                    field.style.borderColor = "";
                }
            }
        });

        if (checkbox.checked === false) {
            formValid = false;
            checkbox.style.borderColor = "red";
            checkbox.style.borderWidth = "2px";
        } else {
            checkbox.style.borderColor = "";
        }

        if (formValid) {
            formStepsNum++;
            updateProgressBar();
            updateFormSteps();
            $(".tarife").show();
            $(".firma-gecis-page").hide();
            $(".yeni-kurulum-page").hide();
            $(".gecis-tarife-bilgilendirme").hide();
            $(".yeni-tarife-bilgilendirme").hide();
        }
    })
});

// Firma Sayfası Geçişleri

$(document).ready(function () {
    $("#firma-buton-prev").click(function () {
        $(".abone").show();
        $(".abone-second-page").hide();
    });

    $("#firma-buton-next").click(function () {
        var fields = [
            document.getElementById("firmaAdi"),
            document.getElementById("vergiDaire"),
            document.getElementById("vergiNo"),
            document.getElementById("firmaAd"),
            document.getElementById("firmaSoyad"),
            document.getElementById("firmaEmail"),
            document.getElementById("firmaTelefon"),
            document.getElementById("firmaTc"),
            document.getElementById("firmaDogumtarih")
        ];
        var checkbox = document.getElementById("firmaCheckbox");

        var formValid = true;

        fields.forEach(function (field) {
            if (field.value === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops..',
                    text: 'Lütfen Tüm Kutucuları Doldurun!',
                })
                formValid = false;
                field.style.borderColor = "red";
                field.style.borderWidth = "2px";
            } else {
                field.style.borderColor = "";
            }

            //Mail kontrolü
            if (field.id === "firmaEmail") {
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(field.value)) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops..',
                        text: 'Lütfen Geçerli Bir E-Posta Adresi Giriniz!',
                    })
                    formValid = false;
                    field.style.borderColor = "red";
                    field.style.borderWidth = "2px";
                } else {
                    field.style.borderColor = "";
                }
            }
            // Tc kontrolü
            if (field.id === "firmaTc") {
                var tcNo = field.value;
                if (tcNo.length != 11) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops..',
                        text: 'Lütfen 11 Haneli Tc Kimlik Numaranızı Giriş Yapınız!',
                    })
                    formValid = false;
                    field.style.borderColor = "red";
                    field.style.borderWidth = "2px";
                    return 0;
                } else {
                    field.style.borderColor = "";
                }
            }

            // Telefon kontrolü
            if (field.id === "firmaTelefon") {
                var telefonNo = field.value;
                if (telefonNo.length <= 9 || telefonNo.length >= 11) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ooops..',
                        text: 'Lütfen 10 Haneli Telefon Numaranızı Giriş Yapınız!',
                    })
                    formValid = false;
                    field.style.borderColor = "red";
                    field.style.borderWidth = "2px";
                    return 0;
                } else {
                    field.style.borderColor = "";
                }
            }
        });

        if (checkbox.checked === false) {
            formValid = false;
            checkbox.style.borderColor = "red";
            checkbox.style.borderWidth = "2px";
        } else {
            checkbox.style.borderColor = "";
        }

        if (formValid) {
            formStepsNum++;
            updateProgressBar();
            updateFormSteps();
            $(".tarife").show();
            $(".firma-gecis-page").hide();
            $(".yeni-kurulum-page").hide();
            $(".gecis-tarife-bilgilendirme").hide();
            $(".yeni-tarife-bilgilendirme").hide();
        }
    });
});






// Yeni Kurulum ve Firma Geçişleri
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
        document.getElementById("hizmetNumarasi").value = "";
        document.getElementById("sehir").value = "";
        document.getElementById("ilce").value = "";
        document.getElementById("mahalle").value = "";
        document.getElementById("sokak").value = "";
        document.getElementById("diskapino").value = "";
        document.getElementById("ickapino").value = "";
        $(".firma-gecis-page").hide();
        $(".tarife").show();
    });

    $("#gecis-buton-next").click(function () {
        var hizmetNumarasi = document.getElementById("hizmetNumarasi").value;
        if (hizmetNumarasi == "") {
            Swal.fire({
                icon: 'error',
                title: 'Ooops..',
                text: 'Lütfen Hizmet Numaranızı Girin!',
            })
        } else {
            $(".firma-gecis-page").hide();
            $(".hiz-ogrenme").show();
            $(".yeni-tarife-bilgilendirme").hide();
            $(".gecis-tarife-bilgilendirme").show();
        }
    });

    $("#yeni-buton-prev").click(function () {
        document.getElementById("yk-sehir").value = "";
        document.getElementById("yk-ilce").value = "";
        document.getElementById("yk-mahalle").value = "";
        document.getElementById("yk-sokak").value = "";
        document.getElementById("yk-diskapino").value = "";
        document.getElementById("yk-ickapino").value = "";
        $(".yeni-kurulum-page").hide();
        $(".tarife").show();
    });

    $("#yeni-buton-next").click(function () {
        $(".yeni-kurulum-page").hide();
        $(".hiz-ogrenme").show();
        $(".gecis-tarife-bilgilendirme").hide();
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

// Özet Buton Yönlendirmeleri

$("#adress-duzenle-buton").click(function () {
    var firmaKontrol = document.getElementById("sehir").value;
    var bireyKontrol = document.getElementById("yk-sehir").value;

    if (firmaKontrol == "") {
        $("#yeni-kurulum-page").show();
        $(".hiz-ogrenme").hide();
        $("#step-kurulum").addClass("form-step-active");

        $("#step-ozet").hide();
        $("#step-ozet").removeClass("form-step-active");
        formStepsNum = formStepsNum - 2;
        updateFormSteps();
        updateProgressBar();
    }
    if (bireyKontrol == "") {
        $("#firma-gecis-page").show();
        $(".hiz-ogrenme").hide();
        $("#step-kurulum").addClass("form-step-active");

        $("#step-ozet").hide();
        $("#step-ozet").removeClass("form-step-active");
        formStepsNum = formStepsNum - 2;
        updateFormSteps();
        updateProgressBar();
    }
});

$("#adress-duzenle-buton-mobil").click(function () {
    $("#step-kurulum").show();
    $("#step-kurulum .tarife-group-pages").show();
    $("#step-kurulum").addClass("form-step-active");

    $("#step-ozet").hide();
    $("#step-ozet").removeClass("form-step-active");
    formStepsNum = formStepsNum - 2;
    updateFormSteps();
    updateProgressBar();
});


$("#ozet-paket-buton").click(function () {
    $("#step-paket").show();
    $("#step-paket").addClass("form-step-active");

    $("#step-ozet").hide();
    $("#step-ozet").removeClass("form-step-active");
    formStepsNum = formStepsNum - 1;
    updateFormSteps();
    updateProgressBar();
});

$("#ozet-paket-buton-mobil").click(function () {
    $("#step-paket").show();
    $("#step-paket").addClass("form-step-active");

    $("#step-ozet").hide();
    $("#step-ozet").removeClass("form-step-active");
    formStepsNum = formStepsNum - 1;
    updateFormSteps();
    updateProgressBar();
});




