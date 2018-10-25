def get_shows():
  limit = 10
  offset = 0
  while True:
    shows = db.get_shows(limit, offset)
    offset = limit
    if not shows:
      return
    for show in shows:
      yield show