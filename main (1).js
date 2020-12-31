Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
   });
   camera = document.getElementById("camera_taker");
   Webcam.attach(camera);

   function capture_photo()
   {
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="img_capture" src="'+data_uri+'"/>';
       
       });
   }
   console.log('ml5 version:', ml5.version);
   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);
   function modelLoaded()
   {
       console.log("modelLoaded");
   }
   function indetify_image()
   {
       img_storage = document.getElementById("img_capture");
       classifier.classify(img_storage , compare_img);
       
   }
   function compare_img(error , result)
   {     
       
       if(error)  
       {
           console.error(error);
           
       }
       else {
           console.log(result);
            document.getElementById("object_result").innerHTML = result [0].label; 
            document.getElementById("accuracy_result").innerHTML = result [8].confidence.toFixed(3); 

       }
        
       
   }