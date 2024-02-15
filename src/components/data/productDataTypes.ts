export type DataTypes = {
  id: number;
  fundName: string;
  primaryTicker: string;
  incomeTreatment: string;
  currency: string;
  isin: string;
  strategy: string;
  assetClass: string;
  region: string;
  style: string;
}

export type StrategyFilterDataTypes = {
  label: string;
  ungrouped?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}[]

export type StyleFilterDataTypes = {
  label: string;
  ungrouped?: boolean;
  options: {
    label: string;
    value: string;
  }[];
}[]

export type AssetClassFilterDataTypes = {
  label: string;
  ungrouped?: boolean;
  value: string;
  options: {
    label: string;
    value: string;
  }[];
}[]

export type MarketAndRegionFilterDataTypes = {
  label: string;
  ungrouped?: boolean;
  options: ({
    label: string;
    value: string;
    options?: undefined;
  } | {
    label: string;
    value: string;
    options: {
      label: string;
      value: string;
    }[];
  })[];
}[]

export type Option = {
  label: string;
  value: string;
  options?: Option[];
}

export type User = {
  name: string;
  image: string;
}