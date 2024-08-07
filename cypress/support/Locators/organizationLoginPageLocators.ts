export const Path = "/dashboard/login";
export const LoginButton = "button[type=submit]";
export const CaptchaInputName = "captcha_1";
export const CaptchaInput = "#id_captcha_1";
export const UserNameInputName = "username";
export const PasswordInputName = "password";
export const UserNameInput = `input[name="${UserNameInputName}"]`;
export const PasswordInput = `input[name="${PasswordInputName}"]`;

export const GetInputSelector = (field: string): string => {
  switch (field) {
    case "captcha":
      return `input[name="${CaptchaInputName}"]`;
    default:
      return `input[name="${field}"]`;
  }
};
