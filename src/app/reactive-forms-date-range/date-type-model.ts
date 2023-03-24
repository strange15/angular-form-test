import { ValidationErrors } from "@angular/forms";

export type DateRangeValidationErrors = {
  dateRange: {
    startDate: null | DateErrors;
    endDate: null | DateErrors;
  }
};

export type DateErrors =
  | RequiredError
  | PatternError
  | InexistentDateError
  | LessThanStartDateError
  | GreaterThanStartDateError
  | ValidationErrors;

export type RequiredError = {
  required: true;
};

export type PatternError = {
  pattern: {
    actualValue: string;
    requiredPattern: string;
  }
};

export type InexistentDateError = {
  inexistentDate: true;
};

export type LessThanStartDateError = {
  lessThanStartDate: true;
};

export type GreaterThanStartDateError = {
  greaterThanStartDate: {
    actualGreater: number;
    requiredGreater: number;
  }
};

export const isDateExist = (dateString: string) => {
  const dateObj = dateString.split('-'); // yyyy-mm-dd

  //列出12個月，每月最大日期限制
  const limitInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const theYear = parseInt(dateObj[0]);
  const theMonth = parseInt(dateObj[1]);
  const theDay = parseInt(dateObj[2]);
  const isLeap = new Date(theYear, 2, 0).getDate() === 29; // 是否為閏年?

  if (isLeap) {
    // 若為閏年，最大日期限制改為 29
    limitInMonth[1] = 29;
  }

  // 月份不可以大於 12， 並比對該日是否超過每個月份最大日期限制
  return theMonth < 12 && theDay <= limitInMonth[theMonth - 1];
}
