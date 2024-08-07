export const Path = "/dashboard/login/v2/";
export const LoginButton = "#Y";
export const CaptchaInput = "#id_captcha_1";
export const NationalCodeInput = "#id_national_code";
export const BirthdayInput = "#id_birthday";
export const ShenasnamehCodeInput = "#id_shenasnameh_code";
export const MobileInput = "#id_mobile";

export const GetFildSelector = (field: string): string => {
  switch (field) {
    case "national code":
      return NationalCodeInput;
    case "birthday":
      return BirthdayInput;
    case "shenasnameh code":
      return ShenasnamehCodeInput;
    case "mobile":
      return MobileInput;
    case "captcha":
      return CaptchaInput;
    default:
      throw new Error("داده ورودی معتبر نمیباشد");
  }
};
