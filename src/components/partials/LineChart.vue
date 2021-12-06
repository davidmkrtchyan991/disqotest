<script>
import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Line,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      gistEndpoint: 'https://api.github.com/gists/public?per_page=5&accept=application/vnd.github.v3+json',
      gistData: [],
      labels: [],
    }
  },
  methods: {
    generateLabels() {
      this.labels = [
        '13:25:35',
        '13:25:40',
        '13:25:45',
        '13:25:50',
        '13:25:55',
      ]
    },
    drawChart() {
      this.renderChart(
          {
            labels: this.labels,
            datasets: [
              {
                label: "Gists",
                data: [2, 10, 5, 9, 0, 6, 20],
                backgroundColor: "transparent",
                borderColor: "rgba(1, 116, 188, 0.50)",
                pointBackgroundColor: "rgba(171, 71, 188, 1)"
              }
            ]
          },
          {
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              text: this.name,
            }
          }
      );
    }
  },
  created() {
    axios.get(this.gistEndpoint)
        .then((response) => {
          if (response.data) {
            this.gistData = response.data;
            this.generateLabels();
            this.drawChart();
          }
        });
  }
};
</script>