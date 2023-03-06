@extends('layouts.app')

@section('')
<link rel="stylesheet" href=" {{asset('css/my.css')}} ">
@endsection


@section('content')

    <form action="" class="form">
        <h2 class="text-center">GıbırNet'e Hoş Geldiniz</h2>
        <hr>

        {{-- Progress Bar --}}
        <div class="progressbar">
            <div class="progress1" id="progress1"></div>

            <div class="progress-step progress-step-active" data-title="Abone Türü"></div>
            <div class="progress-step" data-title="Adress Bilgileri"></div>
            <div class="progress-step" data-title="Tarifeler"></div>
            <div class="progress-step" data-title="Özet"></div>
            <div class="progress-step" data-title="Tamamlandı"></div>
        </div>
        <hr>

        {{-- Steps --}}
        <div class="form-step form-step-active mt-5">
            <div class="abone">
                <div class="abone-group">
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
                            <input type="email" name="mail" id="mail" placeholder="E-Posta"required/>
                        </div>
                        <div class="input-group col-6">
                            <label>Telefon</label>
                            <input type="tel" name="telefon" id="telefon" placeholder="+90 5*** *** ****"required/>
                        </div>
                        <div class="input-group col-6">
                            <label>TC Kimlik No</label>
                            <input type="text" name="ad" id="ad" placeholder="1111 1111 111" required />
                        </div>
                        <div class="input-group col-6">
                            <label>Doğum Tarihi</label>
                            <input style="padding-left: .90rem" type="date" name="dogumtarih" id="dogumtarih" required/>
                        </div>
                    </div>
                    <div class="birey mt-3">
                        <input type="checkbox" class="birey-checkbox" id="bireyCheckbox">
                        <label class="birey-checkbox-title ">Kişisel verilerimin işlenmesini izin veriyorum.</label>
                    </div>
                    <div class="btns-group mt-3">
                        <a href="#" class="btn" id="abone-buton-prev">Önceki</a>
                        <a href="#" class="btn btn-next ">Sonraki</a>
                    </div>
                </div>
                <div class="firma-page">
                    <div class="input-group">
                        <label for="username">Bireysel</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div class="input-group">
                        <label for="position">Position</label>
                        <input type="text" name="position" id="position" />
                    </div>
                    <div class="btns-group">
                        <a href="#" class="btn" id="abone-buton-prev">Önceki</a>
                        <a href="#" class="btn btn-next ">Sonraki</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-step">
            <div class="input-group">
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone" />
            </div>
            <div class="input-group">
                <label for="email">Position</label>
                <input type="text" name="email" id="email" />
            </div>
            <div class="btns-group">
                <a href="#" class="btn btn-prev">Previous</a>
                <a href="#" class="btn btn-next">Next</a>
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
