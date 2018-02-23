<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link src="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-social/5.1.1/bootstrap-social.min.css">
</head>
<body>
    <div id="app"></div>
    
    <script src="https://www.gstatic.com/firebasejs/4.10.1/firebase.js"></script>
    <script>
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCql-222c3C7nsEmSb66vxbDVDfGmDvrP0",
        authDomain: "fir-test-6c339.firebaseapp.com",
        databaseURL: "https://fir-test-6c339.firebaseio.com",
        projectId: "fir-test-6c339",
        storageBucket: "fir-test-6c339.appspot.com",
        messagingSenderId: "662322346391"
    };
    firebase.initializeApp(config);
    </script>
    <script src="./settings.js"></script>
    <script src="./bundle.js"></script>
</body>
</html>