const myBigArrayOfData = [] 

myBigArrayOfData
  .filter(e => e.hasValidAirDate)
  .filter(e => isHigherEpisode(e, latesWatchedEpisode))
  .map(e => something(e))
  .find(e => someMatch(e))


















return pipe(
  filter(e => e.hasValidAirDate),
  filter(e => isHigherEpisode(e, latesWatchedEpisode)),
  map(e => something(e)),
  find(e => someMatch(e)),
)(myBigArrayOfData)
