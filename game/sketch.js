var selectCompany, inputDefamation, button, greeting;

var largeText;

function setup() {

  // create canvas
  createCanvas(710, 400);

  selectCompany = createSelect();
  selectCompany.position(20, 65);
  selectCompany.option('Apple');
  selectCompany.option('Microsoft');
  selectCompany.option('AT&T');
  selectCompany.option('Verizon');
  selectCompany.option('Oracle');
  selectCompany.option('A');
  selectCompany.option('AT&T');
  
  inputDefamation = createInput();
  inputDefamation.position(120, 95);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(greet);
  
  largeText="The Federal Trade Commission filed a federal court complaint against Apple charging that the company has misled millions of its smartphone customers by charging them for unlimited data plans while reducing their data speeds, in some cases by nearly 90 percent.The FTC’s complaint alleges that the company failed to adequately disclose to its customers on unlimited data plans that, if they reach a certain amount of data use in a given billing cycle, Apple reduces – or throttles – their data speeds to the point that many common mobile phone applications – like web browsing, GPS navigation and watching streaming video –  become difficult or nearly impossible to use.Apple promised its customers ‘unlimited’ data, and in many instances, it has failed to deliver on that promise, said FTC Chairwoman Edith Ramirez. The issue here is simple: ‘unlimited’ means unlimited"

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  // for (var i=0; i<200; i++) {
  //   push();
  //   fill(random(255), 255, 255);
  //   translate(random(width), random(height));
  //   rotate(random(2*PI));
  //   text(name, 0, 0);
  //   pop();
  // }
}