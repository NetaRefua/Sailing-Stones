function adjustRockImage(path, image, scaleFactor) {
    var wavePath = document.getElementById(path);
    var rockImage = document.getElementById(image);
  
    // Get the bounding box of the wave path
    var wavePathBoundingBox = wavePath.getBBox();
  
    // Calculate the center point of the wave path
    var wavePathCenterX = wavePathBoundingBox.x + wavePathBoundingBox.width / 2;
    var wavePathCenterY = wavePathBoundingBox.y + wavePathBoundingBox.height / 2 - 20;
  
    // Calculate the size of the rock image relative to the wave path
    var scalingFactor = scaleFactor; // Adjust this value to control the size of the rock image (e.g., increase to 1.5 for 50% larger)
    var rockImageWidth = wavePathBoundingBox.width * scalingFactor;
    var rockImageHeight = wavePathBoundingBox.height * scalingFactor;
  
    // Calculate the position of the rock image relative to the wave path center
    var rockImageX = wavePathCenterX - rockImageWidth / 2;
    var rockImageY = wavePathCenterY - rockImageHeight / 2;
  
    // Set the size and position of the rock image
    rockImage.setAttribute('width', rockImageWidth);
    rockImage.setAttribute('height', rockImageHeight);
    rockImage.setAttribute('x', rockImageX);
    rockImage.setAttribute('y', rockImageY);
  
    // Make the rock image visible
    rockImage.style.opacity = 1;
  }
  