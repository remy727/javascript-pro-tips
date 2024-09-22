<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Camera Access with JavaScript</title>
</head>
<body>
  <h1>📸 Camera Access with JavaScript</h1>
  <!-- Video element to display the camera feed -->
  <video id="camera-stream" width="640" height="480" autoplay></video>

  <script>
    const enableCamera = async () => {
      try {
        const video = document.getElementById('camera-stream');
        // Access the camera stream
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
      } catch (error) {
        console.error('Error accessing the camera:', error);
      }
    };

    // Initialize camera on page load
    window.onload = enableCamera;
  </script>
</body>
</html>
