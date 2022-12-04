import AxisLabel from './AxisLabel.js'
import { valueToPoint } from './util.js'

export default {
  components: {
    AxisLabel
  },
  props: {
    stats: Array
  },
  computed: {
    // a computed property for the polygon's points
    points() {
      const total = this.stats.length
      return this.stats
        .map((stat, i) => {
          const { x, y } = valueToPoint(stat.value, i, total)
          return `${x},${y}`
        })
        .join(' ')
    }
  },
  template: `
  <svg>
    <circle cx="100" cy="100" r="80" stroke="blue" fill="white"></circle>
    <polygon :points="points" fill="green" stroke="black"></polygon>
    <axis-label
      v-for="(stat, index) in stats"
      :stat="stat"
      :index="index"
      :total="stats.length"
    >
    </axis-label>
  </svg>
  `
}
