/**
 * Constructs a type consisting of all properties of Type set to required. 
 * The opposite of Partial.
 */

interface Props{
    a?:number;
    b?:string;
}

const obj: Props = {a: 5};

/**
 * Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
 * 
 * return new TSError(diagnosticText, diagnosticCodes);
    TSError: ⨯ Unable to compile TypeScript:
    Required-Type.ts:16:7 - error TS2741: Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
 */
const obj2: Required<Props> = {a: 5, b: "b is required otherwise it gives an error"};

console.log(obj)
console.log(obj2)