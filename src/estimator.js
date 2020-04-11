const covid19ImpactEstimator = (data) => {
  const {
    reportedCases,
    timeToElapse,
    periodType,
    totalHospitalBeds,
    region
  } = data;
  const result = {
    data,
    impact: {},
    severeImpact: {}
  };


  // calculate the number of currently infected for both impact and severe impact
  const currentlyInfected = (factor) => reportedCases * factor;
  const infectionsByRequestedTime = (time) => {
    let t = time;
    switch (periodType) {
      case 'days':
        t *= 1;
        break;
      case 'weeks':
        t *= 7;
        break;
      case 'months':
        t *= 30;
        break;
      default:
        break;
    }
    const dollarMultiplierTIme = t;
    const multiplier = 2 ** Math.floor(t / 3);
    return { multiplier, dollarMultiplierTIme };
  };
  result.impact.currentlyInfected = currentlyInfected(10);
  result.severeImpact.currentlyInfected = currentlyInfected(50);
  result.impact.infectionsByRequestedTime = (
    result.impact.currentlyInfected * infectionsByRequestedTime(timeToElapse).multiplier
  );
  result.severeImpact.infectionsByRequestedTime = Math.trunc((
    result.severeImpact.currentlyInfected * infectionsByRequestedTime(timeToElapse).multiplier));
  result.impact.severeCasesByRequestedTime = result.impact.infectionsByRequestedTime * (15 / 100);
  result.severeImpact.severeCasesByRequestedTime = (
    result.severeImpact.infectionsByRequestedTime * (15 / 100)
  );
  result.impact.hospitalBedsByRequestedTime = Math.trunc((
    ((35 / 100) * totalHospitalBeds) - result.impact.severeCasesByRequestedTime));
  result.severeImpact.hospitalBedsByRequestedTime = Math.trunc((
    ((35 / 100) * totalHospitalBeds) - result.severeImpact.severeCasesByRequestedTime));
  result.impact.casesForICUByRequestedTime = Math.trunc((
    result.impact.infectionsByRequestedTime * (5 / 100)));
  result.severeImpact.casesForICUByRequestedTime = Math.trunc((
    result.severeImpact.infectionsByRequestedTime * (5 / 100)));
  result.impact.casesForVentilatorsByRequestedTime = Math.floor(
    result.impact.infectionsByRequestedTime * (2 / 100)
  );
  result.severeImpact.casesForVentilatorsByRequestedTime = Math.floor(
    result.severeImpact.infectionsByRequestedTime * (2 / 100)
  );
  result.impact.dollarsInFlight = (
    (
      result.impact.infectionsByRequestedTime * region.avgDailyIncomePopulation)
        * region.avgDailyIncomeInUSD * infectionsByRequestedTime(timeToElapse).dollarMultiplierTIme
  );
  result.severeImpact.dollarsInFlight = (
    (
      result.severeImpact.infectionsByRequestedTime * region.avgDailyIncomePopulation)
        * region.avgDailyIncomeInUSD * infectionsByRequestedTime(timeToElapse).dollarMultiplierTIme
  );
  //   console.log(result);
  return result;
};

// const covid=covid19ImpactEstimator({
//   region: {
//     name: 'Africa',
//     avgAge: 19.7,
//     avgDailyIncomeInUSD: 4,
//     avgDailyIncomePopulation: 0.73
//   },
//   reportedCases: 2747,
//   population: 92931687,
//   totalHospitalBeds: 678874,
//   timeToElapse: 38,
//   periodType: 'days'
// });

// console.log(covid.impact.dollarsInFlight)


export default covid19ImpactEstimator;
