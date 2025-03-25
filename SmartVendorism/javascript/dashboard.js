// Sidebar toggle functionality
document
  .getElementById("mobileMenuToggle")
  .addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("active");
  });

// Sample chart initialization
const salesCtx = document.getElementById("salesChart").getContext("2d");
const salesChart = new Chart(salesCtx, {
  type: "bar",
  data: {
    labels: [
      "SM Baliuag",
      "Baliuag Plaza",
      "Public Market",
      "University",
      "Maharlika Hwy",
    ],
    datasets: [
      {
        label: "Revenue (in PHP)",
        data: [1250, 980, 850, 650, 520],
        backgroundColor: "#ff6b35",
        borderColor: "#e64a19",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const productsCtx = document.getElementById("productsChart").getContext("2d");
const productsChart = new Chart(productsCtx, {
  type: "doughnut",
  data: {
    labels: [
      "Iced Coffee",
      "Hot Coffee",
      "Specialty Drinks",
      "Pastries",
      "Sandwiches",
    ],
    datasets: [
      {
        label: "Sales",
        data: [35, 25, 15, 15, 10],
        backgroundColor: [
          "#ff6b35",
          "#ff8a65",
          "#4527a0",
          "#7e57c2",
          "#2e7d32",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});
