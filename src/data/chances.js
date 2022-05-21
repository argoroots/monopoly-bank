export const allChances = [
  // Advance to the nearest Station. If owned, pay wonder twice the rental to which they are otherwise entitled
  // Advance token to nearest Utility. If owned, throw dice and pay owner a total ten times amount thrown.

  {
    label: 'Pay $#SUM to #PLAYER',
    sum: -150
  },
  {
    label: 'Pay $#SUM to #PLAYER',
    sum: -50
  },
  {
    label: 'Collect $#TOTAL from #PLAYER',
    type: 'repairs'
  },
  {
    label: 'Collect $#SUM from #PLAYER',
    sum: 15
  },
  {
    label: 'Transfer $#SUM to each player from #PLAYER (total $#TOTAL)',
    type: 'chairman',
    sum: 50
  }
]
