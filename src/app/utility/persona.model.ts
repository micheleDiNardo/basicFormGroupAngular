interface PersonaInterface {
    name: string;
    surname: string;
    age: number;
  }

export class Persona implements PersonaInterface {
    name!: string;
    surname!: string;
    age!: number;
    
}