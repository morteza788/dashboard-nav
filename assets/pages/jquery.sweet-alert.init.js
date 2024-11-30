/**
 * Theme: Dastyle - Responsive Bootstrap 4 Admin Dashboard
 * Author: themes
 * Sweet Alert Js
 */


 
!function ($) {
    "use strict";

    var SweetAlert = function () {
    };

    //examples
    //examples
    SweetAlert.prototype.init = function () {

        //Basic
        $('#sa-basic').on('click', function () {
            Swal.fire('همه میتوانند با رایانه کار کنند')
        });

        //A title with a text under
        $('#sa-title').click(function () {
            Swal.fire(
                'اینترنت?',
                'آن چیز هنوز در اطراف است؟',
                'question'
            )
        });

        //Success Message
        $('#sa-success').click(function () {
            Swal.fire(
                'آفرین!',
                'روی دکمه کلیک کردید!',
                'success'
              )
        });

        //Warning Message
        
        $('#sa-warning').click(function () {
            
            swal.fire({
                title: 'مطمئنی؟',
                text: "شما نمی توانید این را برگردانید!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'بله ، آن را حذف کنید!',
                cancelButtonText: 'نه ، لغو!',
                reverseButtons: true
              }).then(function(result) {
                if (result.value) {
                  swal.fire(
                    'حذف شده!',
                    'پرونده شما حذف شده است.',
                    'success'
                  )
                } else if (
                  // Read more about handling dismissals
                  result.dismiss === Swal.DismissReason.cancel
                ) {
                  swal.fire(
                    'لغو شد',
                    'پرونده خیالی شما ایمن است :)',
                    'error'
                  )
                }
              })
        });

        // with footer
        $('#sa-footer').click(function () {
          Swal.fire({
            icon: 'error',
            title: 'اوه...',
            text: 'مشکلی پیش آمد!',
            footer: '<a href>چرا من این مسئله را دارم؟</a>'
          })
        });


        //Custom Position
        $('#sa-topright-success').click(function () {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'کار شما ذخیره شده است',
            showConfirmButton: false,
            timer: 1500
          })
        });
        //Custom Animation
        $('#sa-custom-animation').click(function () {
          Swal.fire({
            title: 'انیمیشن سفارشی با انیمیت سی اس اس',
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
          })
        });
        
        //Parameter
        $('#sa-params').click(function () {

            Swal.fire({
                title: 'مطمئنی؟',
                text: "شما نمی توانید این را برگردانید!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '$success',
                cancelButtonColor: '$danger',
                confirmButtonText: 'بله ، آن را حذف کنید!'
              }).then(function(result) {
                if (result.value) {
                  Swal.fire(
                    'حذف شده!',
                    'پرونده شما حذف شده است',
                    'success'
                  )
                }
              })
        });

        //Custom Image
        $('#sa-image').click(function () {
            Swal.fire({
                title: 'داستایل',
                text: 'مودال با یک تصویر سفارشی.',
                imageUrl: 'assets/images/logo-sm.png',
                imageHeight: 80,
                animation: false
            })            
        });

        

        //custom html alert
        $('#custom-html-alert').click(function () {
            Swal.fire({
                title: '<strong>اچ تی ام ال <u>مثال</u></strong>',
                type: 'info',
                html:
                  'شما می توانید استفاده کنید <b>متن پرحجم</b>, ' +
                  '<a href="//github.com">لینک</a> ' +
                  'و بقیه تگ های اچ تی ام ال',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                  '<i class="fa fa-thumbs-up"></i> عالی!',
                confirmButtonAriaLabel: ' عالی!',
                cancelButtonText:
                  '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'نه',
              })
        });

        //Custom width padding
        $('#custom-padding-width-alert').click(function () {
            Swal.fire({
                title: 'عرض سفارشی ، دکمه ، پس زمینه.',
                width: 600,
                padding: 100,
                background: 'rgba(254,254,254,0.9) url(assets/images/pattern.png)',
            })
        });

        //Auto Close
        $('#sa-auto-close').click(function () {
            var timerInterval
            Swal.fire({
            title: 'هشدار نزدیک خودکار!',
            html: 'من بسته خواهم شد در چند ثانیه.',
            timer: 2000,
            onBeforeOpen: function() {
                Swal.showLoading()
                timerInterval = setInterval(function() {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
                }, 100)
            },
            onClose: function() {
                clearInterval(timerInterval)
            }
            }).then(function(result) {
            if (
                // Read more about handling dismissals
                result.dismiss === Swal.DismissReason.timer
            ) {
                console.log('من توسط تایمر بسته شدم')
            }
            })
        });

        //Ajax
        $('#ajax-alert').click(function () {
            Swal.fire({
                title: 'نام کاربری GitHub خود را ارسال کنید',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'جستجو',
                showLoaderOnConfirm: true,
                preConfirm: function(login) {
                  return fetch('//api.github.com/users/+ login')
                    .then(function(response) {
                      if (!response.ok) {
                        throw new Error(response.statusText)
                      }
                      return response.json()
                    })
                    .catch(function(error) {
                      Swal.showValidationMessage(
                        "درخواست انجام نشد:" +error
                      )
                    })
                },
                allowOutsideClick: function() {return !Swal.isLoading()}
              }).then(function(result) {
                if (result.value) {
                  Swal.fire({
                    title: "result.value.login's avatar",
                    imageUrl: result.value.avatar_url
                  })
                }
              })
        });

        //chaining modal alert
        $('#chaining-alert').click(function () {
            Swal.mixin({
                input: 'text',
                confirmButtonText: 'بعد &rarr;',
                showCancelButton: true,
                progressSteps: ['1', '2', '3']
              }).queue([
                {
                  title: 'سوال 1',
                  text: 'زنجیر کردن مودال آسان است'
                },
                'سوال 2',
                'سوال 3'
              ]).then(function(result) {
                if (result.value) {
                  Swal.fire({
                    title: 'تمام شده!',
                    html:
                      'پاسخ های شما: <pre><code>' +
                        JSON.stringify(result.value) +
                      '</code></pre>',
                    confirmButtonText: 'عالی!'
                  })
                }
              })
        });

        //Danger
        $('#dynamic-alert').click(function () {
            var ipAPI = 'https://api.ipify.org?format=json'
            Swal.queue([{
                title: 'IP عمومی شما',
                confirmButtonText: 'IP عمومی من را نشان دهید',
                text:
                  'IP عمومی شما دریافت خواهد شد' +
                  'از طریق درخواست AJAX',
                showLoaderOnConfirm: true,
                preConfirm: function() {
                  return fetch(ipAPI)
                    .then(function(response) {return response.json()})
                    .then(function(data) { Swal.insertQueueStep(data.ip)})
                    .catch(function() {
                      Swal.insertQueueStep({
                        type: 'error',
                        title: 'نمی توانید IP عمومی خود را دریافت کنید'
                      })
                    })
                }
              }])
        });

        $('#sa-mixin').click(function () {
          var Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            onOpen: function(toast) {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'با موفقیت امضا شد'
          })
        });
    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing
    function ($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);