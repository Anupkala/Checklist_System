//  *****      New rules can be directly added here no need to change anything else     ******  //

export const rules = [
  {
    name: 'Valuation Fee Paid',
    condition: (data) => data.isValuationFeePaid === true,
  },
  {
    name: 'UK Resident',
    condition: (data) => data.isUkResident === true,
  },
  {
    name: 'Risk Rating Medium',
    condition: (data) => data.riskRating === 'Medium',
  },
  {
    name: 'LTV Below 60%',
    condition: (data) => {
      const ltv = (data.loanRequired / data.purchasePrice) * 100;
      return ltv < 60;
    },
  },
];

export const evaluate = (data) => {
  return rules.map((rule) => ({
    rule: rule.name,
    status: rule.condition(data) ? 'Passed' : 'Failed',
  }));
};
