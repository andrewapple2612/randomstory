<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Silly story generator</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <div>
      <label for="customname">Enter custom name:</label>
      <input id="customname" type="text" placeholder="">
    </div>
    <div>
      <label for="us">US</label><input id="us" type="radio" name="ukus" value="us" checked>
      <label for="uk">UK</label><input id="uk" type="radio" name="ukus" value="uk">
    </div>
    <div>
      <button class="randomize">Generate random story</button>
    </div>
    
    <p class="story"></p>



  </body>
</html>
