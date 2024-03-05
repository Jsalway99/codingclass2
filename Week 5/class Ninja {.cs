class Ninja {
  constructor(name, breed, weight, eyeColor, hairColor ) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.eyeColor = eyeColor;
    this.hairColor = hairColor;
  }

  eat()
  {
    text(this.name + "is eating...", 100, 100);
  }

  sleep()
  {
    text(this.name + "", 200, 200);
  }
}