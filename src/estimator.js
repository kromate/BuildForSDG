const covid19ImpactEstimator = (data) => (
  {
    // data: {
    //   region: {
    //     name: 'Africa',
    //     avgAge: 19.7,
    //     avgDailyIncomeInUSD: 5,
    //     avgDailyIncomePopulation: 0.71
    //   },
    //   periodType: 'days',
    //   timeToElapse: 58,
    //   reportedCases: 674,
    //   population: 66622705,
    //   totalHospitalBeds: 1380614,

    impact: {
      currentlyInfected:
        data.reportedCases * 10,
      infectionsByRequestedTime:
        data.reportedCases * 10 * 512,
      severeCasesByRequestedTime:
        (data.reportedCases * 10 * 512) * 0.15,
      hospitalBedsByRequestedTime:
        data.totalHospitalBeds - ((data.reportedCases * 10 * 512) * 0.15)

    },
    severeImpact: {
      currentlyInfected:
        data.reportedCases * 50,
      infectionsByRequestedTime:
        data.reportedCases * 50 * 512,
      severeCasesByRequestedTime:
        (data.reportedCases * 50 * 512) * 0.15,
      hospitalBedsByRequestedTime:
        data.totalHospitalBeds - ((data.reportedCases * 50 * 512) * 0.15)
    }
  });


export default covid19ImpactEstimator;
