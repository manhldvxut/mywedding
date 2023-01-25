<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Wedding</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/css/modaal.min.css"/>
    <link href="/demo/wedding/assets/css/style.css" rel="stylesheet">
</head>

<body data-page="thanks" data-languae="jp">
    <main>
        <div class="container">
            <div class="sub-content" data-bg="background-full">
                <div class="star-box">
                    <div class="star"></div>
                </div>
                <div class="star-box type2">
                    <div class="star"></div>
                </div>
                <div class="star-box type3">
                    <div class="star"></div>
                </div>
                <div class="star-box type4">
                    <div class="star"></div>
                </div>
                <div class="star-box type5">
                    <div class="star"></div>
                </div>
                <div class="sub-content__title">
                    <h1>記念ノート</h1>
                </div>

                <div class="thank-text">
                    結婚祝いのメッセージしてくださってありがとうございます。<br>ご健康を心よりお祈り申し上げます。
                </div>
                <div class="thanks-form">
                    <div class="thanks-form__name">
                        <div class="field">
                            <input type="text" maxlength="23" placeholder="名前入力してください。" name="">
                        </div>
                    </div>
                    <div class="thanks-form__write">
                        <div class="field">
                            <textarea placeholder="結婚祝いのメッセージしてください。" maxlength="150"></textarea>
                            <small style="display: block;">最大 150字</small>
                        </div>

                    </div>
                    
                </div>

                <div class="loichuc-btn">
                    <div class="btn">
                        <a href="" class="write-modal-submit">
                            送る
                        </a>
                    </div>
                </div>

                <div class="list-thanks">
                    <ul>
                        <?php

                            $files = glob("upload/*.png", GLOB_BRACE);

                            usort($files, function($a, $b){ // check time
                                return (int) (filemtime($a) < filemtime($b));
                            });

                            for ($i=0; $i<count($files); $i++) {
                                $num = $files[$i];
                                echo    '<li> 
                                                <a data-group="gallery" class="gallery" href='. $num. '>' .  
                                                    '<img src="'.$num.'" alt="Loi chuc">' .
                                                    '<span class="hidden" hidden>' . $num. '</span>' .  
                                                '</a> 
                                            </li>';
                            }
                        ?>
                    </ul>

                    <div class="content__back">
                        <a href="/demo/wedding/jp">
                            戻る
                        </a>
                    </div>
                </div>
                
                <div class="sub-content__footer">
                    <div class="footer">
                        <img src="/demo/wedding/assets/images/footer.svg" alt="svg file">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal">
            <div id="modal-write" style="display: none;">
                <div class="modal-write__body">
                    <div class="modal-write__img" id="canvasGet">
                        <img src="/demo/wedding/assets/images/write.jpg">
                        <div class="preview" id="outputText">
                            <span class="preview-name"></span>
                            <div class="preview-txt-body">
                                <span class="preview-txt"></span>
                            </div>
                        </div>
                    </div>

                    <div class="modal-write__btn">
                        <ul>
                            <li><button class="modal-write__btn-close">キャンセルする</button></li>
                            <li><button class="modal-write__btn-submit" type="submit">送る</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="loading">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
        <div class="qr-container">
            Vui lòng mở trên điện thoại<br>
            [スマホで開いてください。]
            <div id="qrcode"></div>
        </div>
    </main>
    

    <script src="https://code.jquery.com/jquery-3.6.1.js"></script>
    <script src="/demo/wedding/assets/js/qrcode.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Modaal/0.4.4/js/modaal.min.js"></script>

    <script src="/demo/wedding/assets/js/private.js"></script>

</body>

</html>