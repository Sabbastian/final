// Javascript for each visualizer
let fft;
let playbutton, pausebutton;
let w;
let slider_1, slider_2;
let canvas;
let data;

let viz_1 = function(a) {
  a.preload = function () {
    let url = 'https://patrickmcneill.com/itp/bess-media/audio.json';
    data = a.loadJSON(url);
  }

  a.setup = function() {
    song = a.loadSound(data[0].file, a.loaded, a.failed, a.loading);
    canvas = a.createCanvas(576, 192);
    canvas.parent('song_viz');
    a.colorMode(a.HSB);
    a.angleMode(a.DEGREES);
    slider_1 = a.createSlider(0, 1, 0.75, 0.01);
    slider_1.parent('controls_1');

    playbutton = a.createButton('Play');
    playbutton.parent('controls_1');
    playbutton.mousePressed(a.playsound);

    pausebutton = a.createButton('Pause');
    pausebutton.parent('controls_1');
    pausebutton.mousePressed(a.pausesound);

    a.fft = new p5.FFT(0.3, 4096);
    a.fft.setInput(song);
    song.stop();
    w = a.width / 300;
  }

  a.draw = function() {
    a.background(40);
    song.setVolume(slider_1.value())
    let spectrum = a.fft.analyze();
    a.noStroke();
    a.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = a.map(amp, 25, 256, a.height, 10);
      a.fill(170, i, 255);
      a.rect(i * w * 1.5, y + 7.5, w / 0.7, a.height - y);
    }
    a.endShape();
  }
  a.loaded = function() {
    let div = a.createDiv('Audio Loaded!');
    setTimeout(function() {
      div.hide();
      loadingP.style.display = "none";
      }, 3000);
  }

  a.failed = function() {
    a.createDiv('Error: Audio Failed to Load')
  }

  a.loading = function(percent) {
    pct = Math.round((percent * 100).toFixed(1) / 10) * 10 + "%";
    loadingP.style.display = "block";
    document.getElementById("loading").innerHTML += pct;
  }

  a.playsound = function() {
    if (song.isPlaying() == false) {
      song.play();
    }
  }

  a.pausesound = function() {
    if (song.isPlaying() == true) {
      song.pause();
    }
  }
};
let viz_2 = function(a) {
  a.preload = function () {
    let url = 'https://patrickmcneill.com/itp/bess-media/audio.json';
    data = a.loadJSON(url);
  }

  a.setup = function() {
    song = a.loadSound(data[1].file, a.loaded, a.failed, a.loading);
    canvas = a.createCanvas(576, 192);
    canvas.parent('song_viz');
    a.colorMode(a.HSB);
    a.angleMode(a.DEGREES);
    slider_1 = a.createSlider(0, 1, 0.75, 0.01);
    slider_1.parent('controls_1');

    playbutton = a.createButton('Play');
    playbutton.parent('controls_1');
    playbutton.mousePressed(a.playsound);

    pausebutton = a.createButton('Pause');
    pausebutton.parent('controls_1');
    pausebutton.mousePressed(a.pausesound);

    a.fft = new p5.FFT(0.3, 4096);
    a.fft.setInput(song);
    song.stop();
    w = a.width / 300;
  }

  a.draw = function() {
    a.background(40);
    song.setVolume(slider_1.value())
    let spectrum = a.fft.analyze();
    a.noStroke();
    a.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = a.map(amp, 25, 256, a.height, 10);
      a.fill(170, i, 255);
      a.rect(i * w * 1.5, y + 7.5, w / 0.7, a.height - y);
    }
    a.endShape();
  }
  a.loaded = function() {
    let div = a.createDiv('Audio Loaded!');
    setTimeout(function() {
      div.hide();
      loadingP.style.display = "none";
      }, 3000);
  }

  a.failed = function() {
    a.createDiv('Error: Audio Failed to Load')
  }

  a.loading = function(percent) {
    pct = Math.round((percent * 100).toFixed(1) / 10) * 10 + "%";
    loadingP.style.display = "block";
    document.getElementById("loading").innerHTML += pct;
  }

  a.playsound = function() {
    if (song.isPlaying() == false) {
      song.play();
    }
  }

  a.pausesound = function() {
    if (song.isPlaying() == true) {
      song.pause();
    }
  }
};
let viz_3 = function(a) {
  a.preload = function () {
    let url = 'https://patrickmcneill.com/itp/bess-media/audio.json';
    data = a.loadJSON(url);
  }

  a.setup = function() {
    song = a.loadSound(data[2].file, a.loaded, a.failed, a.loading);
    canvas = a.createCanvas(576, 192);
    canvas.parent('song_viz');
    a.colorMode(a.HSB);
    a.angleMode(a.DEGREES);
    slider_1 = a.createSlider(0, 1, 0.75, 0.01);
    slider_1.parent('controls_1');

    playbutton = a.createButton('Play');
    playbutton.parent('controls_1');
    playbutton.mousePressed(a.playsound);

    pausebutton = a.createButton('Pause');
    pausebutton.parent('controls_1');
    pausebutton.mousePressed(a.pausesound);

    a.fft = new p5.FFT(0.3, 4096);
    a.fft.setInput(song);
    song.stop();
    w = a.width / 300;
  }

  a.draw = function() {
    a.background(40);
    song.setVolume(slider_1.value())
    let spectrum = a.fft.analyze();
    a.noStroke();
    a.beginShape();
    for (let i = 0; i < spectrum.length; i++) {
      let amp = spectrum[i];
      let y = a.map(amp, 25, 256, a.height, 10);
      a.fill(170, i, 255);
      a.rect(i * w * 1.5, y + 7.5, w / 0.7, a.height - y);
    }
    a.endShape();
  }
  a.loaded = function() {
    let div = a.createDiv('Audio Loaded!');
    setTimeout(function() {
      div.hide();
      loadingP.style.display = "none";
      }, 3000);
  }

  a.failed = function() {
    a.createDiv('Error: Audio Failed to Load')
  }

  a.loading = function(percent) {
    pct = Math.round((percent * 100).toFixed(1) / 10) * 10 + "%";
    loadingP.style.display = "block";
    document.getElementById("loading").innerHTML += pct;
  }

  a.playsound = function() {
    if (song.isPlaying() == false) {
      song.play();
    }
  }

  a.pausesound = function() {
    if (song.isPlaying() == true) {
      song.pause();
    }
  }
};
