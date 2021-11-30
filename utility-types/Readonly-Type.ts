/**
 * Readonly<Type>
    Constructs a type with all properties of Type set to readonly, 
    meaning the properties of the constructed type cannot be reassigned.
 */

interface Modo{
    title:string;
}

const modo: Readonly<Modo> ={
    title: "Delete inactive users",
};


/**
 * Cannot assign to 'title' because it is a read-only property.
 */
//modo.title = 'Hello'

console.log(modo)

/**
 * This utility is useful for representing assignment expressions that will fail at runtime 
 * (i.e. when attempting to reassign properties of a frozen object).

        Object.freeze
        function freeze<Type>(obj: Type): Readonly<Type>;
 */