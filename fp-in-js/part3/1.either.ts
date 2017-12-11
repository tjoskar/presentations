import { Either, Maybe } from 'monet'

const { Left, Right } = Either

type User = typeof userInput

const userInput = {
  username: 'Username',
  email: 'something',
  password: ''
}

function validate(user: User) {
  if (user.username && user.username.length > 2) {
    if (user.email && user.email.includes('@')) {
      if (user.password && user.password !== 'password') {
        return null
      } else {
        return 'Enter a secure password'
      }
    } else {
      return 'Enter a valid email'
    }
  } else {
    return 'Enter a valid username'
  }
}

console.log(validate(userInput))





function isUsernameValid(user: User) {
  if (user.username && user.username.length > 2) {
    return Right(user)
  }
  return Left('Username must be longer than 2 char')
}

function isEmailValid(user: User) {
  if (user.email && user.email.includes('@')) {
    return Right(user)
  }
  return Left('Enter a valid emial address')
}

function isPasswordValid(user: User) {
  if (user.password && user.password !== 'password') {
    return Right(user)
  }
  return Left('Enter a secure password')
}

const returnSuccess = () => 'success'
const returnErrorMessage = error => error

const validate2 = Right(userInput)
  .chain(isUsernameValid)
  .chain(isEmailValid)
  .chain(isPasswordValid)
  .cata(returnErrorMessage, returnSuccess)

console.log(validate2)


function parseJSON(json): Either<Error, any> {
  try {
    return Right(JSON.parse(json));
  } catch (e) {
    return Left(e);
  }
}

const someJson = `{ "name": { "first": "Oskar" } }`

const nameOrError = parseJSON(someJson)
  .flatMap(data => data.name ? Right(data.name) : Left(new Error('No name')))
  .flatMap(name => name.first ? Right(name.first) : Left(new Error('No first name')))
  .map(firstName => firstName.toUpperCase())
  .cata(
    error => error,
    name => name
  )

nameOrError