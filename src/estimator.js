
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
      data.reportedCases * 10 * 2,
      infectionsByRequestedTime:
      data.reportedCases * 10 * 2 * 524288,
      severeCasesByRequestedTime:
       (data.reportedCases * 10 * 2 * 524288) * 0.15,
      hospitalBedsByRequestedTime:
      data.totalHospitalBeds - ((data.reportedCases * 10 * 2 * 524288) * 0.15),
      casesForICUByRequestedTime:
      (data.reportedCases * 10 * 2 * 524288) * 0.05,
      casesForVentilatorsByRequestedTime:
      (data.reportedCases * 10 * 2 * 524288) * 0.02,
      dollarsInFlight:
       (data.reportedCases * 10 * 2 * 524288) * 30 * 1.5 * 0.65
    },
    severeImpact: {
      currentlyInfected:
      data.reportedCases * 50 * 2,
      infectionsByRequestedTime:
       data.reportedCases * 50 * 2 * 524288,
      severeCasesByRequestedTime:
      (data.reportedCases * 50 * 2 * 524288) * 0.15,
      hospitalBedsByRequestedTime:
       data.totalHospitalBeds - ((data.reportedCases * 50 * 2 * 524288) * 0.15),
      casesForICUByRequestedTime:
      (data.reportedCases * 50 * 2 * 524288) * 0.05,
      casesForVentilatorsByRequestedTime:
       (data.reportedCases * 50 * 2 * 524288) * 0.02,
      dollarsInFlight:
      (data.reportedCases * 50 * 2 * 524288) * 30 * 1.5 * 0.65
    }
  });


export default covid19ImpactEstimator;
