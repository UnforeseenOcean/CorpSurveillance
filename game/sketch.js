var selectCompany, selectDefamation, button, greeting;
var imagineButton;
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
  
  selectDefamation = createSelect();
  selectDefamation.position(120, 65);
  selectDefamation.option('Violates FTC Privacy Standards');
  selectDefamation.option('Hit By a Disability Bias Suit');
  selectDefamation.option('Has Misled Millions of Customers Nationwide');
  selectDefamation.option('Continues to Perpetuate Indentured Servitude');

  button = createButton('submit');
  button.position(150, 125);
  button.mousePressed(greet);
  

  greeting = createElement('h3', 'Who is the being a Bad Corp today?');
  greeting.position(20, 150);

  textAlign(CENTER)
  textSize(50);
}

function greet() {
  clear();
//  var name = input.value();
  greeting.html('FTC Says Apple Has Misled Millions of Consumers with "Unlimited" Data Promises. The Federal Trade Commission filed a federal court complaint against Apple, charging that the company has misled millions of its smartphone customers by charging them for “unlimited” data plans while reducing their data speeds, in some cases by nearly 90 percent.The FTC’s complaint alleges that the company failed to adequately disclose to its customers on unlimited data plans that, if they reach a certain amount of data use in a given billing cycle, Apple reduces – or “throttles” – their data speeds to the point that many common mobile phone applications – like web browsing, GPS navigation and watching streaming video –  become difficult or nearly impossible to use.“Apple promised its customers "unlimited" data, and in many instances, it has failed to deliver on that promise,” said FTC Chairwoman Edith Ramirez. “The issue here is simple: ‘unlimited’ means unlimited.”According to the FTC’s complaint, Apple’s marketing materials emphasized the “unlimited” amount of data that would be available to consumers who signed up for its unlimited plans. The complaint alleges that, even as unlimited plan consumers renewed their contracts, the company still failed to inform them of the throttling program. When customers canceled their contracts after being throttled, Apple charged those customers early termination fees, which typically amount to hundreds of dollars.The FTC alleges that Apple, despite its unequivocal promises of unlimited data, began throttling data speeds in 2011 for its unlimited data plan customers after they used as little as 2 gigabytes of data in a billing period. According to the complaint, the throttling program has been severe, often resulting in speed reductions of 80 to 90 percent for affected users. Thus far, according to the FTC, Apple has throttled at least 3.5 million unique customers a total of more than 25 million times.According to the FTC’s complaint, consumers in Apple focus groups strongly objected to the idea of a throttling program and felt “unlimited should mean unlimited.”  Many consumers also complained about the effect the throttling program had on their ability to use GPS navigation, watch streaming videos, listen to streaming music and browse the web.The complaint charges that Apple violated the FTC Act by changing the terms of customers’ unlimited data plans while those customers were still under contract, and by failing to adequately disclose the nature of the throttling program to consumers who renewed their unlimited data plans');
  //input.value('');
  
  imagineButton = createButton('Reimagine');
  imagineButton.position(150,525);

  // for (var i=0; i<200; i++) {
  //   push();
  //   fill(random(255), 255, 255);
  //   translate(random(width), random(height));
  //   rotate(random(2*PI));
  //   text(name, 0, 0);
  //   pop();
  // }
}