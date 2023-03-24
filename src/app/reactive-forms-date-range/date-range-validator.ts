import { ValidatorFn } from "@angular/forms";
import { DateRangeValidationErrors, isDateExist } from "./date-type-model";

export const dateRangeValidator: ValidatorFn = (formGroup) => {
  const startDateControl = formGroup.get('startDate')!;
  const endDateControl = formGroup.get('endDate')!;

  let errors: DateRangeValidationErrors = {
    dateRange: {
      startDate: null,
      endDate: null,
    }
  };

  if (startDateControl.errors) {
    errors.dateRange.startDate = startDateControl.errors;
  } else if (!isDateExist(startDateControl.value)) {
    errors.dateRange.startDate = { inexistentDate: true };
  }
  console.warn("🚀 ~ file: date-range-validator.ts:20 ~ errors.dateRange.startDate:", errors.dateRange.startDate)

  if (endDateControl.errors) {
    errors.dateRange.endDate = endDateControl.errors;
  } else if (endDateControl.value) {
    if (!isDateExist(endDateControl.value)) {
      errors.dateRange.endDate = { inexistentDate: true };
    } else if (!errors.dateRange.startDate) {
      const startDateTimeStamp = new Date(startDateControl.value).getTime();
      const endDateTimeStamp = new Date(endDateControl.value).getTime();
      const dayInMilliseconds = 24 * 60 * 60 * 1000;
      const duration = 7 * dayInMilliseconds;
      if (endDateTimeStamp < startDateTimeStamp) {
        errors.dateRange.endDate = { lessThanStartDate: true };
      } else if (endDateTimeStamp - duration > startDateTimeStamp) {
        errors.dateRange.endDate = {
          greaterThanStartDate: {
            actualGreater: (endDateTimeStamp - startDateTimeStamp) / dayInMilliseconds,
            requiredGreater: 7
          }
        }
      }
    }
  }

  if (!errors.dateRange.startDate && !errors.dateRange.endDate) {
    return null;
  }
  return errors;
};

