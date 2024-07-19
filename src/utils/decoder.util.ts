const decodePrediction = (className: string, probability: number) => {

    // Evaluate the className and take the first one
    const classes: string[] = className.split(',');
    let classValue: string = '';

    if (classes[0] && classes[0] != '') {
        classValue = classes[0];
    }

    // Evaluate the probability
    const umbral = 0;
    const probNumber = parseFloat((probability * 100).toFixed(2));

    const decoded = {
        "pred": (probNumber > umbral) ? classValue : 'undefined',
        "prob": probNumber
    }

    return decoded;
};


export default decodePrediction;