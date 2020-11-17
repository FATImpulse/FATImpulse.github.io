function setup() {
    var mg = new SceneManager();
    mg.wire();
    mg.showScene(Login);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }