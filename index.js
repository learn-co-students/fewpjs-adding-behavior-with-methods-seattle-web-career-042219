class Cat {
    constructor(name, sex){
    this.name = name;
    this.sex = sex;
    }

    speak(){
        let name = this.name 
        return `${name} says meow!`
    }

  }
   
  class Dog {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
        }
        speak(){
            let name = this.name 
            return `${name} says woof!`
        }
      }

    class Bird {
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
        }

            speak(){
                
            let name = this.name 
                if(this.sex==='male'){
            return `It's me! ${name}, the parrot!`
            }else{
                return `${name} says squawk!`
            }
            }
       
        }
