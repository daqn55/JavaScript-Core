function solve(worker){
    if(worker.handsShaking === true){
        let alcoholLevel = (0.1 * worker.weight) * worker.experience;
        worker.bloodAlcoholLevel += alcoholLevel;
        worker.handsShaking = false;

        return worker;
    }else{
        return worker;
    }
}

let workerOne = { weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true };

console.log(solve(workerOne));
