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

//a generic function
export function Purge<T>(inventory: Array<T>): Array<T> {
    //remove last 2 items from the Array
    return inventory.splice(2, inventory.length);
}