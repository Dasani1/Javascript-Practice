//I made a promise... Laufey

async function run(){
    let find = await seeker();
    zenith(find);
}

function seeker(){
    return Promise.resolve("Coolio");
}

function zenith(result){ //I needed a way to say final and idk if final is a key word in js
    console.log(result);
}

run();
//I'm so smart 