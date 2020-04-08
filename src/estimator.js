const covid19ImpactEstimator = (data) => {
    data = {
        region = {
            name: "Africa",
            avgAge: 19.7,
            avgDailyIncomeInUSD: 5,
            avgDailyIncmePopulation: 0.71,
        },
        periodType: "days",
        timeToElapse: 58,
        reportedCases: 674,
        population: 66622705,
        totalHopitalBeds: 1380614,
    };
    var curInfect = data.reportedCases;
    impact: {
        currentlyInfected: curInfect * 10;
        infectionsByRequestedTime: (curInfect * 10) * 512;
    };
    severeImpact: {
        currentlyInfected: curInfect * 50
        infectionsByRequestedTime: (curInfect * 50) * 512;
    };

}
export default covid19ImpactEstimator;