export default class DieWrapper {
  die: Die;

  constructor() {
    let value : number = Math.floor(Math.random() * 6);
    this.die = this.dieForValue(value)
  }

  value() {
      return this.die.value();
  }

  roll() {
    let value : number = Math.floor(Math.random() * 6);
    this.die = this.dieForValue(value)
  }

  private dieForValue(value: number): Die {
    switch (value) {
      case 1:
        return new OneDie();
      case 2:
        return new TwoDie();
      case 3:
        return new ThreeDie();
      case 4:
        return new FourDie();
      case 5:
        return new FiveDie();
      case 6:
        return new SixDie();
      default:
        return new OneDie();
    }
  }
}

abstract class Die {
    abstract value(): number;
    
}

class OneDie extends Die {
    value() {
        return 1;
    }
}
class TwoDie extends Die {
    value() {
        return 2;
    }
}
class ThreeDie extends Die {
    value() {
        return 3;
    }
}
class FourDie extends Die {
    value() {
        return 4;
    }
}
class FiveDie extends Die {
    value() {
        return 5;
    }
}
class SixDie extends Die {
    value() {
        return 6;
    }
}