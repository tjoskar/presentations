import { Observable } from 'rxjs';
import { map, debounceTime, filter, switchMap } from 'rxjs/operators';

const searchInput = document.querySelector('input');
const list = document.querySelector('ul');

function getInputValueFromEvent(event) {
  return event.target.value
}

function isStringLongerThan(n: number) {
  return (str: string) => str.length > n
}

const inputEvent$ = Observable.fromEvent(searchInput, 'input')
const inputString$ = inputEvent$ => inputEvent$.map(getInputValueFromEvent)

const searchResult$ = inputEvent$ => inputEvent$.pipe(
    debounceTime(500),
    inputString$,
    filter(isStringLongerThan(3)),
    switchMap(fetchShow)
  )

searchResult$(inputEvent$).subscribe(putShowsInElement(list))






















// Help functions, do not touch :)
function putShowsInElement(element) {
  return shows => {
    list.innerHTML = shows.reduce((html, show) => html + showHTMLListItem(show.name), '');
  }
}

function showHTMLListItem(showName) {
    return `<li>${showName}</li>`;
}

async function fetchShow(name) {
    const response = await fetch('http://api.tvmaze.com/search/shows?q=' + decodeURI(name));
    const shows = await response.json();
    return shows.map(show => {
        return {
            name: show.show.name,
            image: show.show.image ? show.show.image.medium : ''
        };
    });
}

function fetchShowObservable(name) {
    return Observable.defer(() => fetchShow(name));
}