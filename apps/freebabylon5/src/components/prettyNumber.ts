export default number => new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(number)
