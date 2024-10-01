function checkVariable(input_var) {
    console.log(`The variable value is '${input_var}'.`);

    let type = typeof input_var;
    if (input_var === 42) console.log("It is the meaning of life.");
    if (type === "number") type = Number.isInteger(input_var) ? "Integer" : "Float";

    console.log(`Its type is '${type.charAt(0).toUpperCase() + type.slice(1)}'.`);
}

checkVariable(42);
checkVariable("hello");
checkVariable(true);
checkVariable(42.42);
