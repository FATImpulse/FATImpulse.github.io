/**
 * Starter function that is called at startup. Creates a sceneManager object that bascially wires all the 
 * .js scripts together and allows transition between scenes.
 * @author John Li
 */

function setup() {
    var mg = new SceneManager();
    mg.wire();
    mg.showScene(Login);
}

/**
 * Resized the window to fix screen
 */
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }