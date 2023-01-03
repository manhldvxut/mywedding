<?php
    if (isset($_POST["image"]) && !empty($_POST["image"])) {
        // get the image data
        $data = $_POST['image'];

        $date = date('d-m-y h:i:s');
        echo $date;

        list($type, $data) = explode(';', $data);
        list(, $data) = explode(',', $data);
        $data = base64_decode($data);

        //Image name
        $filename ="upload_".date("dmYHis").'.png';

        $file = './thanks/upload/' . $filename;

        // decode the image data and save it to file
        file_put_contents($file, $data);
        echo $file;
    }
?>