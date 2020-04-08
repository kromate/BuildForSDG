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
      currentlyInfected() {
        return data.reportedCases * 10;
      },
      infectionsByRequestedTime() {
        return this.currentlyInfected * 512;
      },
      severeCasesByRequestedTime() {
        return this.infectionsByRequestedTime * 0.15;
      },

      hospitalBedsByRequestedTime() {
        return data.totalHospitalBeds - this.severeCasesByRequestedTime;
      }


    },
    severeImpact: {
      currentlyInfected() {
        return data.reportedCases * 50;
      },
      infectionsByRequestedTime() {
        return this.currentlyInfected * 512;
      },
      severeCasesByRequestedTime() {
        return this.infectionsByRequestedTime * 0.15;
      },

      hospitalBedsByRequestedTime() {
        return data.totalHospitalBeds - this.severeCasesByRequestedTime;
      }

    }
  });


export default covid19ImpactEstimator;
