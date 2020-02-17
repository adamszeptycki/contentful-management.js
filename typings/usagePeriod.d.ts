import { MetaSys, MetaSysProps } from './meta'

export interface UsagePeriodProps {
    startDate: string,
    endDate: string
}

export interface UsagePeriod
  extends UsagePeriodProps,
    MetaSys<MetaSysProps> {}
