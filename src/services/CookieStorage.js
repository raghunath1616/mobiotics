import cookie from "react-cookies";

let date = new Date();
date.setDate(date.getDate() + 365);

const cookieOptions = {
  path: "/",
  domain: COOKIE_HOST,
  expires: date
};

const CookiesStorage = {
  save: (key, value) => {
    return cookie.save(key, value, cookieOptions);
  },
  load: key => {
    if (cookie.load(key)) {
      return cookie.load(key);
    } else {
      return false;
    }
  },
  remove: key => {
    return cookie.remove(key, cookieOptions);
  }
};

export default CookiesStorage;
