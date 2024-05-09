export const DOUBLE_BLANK = / {2,}/;
export const UPPERCASE_AND_SPACE_ONLY = /^[A-Z\s]+$/;

export const CARD_NUMBER = {
  Visa: 16,
  MasterCard: 16,
  Diners: 14,
  AMEX: 15,
  UnionPay: 16,
  Empty: 16,
};

export const EXPIRATION_DATE = {
  FIELD_LENGTH: 2,
  TOTAL_FIELDS: 2,
};

export const CVC_LIMIT = {
  FIELD_LENGTH: 3,
  TOTAL_FIELDS: 1,
};

export const PASSWORD = {
  FIELD_LENGTH: 2,
  TOTAL_FIELDS: 1,
};

export const USER_NAME = {
  TOTAL_FIELDS: 1,
};

export const MONTH_RANGE = {
  MIN: 1,
  MAX: 12,
};

export const YEAR_RANGE = {
  MIN: 0,
  MAX: 99,
};

export const CARD_CONFIG = {
  VISA: 4,
  MASTER: {
    START: 51,
    END: 55,
  },
};
