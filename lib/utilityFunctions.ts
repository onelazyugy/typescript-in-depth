//this is a module
export function CalculateLateFee( dayLate: number): number {
    return dayLate * .25;
}
    
export function MaxBooksAllowed(age: number): number {
    if(age < 12){
        return 3;
    } else {
        return 10;
    }
}

function privateFunc(): void {
    console.log('This is private...');
}
