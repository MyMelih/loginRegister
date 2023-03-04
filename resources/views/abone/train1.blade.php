@extends('layouts.app')


@section('content')
    <form data-multi-step class="multi-step-form">
        <div class="card1" data-step>
            <h3 class="step-title">This is step 1</h3>
            <div class="form-group">
                <label for="mail">Email</label>
                <input type="email" required name="mail" id="mail">
            </div>
            <div class="form-group">
                <label for="password">Email</label>
                <input type="password" name="password" id="email">
            </div>
            <button type="button" data-next >Next</button>
        </div>
        <div class="card1" data-step>
            <h3 class="step-title">This is step 2</h3>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" name="address" id="address">
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" name="city" id="city">
            </div>
            <div class="form-group">
                <label for="zipcode">Zip Code</label>
                <input type="text" name="zipcode" id="zipcode">
            </div>
            <div class="button-group">
                <button type="button" data-previous >Previous</button>
                <button type="button" data-next >Next</button>
            </div>
        </div>
        <div class="card1" data-step>
            <h3 class="step-title">This is step 3</h3>
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName">
            </div>
            <div class="button-group">
                <button type="button" data-previous >Previous</button>
                <button type="submit">Submit</button>
            </div>
        </div>
    </form>

@endsection

@section('js')
<script src="{{ asset('js/my.js') }}"></script>
@endsection
