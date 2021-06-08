const mix= require('laravel mix');


mix.js('resources/js/app.js', 'my website/js').setPublicPath('my website/js')
mix.js("","my website/js")
.sass("resourses/scss/app.scss","my website/css").setPublicPath('my website/css')


