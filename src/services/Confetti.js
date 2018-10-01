export function ConfettiGenerator(params) {
  // Defaults
  var appstate = { target: "confetti-holder", max: 80, size: 1, animate: true, props: ["circle", "square", "triangle", "line"], colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]], clock: 25, interval: null, width: window.innerWidth, height: window.innerHeight }; // Id of the canvas // Max itens to render // prop size // Should aniamte? // Types of confetti // Colors to render confetti // Speed of confetti fall // Draw interval holder // canvas width (as int, in px) // canvas height (as int, in px)
  
  // Setting parameters if received
  if (params) {
    if (params.target) appstate.target = params.target;
    if (params.max) appstate.max = params.max;
    if (params.size) appstate.size = params.size;
    if (params.animate !== undefined && params.animate !== null) appstate.animate = params.animate;
    if (params.props) appstate.props = params.props;
    if (params.colors) appstate.colors = params.colors;
    if (params.clock) appstate.clock = params.clock;
    if (params.width) appstate.width = params.width;
    if (params.height) appstate.height = params.height;
  }

  // Properties
  var cv = document.getElementById(appstate.target);
  // save old getContext
  var oldgetContext = HTMLCanvasElement.prototype.getContext ;

  function setToFalse(obj, prop) {
    if (obj[prop] !== undefined) obj[prop] = false;
  }

  // get a context, set it to smoothed if it was a 2d context, and return it.
  function getSmoothContext(contextType) {
    var resCtx = oldgetContext.apply(this, arguments);
    if (contextType == '2d') {
    setToFalse(resCtx, 'imageSmoothingEnabled');
    setToFalse(resCtx, 'mozImageSmoothingEnabled');
    setToFalse(resCtx, 'oImageSmoothingEnabled');
    setToFalse(resCtx, 'webkitImageSmoothingEnabled');  
    }
    return resCtx ;  
  }

  // inject new smoothed getContext
  HTMLCanvasElement.prototype.getContext = getSmoothContext ;

  var ctx = cv.getContext("2d");
  var particles = [];

  // Random helper (to minimize typing)
  function rand(limit, floor) {
    if (!limit) limit = 1;
    var rand = Math.random() * limit;
    return !floor ? rand : Math.floor(rand);
  }

  // Confetti particle generator
  function particleFactory() {
    var p = { prop: appstate.props[rand(appstate.props.length, true)], x: rand(appstate.width), y: rand(appstate.height), radius: rand(4) + 1, line: Math.floor(rand(65) - 30), angles: [rand(10, true) + 2, rand(10, true) + 2, rand(10, true) + 2, rand(10, true) + 2], color: appstate.colors[rand(appstate.colors.length, true)], rotation: (rand(360, true) * Math.PI) / 180, speed: rand(appstate.clock / 7) + appstate.clock / 30 }; //prop type //x-coordinate //y-coordinate //radius // line angle // triangle drawing angles // color

    return p;
  }

  // Confetti drawing on canvas
  function particleDraw(p) {
    var op = p.radius <= 3 ? 1 : 1;

    ctx.fillStyle = ctx.strokeStyle = "rgba(" + p.color + ", " + op + ")";
    ctx.beginPath();

    switch (p.prop) {
      case "circle": {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.radius * appstate.size, 0, Math.PI * 2, true);
        ctx.fill();
        break;
      }
      case "triangle": {
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.angles[0] * appstate.size, p.y + p.angles[1] * appstate.size);
        ctx.lineTo(p.x + p.angles[2] * appstate.size, p.y + p.angles[3] * appstate.size);
        ctx.closePath();
        ctx.fill();
        break;
      }
      case "line": {
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.line * appstate.size, p.y + p.radius * 5);
        ctx.lineWidth = 2 * appstate.size;
        ctx.stroke();
        break;
      }
      case "square": {
        ctx.save();
        ctx.translate(p.x + 15, p.y + 5);
        ctx.rotate(p.rotation);
        ctx.fillRect(-15 * appstate.size, -5 * appstate.size, 15 * appstate.size, 5 * appstate.size);
        ctx.restore();
        break;
      }
    }
  }

  //////////////
  // Public itens
  //////////////

  // Clean actual state
  var _clear = function() {
    appstate.animate = false;
    clearInterval(appstate.interval);

    requestAnimationFrame(function() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      var w = cv.width;
      cv.width = 1;
      cv.width = w;
    });
  };

  // Render confetti on canvas
  var _render = function() {
    //canvas dimensions
    cv.width = appstate.width;
    cv.height = appstate.height;
    particles = [];

    for (var i = 0; i < appstate.max; i++) particles.push(particleFactory());

    function draw() {
      ctx.clearRect(0, 0, appstate.width, appstate.height);

      for (var i in particles) particleDraw(particles[i]);

      update();

      //animation loop
      if (appstate.animate) requestAnimationFrame(draw);
    }

    function update() {
      for (var i = 0; i < appstate.max; i++) {
        var p = particles[i];
        if (appstate.animate) p.y += p.speed;

        if (p.y > appstate.height) {
          particles[i] = p;
          particles[i].x = rand(appstate.width, true);
          particles[i].y = -10;
        }
      }
    }

    return draw();
  };

  return { render: _render, clear: _clear };
};
