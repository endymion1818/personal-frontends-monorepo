export default date => {
  const dateifiedDate = new Date(date)
  return new Intl.DateTimeFormat('en-GB').format(dateifiedDate)
}
