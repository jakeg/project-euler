JG.solution(19, () => {
  /* START
    You are given the following information, but you may prefer to do some research for yourself.

    - 1 Jan 1900 was a Monday.
    - Thirty days has September, April, June and November. All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine. And on leap years, twenty-nine.
    - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

    How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
  END */

  let weekDay = 0 // we start on a monday (0 = monday, 6 = sunday)
  let count = 0 // keep count of Sundays
  for (let year = 1900; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
      let day = 1 // 1st of the month
      while (true) {
        // they define C20th from 1 Jan 19*01* to end 2000 (not end 1999)
        if (year >= 1901 && day === 1 && weekDay === 6) count++
        weekDay = (weekDay === 6 ? 0 : weekDay + 1)
        day++
        if (day > 31) break
        if (month === 1) {
          // feb with its leap days
          if (day > 29) break
          if (day === 29) {
            // break unless a leap year
            if (!(year % 4 === 0 && !(year % 100 === 0 && !(year % 400 === 0)))) {
              break
            }
          }
        } else if ([3, 5, 8, 10].includes(month)) {
          if (day > 30) break
        }
      }
    }
  }

  return count
})
