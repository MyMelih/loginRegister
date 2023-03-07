@extends('layouts.app')

@section('')
<link rel="stylesheet" href=" {{asset('css/my.css')}} ">
@endsection


@section('content')

    <form action="" class="form">
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
            <div class="abone mt-3">
                <h2 class="step-title">Abonelik Tipini Seçiniz</h2>
                <hr>
                <div class="abone-group mt-2">
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
                    <div class="row row-cols-2">
                        <div class="input-group col-6">
                            <label>Ad</label>
                            <input type="text" name="ad" id="ad" placeholder="Ad" required/>
                        </div>
                        <div class="input-group col-6">
                            <label>Soyad</label>
                            <input type="text" name="soyad" id="soyad" placeholder="Soyad"required/>
                        </div>
                        <div class="input-group col-6">
                            <label>E-Posta</label>
                            <input type="email" name="mail" id="mail" placeholder="gibirnet@gmail.com"required/>
                        </div>
                        <div class="input-group col-6">
                            <label>Telefon</label>
                            <input type="tel" name="telefon" id="telefon" placeholder="+90 5*** *** ****"required/>
                        </div>
                        <div class="input-group col-6">
                            <label>TC Kimlik No</label>
                            <input type="text" name="tc" id="tc" placeholder="1111 1111 111" required />
                        </div>
                        <div class="input-group col-6">
                            <label>Doğum Tarihi</label>
                            <input style="padding-left: .90rem" type="date" name="dogumtarih" id="dogumtarih" required/>
                        </div>
                    </div>
                    <div class="birey mt-5">
                        <input type="checkbox" id="bireyCheckbox" class="birey-checkbox">
                        <label for="bireyCheckbox" class="birey-checkbox-title ">Kişisel verilerimin işlenmesini izin veriyorum.</label>
                    </div>
                    <div class="birey-footer mt-2">
                        <p class="birey-footer-aciklama">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae enim nulla ab consequuntur sequi! Velit illo necessitatibus architecto eveniet ducimus perferendis sed, omnis nulla alias dicta commodi eum ipsam.
                        </p>
                    </div>
                    <div class="btns-group mt-3">
                        <a href="#" class="btn" id="abone-buton-prev">Geri</a>
                        <a href="#" class="btn btn-next" id="abone-buton-next">İleri</a>
                    </div>
                </div>
                <div class="firma-page">
                    <div class="row row-cols-2">
                        <div class="input-group col-12">
                            <label>Firma Adı</label>
                            <input type="text" name="firmaAdi" id="firmaAdi" placeholder="Firma Adı" />
                        </div>
                        <div class="input-group col-6">
                            <label>Vergi Dairesi</label>
                            <input type="text" name="vergiDaire" id="vergiDaire" placeholder="Vergi Dairesi"/>
                        </div>
                        <div class="input-group col-6">
                            <label>Vergi No</label>
                            <input type="text" name="vergiNo" id="vergiNo" placeholder="Vergi No"/>
                        </div>
                        <div class="input-group col-6">
                            <label>Ad</label>
                            <input type="text" name="ad" id="ad" placeholder="Ad"/>
                        </div>

                        <div class="input-group col-6">
                            <label>Soyad</label>
                            <input type="text" name="soyad" id="soyad" placeholder="Soyad"/>
                        </div>
                        <div class="input-group col-6">
                            <label>E-Posta</label>
                            <input type="email" name="email" id="email" placeholder="gibirnet@gmail.com"/>
                        </div>
                        <div class="input-group col-6">
                            <label>Telefon</label>
                            <input type="tel" name="telefon" id="telefon" placeholder="0 5** *** ****"/>
                        </div>
                        <div class="input-group col-6">
                            <label>TC Kimlik No</label>
                            <input type="text" name="tc" id="tc" placeholder="1111 1111 111"/>
                        </div>

                        <div class="input-group col-6">
                            <label>Dogum Tarihi</label>
                            <input type="date" name="dogumtarih" id="dogumtarih" />
                        </div>
                    </div>
                    <div class="birey mt-5">
                        <input type="checkbox" id="bireyCheckbox" class="birey-checkbox">
                        <label for="bireyCheckbox" class="birey-checkbox-title ">Kişisel verilerimin işlenmesini izin veriyorum.</label>
                    </div>
                    <div class="birey-footer mt-2">
                        <p class="birey-footer-aciklama">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta recusandae enim nulla ab consequuntur sequi! Velit illo necessitatibus architecto eveniet ducimus perferendis sed, omnis nulla alias dicta commodi eum ipsam.
                        </p>
                    </div>
                    <div class="btns-group mt-3">
                        <a href="#" class="btn" id="firma-buton-prev">Geri</a>
                        <a href="#" class="btn btn-next " id="firma-buton-next">İleri</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-step">
            <div class="tarife mt-3">
                <h2 class="step-title">Abonelk Başvuru Tipini Seçiniz</h2>
                <hr>
                <div class="tarife-group mt-2">
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
            <div class="tarife-group-pages">
                <div class="firma-gecis-page">
                    <div class="row row-cols-2">
                        <div class="input-group col-12">
                            <label>Hizmet Numarası</label>
                            <input type="text" name="hizmetNumarası" id="hizmetNumarası" placeholder="Hizmet Numarası" required>
                        </div>
                        <div class="select-group col-12 mt-3 mb-2">
                            <p class="hizmet-no-bilgi">xDSL hizmet numarası <strong>18</strong> , <strong>88</strong> veya <strong>179</strong> ile başlayan 10 haneli bir numaradır. Farklı sayılarla başlayan numaralar geçiş işlemlerinde geçersiz sayılır ve başvuru işlemleri bu numaralar ile başlatılamaz. Eğer hizmet numaranızı bilmiyorsanız kullanmakta olduğunuz internet servis sağlayıcınızdan bu numarayı öğrenmeniz gerekir.</p>
                        </div>
                        <div class="select-group col-6">
                            <label>Şehir</label>
                            <select class ="gecis-select" name="sehir" id="sehir">
                                <option ></option>
                                <option value="">Ankara</option>
                                <option value="">Konya</option>
                            </select>
                        </div>
                        <div class="select-group col-6">
                            <label>İlçe</label>
                            <select class ="gecis-select" name="ilce" id="ilce">
                                <option></option>
                                <option value="">Mamak</option>
                                <option value="">Kızılay</option>
                            </select>
                        </div>
                        <div class="select-group col-6">
                            <label>Mahalle</label>
                            <select class ="gecis-select" name="mahalle" id="mahalle">
                                <option></option>
                                <option value="">Alaylar 1</option>
                                <option value="">Alaylar 2</option>
                                <option value="">Alaylar 3</option>
                            </select>
                        </div>
                        <div class="select-group col-6">
                            <label>Cadde/Sokak</label>
                            <select class ="gecis-select" name="sokak" id="sokak">
                                <option></option>
                                <option value="">Mustafa Üstündag</option>
                                <option value="">Eti Alüminyum</option>
                            </select>
                        </div>
                        <div class="select-group col-6">
                            <label>Dış Kapı No</label>
                            <select class ="gecis-select" name="diskapino" id="diskapino">
                                <option></option>
                                <option value="">17</option>
                                <option value="">57</option>
                            </select>
                        </div>
                        <div class="select-group col-6">
                            <label>İç Kapı No</label>
                            <select class ="gecis-select" name="ickapino" id="ickapino">
                                <option></option>
                                <option value="">20</option>
                                <option value="">4</option>
                            </select>
                        </div>
                    </div>
                    <div class="btns-group mt-3">
                        <a href="#" class="btn" id="gecis-buton-prev">Önceki</a>
                        <a href="#" class="btn btn-next ">Sonraki</a>
                    </div>
                </div>
                <div class="yeni-kurulum-page">
                </div>
            </div>
        </div>
        <div class="form-step">
            <div class="input-group">
                <label for="dob">Date of Birth</label>
                <input type="date" name="dob" id="dob" />
            </div>
            <div class="input-group">
                <label for="ID">National ID</label>
                <input type="number" name="ID" id="ID" />
            </div>
            <div class="btns-group">
                <a href="#" class="btn btn-prev">Previous</a>
                <a href="#" class="btn btn-next">Next</a>
            </div>
        </div>
        <div class="form-step">
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div class="input-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                />
            </div>
            <div class="btns-group">
                <a href="#" class="btn btn-prev">Previous</a>
                <a href="#" class="btn btn-next">Next</a>
            </div>
        </div>
        <div class="form-step">
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" />
            </div>
            <div class="input-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                />
            </div>
            <div class="btns-group">
                <a href="#" class="btn btn-prev">Previous</a>
                <input type="submit" value="Submit" class="btn">
            </div>
        </div>
    </form>

@endsection

@section('js')
<script src="{{ asset('js/my.js') }}"></script>


@endsection
