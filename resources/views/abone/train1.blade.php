@extends('layouts.app')

@section('')
<link rel="stylesheet" href=" {{asset('css/my.css')}} ">
@endsection


@section('content')

    <form action="" class="form mt-5">
        <h2 class="text-center">GıbırNet'e Hoş Geldiniz</h2>

        {{-- Progress Bar --}}
        <div class="progressbar">
            <div class="progress1" id="progress1"></div>

            <div class="progress-step progress-step-active" data-title="Abone Türü"></div>
            <div class="progress-step" data-title="Adress Bilgileri"></div>
            <div class="progress-step" data-title="Tarifeler"></div>
            <div class="progress-step" data-title="Özet"></div>
            <div class="progress-step" data-title="Tamamlandı"></div>
        </div>

        {{-- Steps --}}
        <div class="form-step form-step-active">
            <div class="abone mt-5">
                <h2 class="step-title">Abonelik Tipini Seçiniz</h2>
                <hr class="gizle">
                <div class="abone-group mt-4">
                    <div >
                        <a class="btn abone-group-btn" id="bireysel" name="bireysel">Bireysel</a>
                    </div>
                    <div>
                        <a class="btn abone-group-btn" id="kurumsal" name="kurumsal">Kurumsal</a>
                    </div>
                </div>
            </div>
            <div class="abone-second-page">
                <div class="bireysel-page">
                    <h2 class="step-title">Bireysel Abonelik</h2>
                    <hr>
                    <div class="row row-cols-2">
                        <div class="input-group col-6">
                            <label class="gizle">Ad</label>
                            <input type="text" name="ad" id="ad" placeholder="Ad" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Soyad</label>
                            <input type="text" name="soyad" id="soyad" placeholder="Soyad" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">E-Posta</label>
                            <input type="email" name="mail" id="mail" placeholder="gibirnet@gmail.com" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Telefon</label>
                            <input type="tel" name="telefon" id="telefon" placeholder="+90 5*** *** ****" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">TC Kimlik No</label>
                            <input type="text" name="tc" id="tc" placeholder="1111 1111 111" required />
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Doğum Tarihi</label>
                            <input style="padding-left: .90rem" type="date" name="dogumtarih" id="dogumtarih" required/>
                        </div>
                    </div>
                    <div class="birey mt-5">
                        <input type="checkbox" id="bireyCheckbox" class="birey-checkbox" required>
                        <label for="bireyCheckbox" class="birey-checkbox-title ">Kişisel verilerimin işlenmesini izin veriyorum.</label>
                    </div>
                    <div class="birey-footer mt-2">
                        <p class="birey-footer-aciklama">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae enim nulla ab consequuntur sequi! Velit illo necessitatibus architecto eveniet ducimus perferendis sed, omnis nulla alias dicta commodi eum ipsam.
                        </p>
                    </div>
                    <div class="btns-group mt-5">
                        <a href="#" class="btn" id="abone-buton-prev">Geri</a>
                        <a href="#" class="btn btn-next" id="abone-buton-next">İleri</a>
                    </div>
                </div>
                <div class="firma-page">
                    <hr class="goster mb-5">
                    <h2 class="step-title mobile-firma-title-gizle">Firma Abonelik</h2>
                    <hr class="gizle">
                    <div class="row row-cols-2 mobile-firma">
                        <h2 class="step-title mobile-firma-title-goster col-12 mt-3">Firma Abonelik</h2>
                        <div class="input-group col-12">
                            <label class="gizle">Firma Adı</label>
                            <input type="text" name="firmaAdi" id="firmaAdi" placeholder="Firma Adı" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Vergi Dairesi</label>
                            <input type="text" name="vergiDaire" id="vergiDaire" placeholder="Vergi Dairesi" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Vergi No</label>
                            <input type="text" name="vergiNo" id="vergiNo" placeholder="Vergi No" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Ad</label>
                            <input type="text" name="ad" id="ad" placeholder="Ad" required/>
                        </div>

                        <div class="input-group col-6">
                            <label class="gizle">Soyad</label>
                            <input type="text" name="soyad" id="soyad" placeholder="Soyad" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">E-Posta</label>
                            <input type="email" name="email" id="email" placeholder="gibirnet@gmail.com" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">Telefon</label>
                            <input type="tel" name="telefon" id="telefon" placeholder="0 5** *** ****" required/>
                        </div>
                        <div class="input-group col-6">
                            <label class="gizle">TC Kimlik No</label>
                            <input type="text" name="tc" id="tc" placeholder="1111 1111 111" required/>
                        </div>

                        <div class="input-group col-6">
                            <label class="gizle">Dogum Tarihi</label>
                            <input type="date" name="dogumtarih" id="dogumtarih" required/>
                        </div>
                    </div>
                    <div class="birey">
                        <input type="checkbox" id="bireyCheckbox" class="birey-checkbox" required>
                        <label for="bireyCheckbox" class="birey-checkbox-title ">Kişisel verilerimin işlenmesini izin veriyorum.</label>
                    </div>
                    <div class="birey-footer mt-2">
                        <p class="birey-footer-aciklama">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae enim nulla ab consequuntur sequi! Velit illo necessitatibus architecto eveniet ducimus perferendis sed, omnis nulla alias dicta commodi eum ipsam.
                        </p>
                    </div>
                    <div class="btns-group mt-5 btns-abonelik-mobile">
                        <a href="#" class="btn" id="firma-buton-prev">Geri</a>
                        <a href="#" class="btn btn-next " id="firma-buton-next">İleri</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-step">
            <div class="tarife mt-3">
                <h2 class="step-title">Abonelik Başvuru Tipini Seçiniz</h2>
                <hr>
                <div class="tarife-group mt-4">
                    <div class="tarife-btns">
                        <a class="btn tarife-group-btn" id="internetVar" name="internetVar">Geçiş</a>
                    </div>
                    <div class="tarife-btns">
                        <a class="btn tarife-group-btn" id="internetYok" name="internetYok">Yeni Kurulum</a>
                    </div>
                </div>
                <div class="tarife-group mt-4">
                    <a href="#" class="btn btn-prev" style="">Geri</a>
                </div>
            </div>
            <div class="tarife-group-pages mt-3">
                <div class="firma-gecis-page">
                    <h2 class="step-title">Geçiş İşlemleri</h2>
                    <hr>
                    <div class="row row-cols-2 mobile-abonelik">
                        <div class="input-group col-12">
                            <label class="gizle">Hizmet Numarası</label>
                            <input type="text" name="hizmetNumarası" id="hizmetNumarası" placeholder="Hizmet Numarası" required>
                        </div>
                        <div class="select-group col-12 mt-3 mb-2">
                            <p class="hizmet-no-bilgi">xDSL hizmet numarası <strong>18</strong> , <strong>88</strong> veya <strong>179</strong> ile başlayan 10 haneli bir numaradır. Farklı sayılarla başlayan numaralar geçiş işlemlerinde geçersiz sayılır ve başvuru işlemleri bu numaralar ile başlatılamaz. Eğer hizmet numaranızı bilmiyorsanız kullanmakta olduğunuz internet servis sağlayıcınızdan bu numarayı öğrenmeniz gerekir.</p>
                        </div>
                        <div class="select-group col-6" id="select-sehir">
                            <label class="tarife-label">Şehir</label>
                            <select class ="gecis-select" name="sehir" id="sehir" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Şehir</option>
                                <option value="Ankara">Ankara</option>
                                <option value="Konya">Konya</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-ilce">
                            <label class="tarife-label">İlçe</label>
                            <select class ="gecis-select" name="ilce" id="ilce" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>İlçe</option>
                                <option value="Mamak">Mamak</option>
                                <option value="Kızılay">Kızılay</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-mahalle">
                            <label class="tarife-label">Mahalle</label>
                            <select class ="gecis-select" name="mahalle" id="mahalle" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Mahalle</option>
                                <option value="Alaylar1">Alaylar 1</option>
                                <option value="Alaylar2">Alaylar 2</option>
                                <option value="Alaylar3">Alaylar 3</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-sokak">
                            <label class="tarife-label">Cadde/Sokak</label>
                            <select class ="gecis-select" name="sokak" id="sokak" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Cadde/Sokak</option>
                                <option value="MÜ">Mustafa Üstündag</option>
                                <option value="EA">Eti Alüminyum</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-diskapino">
                            <label class="tarife-label">Dış Kapı No</label>
                            <select class ="gecis-select" name="diskapino" id="diskapino" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Dış Kapı No</option>
                                <option value="17">17</option>
                                <option value="57">57</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-ickapino">
                            <label class="tarife-label">İç Kapı No</label>
                            <select class ="gecis-select" name="ickapino" id="ickapino" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>İç Kapı No</option>
                                <option value="20">20</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div class="btns-group mt-5">
                        <a href="#" class="btn" id="gecis-buton-prev">Önceki</a>
                        <a href="#" class="btn" id="gecis-buton-next">Sonraki</a>
                    </div>
                </div>
                <div class="yeni-kurulum-page">
                    <h2 class="step-title">Yeni Kurulum</h2>
                    <hr>
                    <div class="row row-cols-2 mobile-abonelik">
                        <div class="select-group col-6" id="select-yk-sehir">
                            <label class="tarife-label">Şehir</label>
                            <select class ="gecis-select" name="yk-sehir" id="yk-sehir" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Şehir</option>
                                <option value="a">Ankara</option>
                                <option value="k">Konya</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-yk-ilce">
                            <label class="tarife-label">İlçe</label>
                            <select class ="gecis-select" name="yk-ilce" id="yk-ilce" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>İlçe</option>
                                <option value="m">Mamak</option>
                                <option value="k">Kızılay</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-yk-mahalle">
                            <label class="tarife-label">Mahalle</label>
                            <select class ="gecis-select" name="yk-mahalle" id="yk-mahalle" required onchange="changeDesign('yk-mahalle')">
                                <option value="" selected disabled hidden>Mahalle</option>
                                <option value="b">Alaylar 1</option>
                                <option value="b">Alaylar 2</option>
                                <option value="b">Alaylar 3</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-yk-sokak">
                            <label class="tarife-label">Cadde/Sokak</label>
                            <select class ="gecis-select" name="yk-sokak" id="yk-sokak" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Cadde/Sokak</option>
                                <option value="a">Mustafa Üstündag</option>
                                <option value="a">Eti Alüminyum</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-yk-diskapino">
                            <label class="tarife-label">Dış Kapı No</label>
                            <select class ="gecis-select" name="yk-diskapino" id="yk-diskapino" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>Dış Kapı No</option>
                                <option value="17">17</option>
                                <option value="57">57</option>
                            </select>
                        </div>
                        <div class="select-group col-6" id="select-yk-ickapino">
                            <label class="tarife-label">İç Kapı No</label>
                            <select class ="gecis-select" name="yk-ickapino" id="yk-ickapino" required onchange="changeDesign()">
                                <option value="" selected disabled hidden>İç Kapı No</option>
                                <option value="20">20</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div class="btns-group mt-5">
                        <a href="#" class="btn" id="yeni-buton-prev">Önceki</a>
                        <a href="#" class="btn" id="yeni-buton-next">Sonraki</a>
                    </div>
                </div>
                <div class="gecis-tarife-bilgilendirme mt-3 row">
                    <h2 class="step-title col-12 altyapı-sorgu">İnternet Alt Yapı Sorgulama Sonucunuz</h2>
                    <hr class="gizle">
                    <div class="bilgilendirme-page mt-3 mb-3">
                        <div class="sonuc-boxs">
                            <label class="hiz-sonuc">60 Mbps</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">BBK Kodu</label>
                            <label class="sonuc-label">24681002</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">Boş Port</label>
                            <label class="sonuc-label">VAR</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">Altyapı Türü</label>
                            <label class="sonuc-label1">VDSL2</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">Santral Mesafe</label>
                            <label class="sonuc-label">240 Metre</label>
                        </div>

                    </div>
                    <div class="btns-group mt-5 ">
                        <a href="#" class="btn" id="bilgi-gecis-buton-prev">Önceki</a>
                        <a href="#" class="btn btn-next" id="bilgi-gecis-buton-next">Sonraki</a>
                    </div>
                </div>
                <div class="yeni-tarife-bilgilendirme mt-3 row">
                    <h2 class="step-title col-12 altyapı-sorgu">İnternet Alt Yapı Sorgulama Sonucunuz</h2>
                    <hr class="gizle">
                    <div class="bilgilendirme-page mt-3 mb-3">
                        <div class="sonuc-boxs">
                            <label class="hiz-sonuc">60 Mbps</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">BBK Kodu</label>
                            <label class="sonuc-label">24681002</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">Boş Port</label>
                            <label class="sonuc-label">VAR</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">Altyapı Türü</label>
                            <label class="sonuc-label1">VDSL2</label>
                        </div>
                        <div class="sonuc-groups">
                            <label class="sonuc-label">Santral Mesafe</label>
                            <label class="sonuc-label">240 Metre</label>
                        </div>

                    </div>
                    <div class="btns-group mt-5">
                        <a href="#" class="btn" id="bilgi-yeni-buton-prev">Önceki</a>
                        <a href="#" class="btn btn-next" id="bilgi-yeni-buton-next">Sonraki</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-step">
            <h2 class="step-title gizle">Paket Tipini Seçiniz</h2>
            <hr class="gizle">
            <div class="paketler">
                <div class="paket-int" id="paket1" onclick="toggleGroup(this)">
                    <hr class="paket-hr">
                    <h3 class="paket-title col-12">Tarife Seçimi</h3>
                    <div class="paketler-block" id="paket1-1">
                        <div class="paket-block">
                            <label class="paket-hiz-title">35 Mbps</label>
                            <label class="paket-hiz-turu">VDSL2</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">35 Mbps'e kadar indirme</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">12 Mbps'e kadar yükleme</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">Taahhütsüz</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">Kotasız</label>
                        </div>
                    </div>
                    <div class="paketler-block" id="paket1-2">
                        <div class="paket-block">
                            <label class="paket-hiz-title">100 Mbps</label>
                            <label class="paket-hiz-turu">VDSL2</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">100 Mbps'e kadar indirme</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">15 Mbps'e kadar yükleme</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">Taahhütsüz</label>
                        </div>
                        <div class="paket-aciklama">
                            <i class="bi bi-check2-circle icon-style"></i>
                            <label class="paket-hiz-ozellik">Kotasız</label>
                        </div>
                    </div>
                </div>
                <div class="paket-int" id="paket2" onclick="toggleGroup(this)">
                    <hr class="paket-hr">
                    <h3 class="paket-title col-12">DSL Altyapı İçin Modem Talebi (İsteğe Bağlı)</h3>
                    <div class="paketler-block1" id="paket2-1">
                        <div class="paket-block1">
                            <h2 class="paket-block-modem">Modem İstemiyorum</h2>
                        </div>
                    </div>
                    <div class="paketler-block1" id="paket2-2">
                        <div class="model-left">
                            <h4 class="model-isim">ZYXEL VMG1312-T20B</h4>
                            <div class="model-list">
                                500<sup class="model-list-fiyat-tur">,00 TL</sup>
                            </div>
                        </div>
                        <div class="model-right">
                            <img src="{{ asset('img/zxyel-modem.png') }}" class="modem-resmi" alt="gibir_modem">
                        </div>
                    </div>
                </div>
                <div class="paket-int" id="paket3" onclick="toggleGroup(this)">
                    <hr class="paket-hr">
                    <h3 class="paket-title col-12">Sabit Ip Talebi</h3>
                    <div class="paketler-block2" id="paket3-1">
                        <div class="ip-yok">
                            <h2 class="paket-sabit-notip">Sabit IP İstemiyorum</h2>
                        </div>
                    </div>
                    <div class="paketler-block2" id="paket3-2">
                        <div class="ip-var">
                            <h2 class="paket-sabit-ip">Sabit IP İstiyorum</h2>
                            <div class="ip-fiyat">
                                30<sup class="ip-fiyat-tur">,00 TL</sup>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="paket-int" id="paket4" onclick="toggleGroup(this)">
                    <hr class="paket-hr">
                    <h3 class="paket-title col-12">Güvenli İnternet Profili Seçimi</h3>
                    <div class="paketler-block3" id="paket4-1">
                        <div class="paketler-block3-title">
                            <h2 class="paketler-guvenlik">Güvenli İnternet Profili İstemiyorum</h2>
                        </div>
                    </div>
                    <div class="paketler-block3" id="paket4-2">
                        <img src="{{ asset('img/Group6.svg') }}" class="guvenlik-imgs" alt="">
                        <div class="paketler-guvenlik1">
                            <h2 class="paket-guvenlik">Çocuk Profil</h2>
                        </div>
                    </div>
                    <div class="paketler-block3" id="paket4-3">
                        <img src="{{ asset('img/Group5.svg') }}" class="guvenlik-imgs" alt="">
                        <div class="paketler-guvenlik1">
                            <h2 class="paket-guvenlik">Aile Profili</h2>
                        </div>
                    </div>
                </div>
                <div class="btns-group mt-5" id="paket-btn-group">
                    <a href="#" class="btn btn-prev" id="paket-buton-prev">Önceki</a>
                    <a href="#" class="btn btn-next" id="paket-buton-next">Sonraki</a>
                </div>
            </div>
        </div>
        <div class="form-step">
            <div>
                <div class="ozet-form">
                    <div class="ozet-form-baslik">
                        <h5>Abone Bilgileriniz</h5>
                    </div>
                    <hr>
                    <div class="abone-bilgi-list">
                        <label class="abone-bilgi">Abdurrahman</label>
                        <label class="abone-bilgi">Yanbakanoğulları</label>
                        <label class="abone-bilgi">12345678902</label>
                        <label class="abone-bilgi">(530) 123 45 67</label>
                    </div>
                </div>
                <div class="ozet-form-adress">
                    <div class="ozet-adress">
                        <h5>Adres Bilginiz</h5>
                        <button class="ozet-adress-btn" >Adress Düzenle <i class="bi bi-pencil-square"></i></button>
                    </div>
                    <hr>
                    <div class="ozet-adress-tittle">
                        <label>Şeker Mahallesi, Kerbela Sokak, No: 2 / 803, Selçuklu / KONYA</label>
                    </div>
                </div>
                <div class="ozet-form-paket">
                    <div class="ozet-paket">
                        <h5>Tercihleriniz</h5>
                        <button class="ozet-paket-buton">Tercih Düzenle <i class="bi bi-pencil-square"></i></button>
                    </div>
                    <hr>
                    <div class="ozet-paket-aciklama">
                        <div class="ozet-paket-title">
                            <ul>
                                <li>Yeni Kurulum</li>
                                <li>35 Mbps'e kadar indirme</li>
                                <li>12 Mbps'e kadar yükleme</li>
                                <li>Taahütsüz</li>
                                <li>Kotasız</li>
                                <li>Modem İstemiyorum</li>
                                <li>Sabit Ip İstemiyorum</li>
                            </ul>
                        </div>
                        <div class="ozet-paket-fiyat">
                            <div>
                                <div class="ozet-paket-fiyat-detay">
                                    <label>Yeni Kurulum(300,00 TL/6 Ay)</label>
                                    <label>50,00 TL</label>
                                </div>
                                <div class="ozet-paket-fiyat-detay">
                                    <label>35 Mbps VDSL (Aylık)</label>
                                    <label>100,00 TL</label>
                                </div>
                                <hr>
                                <div class="ozet-paket-fiyat-detay">
                                    <label>Toplam Tutar</label>
                                    <label>150,00 TL</label>
                                </div>
                            </div>
                            <button class="ozet-paket-fiyat-btn">
                                Onayla
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btns-group mt-5">
                <a href="#" class="btn btn-prev" id="abone-buton-prev">Önceki</a>
                <a href="#" class="btn btn-next" id="abone-buton-next">Sonraki</a>
            </div>
        </div>
        <div class="form-step">
            <div class="yonlendirme-pages">
                {{-- Burası Yapılacak --}}
            </div>
        </div>
    </form>

@endsection

@section('js')
<script src="{{ asset('js/my.js') }}"></script>


@endsection
