import * as R from 'ramda'
import { Maybe as May } from 'ramda-fantasy'

const Maybe: Maybe = May

interface Maybe {
  (value: any): Maybe
  getOrElse(elseValue: any): any
  chain(fun: (arg: any) => Maybe): Maybe
  map(fun: (arg: any) => any): Maybe
}
type User = typeof user;

const user = {
  name: 'danny',
  email: 'daenerys.targaryen@dragonstone.com',
  meta: {
    languages: {
      primary: 'se',
      secondary: 'en'
    }
  }
};

const languageUrls = {
  en: 'https://somesite.com/en',
  se: 'https://somesite.com/se',
  no: 'https://somesite.com/no'
}

// Bad: too many if statements
function getPrimaryLanguageUrlForUser2(user) {
  if (user === null || user === undefined) {
    return languageUrls['en'];
  }
  if (user.meta && user.meta.languages && user.meta.languages.primary) {
    if (languageUrls[user.meta.languages.primary]) {
      return languageUrls[user.meta.languages.primary];
    } else {
      return languageUrls['en'];
    }
  }
  return languageUrls['en'];
}

console.log(getPrimaryLanguageUrlForUser2(user))

// Good: no logic, just config
function getPrimaryLanguageUrlForUser(user, langUrls = languageUrls) {
  return Maybe(user)
    .chain(maybePath((u: User) => u.meta.languages.primary))
    .chain(primary => Maybe(langUrls[primary]))
    .getOrElse(langUrls['en'])
}

console.log(getPrimaryLanguageUrlForUser(user))








function maybePath(fn) {
  return value => {
    try {
      return Maybe(fn(value))
    } catch {
      return Maybe(null)
    }
  }
}
