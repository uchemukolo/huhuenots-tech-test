import { MarketAndRegionFilterDataTypes, DataTypes, StyleFilterDataTypes, StrategyFilterDataTypes, AssetClassFilterDataTypes } from "./productDataTypes";

export const data: DataTypes[] = [
  { id: 1, fundName: 'NASDAQ Cybersecurity UCITS ETF', primaryTicker: 'CBRS', incomeTreatment: 'Acc', currency: 'EUR', isin: 'IE00BF16M727', strategy: 'Thematic', assetClass: 'All Cap', region: 'Global', style: 'Active' },
  { id: 2, fundName: 'Cloud Computing UCITS ETF', primaryTicker: 'SKYE', incomeTreatment: 'Acc', currency: 'GBP', isin: 'IE00BFD2H405', strategy: 'ESG', assetClass: 'Currency', region: 'Global', style: 'Active' },
  { id: 3, fundName: 'Nasdaq® Clean Edge® Green Energy UCITS ETF', primaryTicker: 'QCLN', incomeTreatment: 'Acc', currency: 'EUR', isin: 'IE00BDBRT036', strategy: 'Thematic', assetClass: 'Currency', region: 'Global', style: 'Active' },
  { id: 4, fundName: 'Indxx Innovative Transaction & Process UCITS ETF', primaryTicker: 'BLOK', incomeTreatment: 'Acc', currency: 'EUR', isin: 'IE00BF5DXP42', strategy: 'Thematic', assetClass: 'All Cap', region: 'Global', style: 'Active' },
  { id: 5, fundName: 'Dow Jones Internet UCITS ETF', primaryTicker: 'FDNE', incomeTreatment: 'Acc', currency: 'EUR', isin: 'IE00BG0SSC32', strategy: 'Thematic', assetClass: 'Currency', region: 'Global', style: 'Active' },
  { id: 6, fundName: 'Dow Jones International Internet UCITS ETF', primaryTicker: 'FDNI', incomeTreatment: 'Acc', currency: 'EUR', isin: 'IE00BT9PVG14', strategy: 'Currency Hedge', assetClass: 'Small Cap', region: 'United States', style: 'Active' },
  { id: 7, fundName: 'NYSE Arca Biotechnology UCITS ETF', primaryTicker: 'FBT', incomeTreatment: 'Acc', currency: 'USD', isin: 'IE00BL0L0H60', strategy: 'Factors', assetClass: 'Equity', region: 'Developed', style: 'Active' },
  { id: 8, fundName: 'IPOX® Europe Equity Opportunities UCITS ETF', primaryTicker: 'EFPX', incomeTreatment: 'Acc', currency: 'EUR', isin: 'IE00BFD26097', strategy: 'Thematic', assetClass: 'All Cap', region: 'Europe', style: 'Active' },
  { id: 9, fundName: 'US Equity Opportunities UCITS ETF', primaryTicker: 'FPXU', incomeTreatment: 'Acc', currency: 'USD', isin: 'IE00BYTH6238', strategy: 'ESG', assetClass: 'Government', region: 'United States', style: 'Active' },
  { id: 10, fundName: 'FactorFX UCITS ETF', primaryTicker: 'FXEU', incomeTreatment: 'Acc', currency: 'EUR (H)', isin: 'IE00BD5HBS12', strategy: 'ESG', assetClass: 'Large Cap', region: 'Global', style: 'Index' },
  { id: 11, fundName: 'FactorFX UCITS ETF', primaryTicker: 'FTFX', incomeTreatment: 'Acc', currency: 'USD', isin: 'IE00BD5HBQ97', strategy: 'Capital Strength', assetClass: 'Government', region: 'Global', style: 'Index' },
  { id: 12, fundName: 'FactorFX UCITS ETF', primaryTicker: 'FXGB', incomeTreatment: 'Acc', currency: 'GBP (H)', isin: 'IE00BD5HBR05', strategy: 'Factors', assetClass: 'Large Cap', region: 'Global', style: 'Index' },
  { id: 13, fundName: 'Low Duration Global Government Bond UCITS ETF', primaryTicker: 'FSOV', incomeTreatment: 'Dist', currency: 'EUR', isin: 'IE00BKS2X317', strategy: 'Equity Income', assetClass: 'Small Cap', region: 'Global', style: 'Index' },
]

export const marketAndRegionFilterData: MarketAndRegionFilterDataTypes = [
  {
    label: "Market",
    ungrouped: false,
    options: [
      {
        label: "Developed",
        value: "Developed",
      },
      {
        label: "Emereging",
        value: "Emereging",
      },
    ],
  },
  {
    label: "Region",
    options: [
      {
        label: "Asian Pacific",
        value: "Asian Pacific",
      },
      {
        label: "Europe",
        value: "Europe",
        options: [
          {
            label: "EuropeZone",
            value: "EuropeZone",
          },
          {
            label: "Germany",
            value: "Germany",
          },
          {
            label: "Swizerland",
            value: "Swizerland",
          },
          {
            label: "United Kingdom",
            value: "United Kingdom",
          },
        ],
      },
      {
        label: "Global",
        value: "Global",
      },
      {
        label: "North America",
        value: "North America",
        options: [
          {
            label: "United States",
            value: "United States",
          },
        ],
      },
    ],
  },
];

export const strategyFilterData: StrategyFilterDataTypes = [
  {
    label: "Strategy",
    ungrouped: true,
    options: [
      {
        label: "Thematic",
        value: "Thematic",
      },
      {
        label: "Factors",
        value: "Factors",
      },
      {
        label: "Equity Income",
        value: "Equity Income",
      },
      {
        label: "Capital Strength",
        value: "Capital Strength",
      },
      {
        label: "Currency Hedge",
        value: "Currency Hedge",
      },
      {
        label: "ESG",
        value: "ESG",
      },
    ],
  },
]

export const assetClassFilterData: AssetClassFilterDataTypes = [
  {
    label: 'Equity',
    ungrouped: false,
    value: 'Equity',
    options: [
      {
        label: "All Cap",
        value: "All Cap",
      },
      {
        label: "Large Cap",
        value: "Large Cap",
      },
      {
        label: "Small Cap",
        value: "Small Cap",
      }
    ],
  },
  {
    label: 'Fixed Income',
    value: 'Fixed Income',
    options: [
      {
        label: "Government",
        value: "Government",
      },
      {
        label: "Currency",
        value: "Currency",
      }
    ]
  },
]


export const styleFilterData: StyleFilterDataTypes = [
  {
    label: "Style",
    ungrouped: true,
    options: [
      {
        label: "Index",
        value: "Index",
      },
      {
        label: "Active",
        value: "Active",
      }
    ]
  }
]
