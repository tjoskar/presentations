import { Observable } from 'rxjs'
import { map, filter, scan, reduce } from 'rxjs/operators'

const isNotNaN = obj => !isNaN(obj)
const add = (a, b) => a + b

const source = Observable
  .interval(500)
  .take(5)
  .map(i => [ '1', '5', '2', 'Oskar', '10' ][i])

const result = source
  .map(Number)
  .filter(isNotNaN)
  .scan(add)

result.subscribe(
  next => console.log(next),
  error => console.error(error),
  () => console.log('Done')
)
