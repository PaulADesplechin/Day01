function makeSandwiches(breadCount, hamCount, tunaCount, tomatoCount, saladCount) {
    
    let hamSandwiches = Math.floor(breadCount / 2); 
    if (hamSandwiches > hamCount) {
        hamSandwiches = hamCount; 
    }

    let tunaSandwiches = Math.floor(breadCount / 2); 
    if (tunaSandwiches > tunaCount) {
        tunaSandwiches = tunaCount; 
    }
    if (tunaSandwiches > Math.floor(saladCount / 2)) {
        tunaSandwiches = Math.floor(saladCount / 2); 
    }

    let vegetarianSandwiches = Math.floor(breadCount / 2); 
    if (vegetarianSandwiches > Math.floor(tomatoCount / 2)) {
        vegetarianSandwiches = Math.floor(tomatoCount / 2); 
    }
    if (vegetarianSandwiches > saladCount) {
        vegetarianSandwiches = saladCount; 
    }

    
    console.log("Ham sandwiches: " + hamSandwiches);
    console.log("Tuna sandwiches: " + tunaSandwiches);
    console.log("Vegetarian sandwiches: " + vegetarianSandwiches);

    
    breadCount -= (hamSandwiches + tunaSandwiches + vegetarianSandwiches) * 2;
    hamCount -= hamSandwiches;
    tunaCount -= tunaSandwiches;
    tomatoCount -= vegetarianSandwiches * 2;
    saladCount -= (tunaSandwiches + vegetarianSandwiches);

    console.log("Remaining ingredients: Bread: " + breadCount + ", Ham: " + hamCount + ", Tuna: " + tunaCount + ", Tomato: " + tomatoCount + ", Salad: " + saladCount);
}


makeSandwiches(10, 3, 2, 4, 5);

