



$(function(){


  // window check

  var path = window.location.href.split('?id=')[1];
  var pathQr = window.location.href;


  var danhsach = [// 内容確認
    {
      id: 1,
      xungdanh: 'Bạn',
      Name: 'Minh Anh & NT'
    },
    {
      id: 2,
      xungdanh: 'Bạn',
      Name: 'Đại & NT'
    },
    {
      id: 3,
      xungdanh: 'Bạn',
      Name: 'Thanh Quý & NT'
    },
    {
      id: 4,
      xungdanh: 'Bạn',
      Name: 'Nhật & NT'
    },
    {
      id: 5,
      xungdanh: 'Bạn',
      Name: 'Linh & NT'
    },
    {
      id: 6,
      xungdanh: '',
      Name: 'Gia đình bạn Mỹ'
    },
    {
      id: 7,
      xungdanh: 'Bạn',
      Name: 'Luật & NT'
    },
    {
      id: 8,
      xungdanh: 'Bạn',
      Name: 'Huyền & NT'
    },
    {
      id: 9,
      xungdanh: '',
      Name: 'Gia đình bạn Oanh'
    },
    {
      id: 10,
      xungdanh: 'Bạn',
      Name: 'Hằng & NT'
    },
    {
      id: 11,
      xungdanh: 'Bạn',
      Name: 'Thảo & NT'
    },
    {
      id: 12,
      xungdanh: '',
      Name: 'Gia đình bạn Trang'
    },
    {
      id: 13,
      xungdanh: 'Bạn',
      Name: 'Huế & NT'
    },
    {
      id: 14,
      xungdanh: 'Bạn',
      Name: 'Thủy & NT'
    },
    {
      id: 15,
      xungdanh: '',
      Name: 'Gia đình bạn Mạnh'
    },
    {
      id: 16,
      xungdanh: 'Bạn',
      Name: 'Hồng Minh & Đức'
    },
    {
      id: 17,
      xungdanh: 'Bạn',
      Name: 'Đức & Hồng Minh'
    },
    {
      id: 18,
      xungdanh: 'Bạn',
      Name: 'Bảo & Đăng'
    },
    {
      id: 19,
      xungdanh: 'Bạn',
      Name: 'Đăng & Bảo'
    },
    {
      id: 20,
      xungdanh: 'Bạn',
      Name: 'Quy & NT'
    },
    {
      id: 21,
      xungdanh: 'Bạn',
      Name: 'Tuấn Vũ & NT'
    },
    {
      id: 22,
      xungdanh: 'Bạn',
      Name: 'Băng Tuyết & NT'
    },
    {
      id: 23,
      xungdanh: '',
      Name: 'Gia đình bạn Trà Giang'
    },
    {
      id: 24,
      xungdanh: 'Bạn',
      Name: 'Đức & NT'
    },
    {
      id: 25,
      xungdanh: 'Bạn',
      Name: 'Thu Hà & NT'
    },
    {
      id: 26,
      xungdanh: 'Bạn',
      Name: 'Thu Hà & NT'
    },
    {
      id: 27,
      xungdanh: 'Bạn',
      Name: 'Tiến & NT'
    },
    {
      id: 28,
      xungdanh: 'Bạn',
      Name: 'Hào & NT'
    },
    {
      id: 29,
      xungdanh: 'Bạn',
      Name: 'Võ & NT'
    },
    {
      id: 30,
      xungdanh: '',
      Name: 'Gia đình bạn Ngọc Anh'
    },
    {
      id: 31,
      xungdanh: 'Bạn',
      Name: 'Thiện Đức & NT'
    },
    {
      id: 32,
      xungdanh: 'Bạn',
      Name: 'Hậu & NT'
    },
    {
      id: 33,
      xungdanh: 'Bạn',
      Name: 'Chiến & NT'
    },
    {
      id: 34,
      xungdanh: 'Bạn',
      Name: 'Trai & NT'
    },
    {
      id: 35,
      xungdanh: 'Bạn',
      Name: 'Trang & NT'
    },
    {
      id: 36,
      xungdanh: 'Bạn:',
      Name: 'Ba & NT'
    },
    {
      id: 37,
      xungdanh: 'Bạn',
      Name: 'Dũng & NT'
    },
    {
      id: 38,
      xungdanh: 'Bạn:',
      Name: 'Kiên & NT'
    },
    {
      id: 39,
      xungdanh: 'Bạn',
      Name: 'Hải & NT'
    },
    {
      id: 40,
      xungdanh: 'Bạn',
      Name: 'Bình & NT'
    },
    {
      id: 41,
      xungdanh: 'Bạn',
      Name: 'Khánh & NT'
    },
    {
      id: 42,
      xungdanh: 'Bạn',
      Name: 'Lê Na & NT'
    },
    {
      id: 43,
      xungdanh: 'Bạn',
      Name: 'Viết & NT'
    },
    {
      id: 44,
      xungdanh: '',
      Name: 'Gia đình bạn Thắm'
    },
    {
      id: 45,
      xungdanh: 'Bạn',
      Name: 'Phúc & NT'
    },
    {
      id: 46,
      xungdanh: 'Bạn',
      Name: 'Kiên & NT'
    },
    {
      id: 47,
      xungdanh: '',
      Name: 'Thầy cùng gia đình'
    },
    {
      id: 48,
      xungdanh: '',
      Name: 'Gia đình bạn Ánh'
    },
    {
      id: 49,
      xungdanh: '',
      Name: 'Gia đình anh Hải'
    },
    {
      id: 50,
      xungdanh: '',
      Name: 'Gia đình anh Vĩ'
    },
    {
      id: 51,
      xungdanh: 'Chị',
      Name: 'Giang & NT'
    },
    {
      id: 52,
      xungdanh: 'Anh',
      Name: 'Tuấn Anh & NT'
    },
    {
      id: 53,
      xungdanh: 'Chị',
      Name: 'Thu & NT'
    },
    {
      id: 54,
      xungdanh: '',
      Name: 'Chị Giang xinh đẹp'
    },
    {
      id: 55,
      xungdanh: '',
      Name: 'Chị Nga dễ thương'
    },
    {
      id: 56,
      xungdanh: 'Chị',
      Name: 'Huyền & NT'
    },
    {
      id: 57,
      xungdanh: 'Bạn',
      Name: 'Nga & NT'
    },
    {
      id: 58,
      xungdanh: 'Bạn',
      Name: 'Mai & NT'
    },
    {
      id: 59,
      xungdanh: '',
      Name: 'Gia đình bạn Ngọc'
    },
    {
      id: 60,
      xungdanh: 'Bạn',
      Name: 'Hằng & NT'
    },
    {
      id: 61,
      xungdanh: 'Em',
      Name: 'Tâm & NT'
    },
    {
      id: 62,
      xungdanh: 'Anh',
      Name: 'Yano'
    },
    // vxut
    {
      id: 63,
      xungdanh: '',
      Name: 'Gia đình cô Kim Dung'
    },
    {
      id: 64,
      xungdanh: '',
      Name: 'Gia đình chị Chi'
    },
    {
      id: 65,
      xungdanh: '',
      Name: 'Gia đình chị Phương'
    },
    {
      id: 66,
      xungdanh: '',
      Name: 'Gia đình chị Nga'
    },
    {
      id: 67,
      xungdanh: '',
      Name: 'Gia đình cô Tú Lê'
    },
    {
      id: 68,
      xungdanh: '',
      Name: 'Gia đình Thầy Đăng Anh'
    },
    {
      id: 69,
      xungdanh: '',
      Name: 'Gia đình Thầy Huy'
    },
    {
      id: 70,
      xungdanh: '',
      Name: 'Gia đình Thầy Toàn'
    },
    // vxut friend
    {
      id: 71,
      xungdanh: 'Bạn',
      Name: 'Thành Hiếu'
    },
    {
      id: 72,
      xungdanh: '',
      Name: 'Gia đình bạn Tuấn'
    },
    {
      id: 73,
      xungdanh: '',
      Name: 'Gia đình bạn Hạnh'
    },
    {
      id: 74,
      xungdanh: 'Bạn',
      Name: 'Vỹ'
    },
    {
      id: 75,
      xungdanh: '',
      Name: 'Gia đình bạn Hoàng'
    },
    {
      id: 76,
      xungdanh: '',
      Name: 'Gia đình bạn Bích Hạnh'
    },
    {
      id: 77,
      xungdanh: '',
      Name: 'Đại gia đình DHKT1'
    },
    {
      id: 78,
      xungdanh: '',
      Name: 'Gia đình bạn Lì'
    },
    {
      id: 79,
      xungdanh: '',
      Name: 'Gia đình anh Nam'
    },
    {
      id: 101,
      xungdanh: '',
      Name: 'Gia đình anh Hòa'
    },
    // japan
    {
      id: 80,
      xungdanh: '',
      Name: 'V/C Anh Sang'
    },
    {
      id: 81,
      xungdanh: 'Bạn',
      Name: 'Tiến'
    },
    {
      id: 82,
      xungdanh: 'Em',
      Name: 'Dũng'
    },
    // Viet Nam
    {
      id: 83,
      xungdanh: 'Bạn',
      Name: 'Tiến'
    },
    {
      id: 84,
      xungdanh: '',
      Name: 'Gia đình lớp B4'
    },
    {
      id: 85,
      xungdanh: '',
      Name: 'Gia đình bạn Quân'
    },
    {
      id: 86,
      xungdanh: '',
      Name: 'Gia đình bạn Thành'
    },
    {
      id: 87,
      xungdanh: '',
      Name: 'Gia đình bạn Như Hải'
    },
    {
      id: 88,
      xungdanh: '',
      Name: 'Gia đình bạn Bình'
    },
    {
      id: 89,
      xungdanh: '',
      Name: 'Gia đình bạn Thương' // khoai tay Map
    },
    {
      id: 90,
      xungdanh: '',
      Name: 'Bạn Dung' // Dung cọc
    },
    // 23.01.21 --> Gia đình
    {
      id: 110,
      xungdanh: 'Anh',
      Name: ' Sương + NT'
    },
    {
      id: 111,
      xungdanh: '',
      Name: 'Gia đình bạn Trâm Thi'
    },
    {
      id: 112,
      xungdanh: 'Bạn',
      Name: 'Dương & NT'
    },
    {
      id: 113,
      xungdanh: 'Chị',
      Name: 'Trân & sweetheart'
    },
    {
      id: 114,
      xungdanh: 'Em',
      Name: 'Dung & NT'
    },
    // Gia đình
    {
      id: 200,
      xungdanh: 'Chị',
      Name: 'Quỳnh'
    },
    {
      id: 201,
      xungdanh: 'Em',
      Name: 'Đại'
    },
    {
      id: 202,
      xungdanh: 'Em',
      Name: 'Toàn'
    },
    {
      id: 203,
      xungdanh: 'Chị',
      Name: 'Hồng'
    },
    {
      id: 204,
      xungdanh: 'Chị',
      Name: 'Lan'
    },
    {
      id: 205,
      xungdanh: 'Anh',
      Name: 'Tiến'
    },
    {
      id: 206,
      xungdanh: 'Anh',
      Name: 'Long'
    },
    // jp
    {
      id: 20612231,
      xungdanh: '課長',
      Name: '町田'
    },
    {
      id: 1334223,
      xungdanh: '部長',
      Name: '丸山'
    },
  ];

  for(let i=0; i< danhsach.length; i++) {
    if(danhsach[i].id == path) {
      $('.xungdanh').html(danhsach[i].xungdanh)
      $('.name').html(danhsach[i].Name);

      var data = {
        Name: danhsach[i].id
      };

      if($('[data-languae="jp"]').length > 0) {
        $('.home-content__next a').attr('href', '/demo/wedding/jp/info/?id='+danhsach[i].id)

        $('.content__back a').attr('href','/demo/wedding/jp/?id='+ danhsach[i].id)

        $('.loichuc-btn a').attr('href','/demo/wedding/jp/thanks/?id='+ danhsach[i].id)

      } else {
       $('.home-content__next a').attr('href', '/demo/wedding/info/?id='+danhsach[i].id)

        $('.content__back a').attr('href','/demo/wedding/?id='+ danhsach[i].id)

        $('.loichuc-btn a').attr('href','/demo/wedding/thanks/?id='+ danhsach[i].id) 
      }
      
    }
  }

  //  QR
  var qrcode = new QRCode("qrcode");

  function makeCode () {
    var elText = pathQr;
    qrcode.makeCode(elText);
  }

  if(window.innerWidth > 768) {
    makeCode();

    $('.container').css({
      'display' : 'none'
    })

  }



  $('.thamdu-btn button').click(function() {
     $.ajax({
        url: '/demo/wedding/write.php',
        method: 'POST',
        data: { Danhsach: JSON.stringify( data ) },
        success: function(result) {alert("Sự hiện diện của bạn là niềm vinh dự của gia đình chúng tôi !"); },
        error: function(result) {alert("Error!");}
      });


    // let text = "Vui lòng xác nhận\nOK  Cancel";

    // if (confirm(text) == true) {

    // } else {
    //  //
    // }

  })


  if($('.thanks-form').length > 0) {
    $(".write-modal-submit").modaal({
      content_source: '#modal-write',

      before_open: function() {
        $('.preview').css({
          opacity: 1
        })
      },
      after_open: function() {
        $('.preview').css({
          opacity: 0
        })
      }
    });

    $('.modal-write__btn-close').click(function () {
      $(".write-modal-submit").modaal('close');
      $('.modal-write__img').attr('src', '/demo/wedding/assets/images/write.jpg');//reset
    })

    // check write

    $('.write-modal-submit').click(function () {

      if($('.thanks-form__name input').val() == '') {
        alert('Vui lòng Nhập họ tên')
        $(".write-modal-submit").modaal('close');
        return false;
      }

      if($('.thanks-form__write textarea').val() == '') {
        alert('Vui lòng Nhập lời chúc')
        $(".write-modal-submit").modaal('close');

        return false;
      }
    })

    $('.thanks-form__name input').on('keydown keyup keypress change focus blur', function () {
      let txtinputName = $(this).val().replace(/\n/g, "<br>");
      $('.modal-write__img img').attr('src' , '/demo/wedding/assets/images/write.jpg')
      $('.preview-name').html(txtinputName);

    });

    $('.thanks-form__write textarea').on('keydown keyup keypress change focus blur', function () {
      let txtinput = $(this).val().replace(/\n/g, "<br>");
      $('.modal-write__img img').attr('src' , '/demo/wedding/assets/images/write.jpg')
      $('.preview-txt').html(txtinput);
    });

    var urlCanvas;

    $('.write-modal-submit').click(function() {
      const original = document.querySelector('#canvasGet');
      $('.modal-write__img img').attr('src', '/demo/wedding/assets/images/write.jpg')

      html2canvas(original, {
          backgroundColor: null,
          scale: 2,
          useCORS: true.valueOf
        }).then(function (canvas) {
          urlCanvas = canvas.toDataURL("image/png");
          canvas.toDataURL("image/png");
          $('.modal-write__img img').attr('src' , canvas.toDataURL("image/png"))
        });
    })

    $('.gallery').modaal({
      type: 'image'
    });
  }


  $('.modal-write__btn-submit').click(function() {
    $('.loading').css({
      'display': 'flex'
    })
    $.ajax({
      type: "POST",
      url: "/demo/wedding/import.php",
      data: {image: urlCanvas}
    }).done(function( respond ) {
        console.log("Saved filename: "+respond);
        $('.loading').css({
          'display': 'none'
        })
        

        if($('[data-languae="jp"]').length > 0) {
          window.location.href = '/demo/wedding/thanks/'
        } else {
          location.reload();
        }
    }).fail(function(e) {
        console.log(e)
        alert('Hệ thống lỗi. Vui lòng gửi lại !!!')
    })
  })

  function DoSubmit(){
    return false;
  }
})


