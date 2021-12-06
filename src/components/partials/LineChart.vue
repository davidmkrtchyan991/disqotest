<script>
import { Line } from "vue-chartjs";
import axios from "axios";
import moment from "moment";

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
      gistEndpoint: 'https://api.github.com/gists/public?per_page=8&accept=application/vnd.github.v3+json',
      gistData: [],
      labels: [],
    }
  },
  methods: {
    generateLabels(isoTimeVal) {
      const newDate = new Date(isoTimeVal);
      const newTime = newDate.getTime();
      for (let i = 0; i < 8; i++){
        const changeSeconds = newTime - ( i * 5000);
        const date = new Date( +changeSeconds );
        const withUtc = moment(date).utcOffset("+00:00");
        this.labels.unshift(withUtc.format('H:mm:ss'));
      }
    },
    drawChart() {
      this.renderChart(
          {
            labels: this.labels,
            datasets: [
              {
                label: "Gists",
                data: [2, 10, 5, 9, 0, 6, 20, 22],
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
            this.generateLabels(this.gistData[0].created_at);
            this.drawChart();
          }
        });
  }
};
</script>