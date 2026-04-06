
function loadTransactions() {
  const stored = localStorage.getItem("transactions");

  if (stored) {
    return JSON.parse(stored);
  } else {
    // First-time load → use default data
    localStorage.setItem("transactions", JSON.stringify(transactionsData));
    return transactionsData;
  }
}

let transactions = loadTransactions();

//Load transaction table
const tbody = document.getElementById("transaction-body");

function renderTransactions(data) 
{
    tbody.innerHTML = "";
    data.forEach((tx) => {
        const row = document.createElement("tr");

        const amountClass = tx.type === "Income" ? "amount-positive" : "amount-negative";
        const sign = tx.type === "Income" ? "+" : "-";

        row.innerHTML = `
                        <td><img height="30px" width="30px" src="${tx.img}" alt="image"></td>
                        <td><b>${tx.category}</b></td>
                        <td>${tx.date}</td>
                        <td class="${amountClass}">
                            ${sign} ₹${tx.amount.toLocaleString("en-IN")}
                        </td>
                        <td>
                            <span class="${amountClass}">
                                ${tx.type}
                            </span>
                        </td>
                        `;

        tbody.appendChild(row);
    });

    updateBalance();
}

renderTransactions(transactions);


//Add transactions
function addTransaction() 
{
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    let type = selectedType;

    if (!title || !amount) {
        alert("Please fill all fields");
        return;
    }
    if(selectedCategory.src == "./images/bank.png" )
    {
      type = "Saving"
    }
    const newTransaction = {
        img: selectedCategory.src,
        category: selectedCategory.name,
        date,
        amount: Number(amount),
        type, 
    };

    transactions.unshift(newTransaction);

    saveTransactions();

    renderTransactions(transactions);

    updateBalance();
    closeForm();
    title.value = "";
    amount.value = "";
    date.value = "";
    
}


//For adding transaction emoji grid
  const grid = document.getElementById("categoryGrid");
  //const output = document.getElementById("output");
  let title = document.getElementById("title");

  let selectedCategory = null;

  categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category";

    div.innerHTML = `
      <div class="emoji"><img class="w-100" src="${cat.src}" alt="category-image"</div>
    `;


    div.onclick = () => {
      // Remove previous selection
      document.querySelectorAll(".category").forEach(el => {
        el.classList.remove("selected");
      });

      // Set new selection
      div.classList.add("selected");
      selectedCategory = cat;

      if(cat.name == "Salary" || cat.name == "Investments" || cat.name == "Savings")
      {
        setType("Income");
      }
      else
      {
        setType("Expense");
      }
      //output.innerText = `Selected: ${cat.emoji} ${cat.name}`;
      title.textContent = cat.name;
      title.value = cat.name;
    };

    grid.appendChild(div);
  });


 
let selectedType = "Income" //By default
function setType(type) {
    selectedType = type;
    const incomeBtn = document.getElementById("incomeBtn");
    const expenseBtn = document.getElementById("expenseBtn");

    // reset
    incomeBtn.classList.remove("active", "income");
    expenseBtn.classList.remove("active", "expense");

 
    if (type == "Income" || type == "Savings") {
        incomeBtn.classList.add("active", "income");
    } else {
        expenseBtn.classList.add("active", "expense");
    }
}


function saveTransactions() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

window.onload = updateBalance();


//Switch User

function switchUser()
{
  document.getElementById("toggle-role").classList.toggle("switched");
  document.getElementById("addTransaction").classList.toggle("hidden");
  alert("Only Admin can add transactions, functionality disabled for Viewers")
}

//Switch Theme

function switchTheme()
{
   const root = document.documentElement;
   document.getElementById("toggle-theme").classList.toggle("switched");
  const currentTheme = document.documentElement.getAttribute('data-theme');

  if (currentTheme == 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
    
}


//Update balance 
function updateBalance() 
{
    let totalBalance = 0;
    let totalIncome = 0;
    let totalExpense = 0;
    let totalSavings = 0;

    transactions.forEach(tx => {
        if (tx.type === "Income") 
        {
            totalBalance += tx.amount;
            totalIncome +=tx.amount;
        } 
        else if (tx.type == "Saving")
        {
           totalSavings += tx.amount;
           totalBalance -= tx.amount;
        }
        else 
        {
            totalBalance -= tx.amount;
            totalExpense +=tx.amount;
        }
        // console.log(totalSavings)
    });

    document.getElementById("balance-card").innerText =
        "₹" + totalBalance.toLocaleString("en-IN");

        document.getElementById("income-card").innerText =
        "₹" + totalIncome.toLocaleString("en-IN");

        document.getElementById("expense-card").innerText =
        "₹" + totalExpense.toLocaleString("en-IN");

        document.getElementById("savings-card").innerText =
        "₹" + totalSavings.toLocaleString("en-IN");
}

$(document).ready(function() {
    $('#transactionTable').DataTable({
        order: [[2, "desc"]],
        paging: true,
        searching: true,
        info: false,
        pageLength: 10,
        responsive: true,
        stateSave: true
    });
});

//Open add transaction form
function openForm() {
    document.getElementById("formModal").classList.add("show");
}

function closeForm() {
    document.getElementById("formModal").classList.remove("show");
}


//Close when clicking outside
window.onclick = function(e) {
    const modal = document.getElementById("formModal");
    if (e.target === modal) {
        closeForm();
    }
};

//For balance trend
const labels = balanceTrendData.map(d => d.month);
const values = balanceTrendData.map(d => d.balance);

const balanceTrendChartDownload =  new Chart(document.getElementById("balanceTrendChart"), {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Balance Trend",
      data: values,
      fill: true,
       borderColor: '#6366F1', // bold modern blue
      backgroundColor: 'rgba(99, 102, 241, 0.2)', // subtle fill under the line
      tension: 0.4, // smooth curves
      pointRadius: 4, // small circles
      pointHoverRadius: 6, // bigger on hover
      pointBackgroundColor: '#6366F1',
      pointBorderColor: '#fff',
      borderWidth: 3,
    }]
  }
});


//For income vs expense chart
const labelsnew2 = incomeExpenseData.map(m => m.month) // ["2025-04", "2025-05", ...]
const incomeData2 = incomeExpenseData.map(m => m.income);
const expenseData2 = incomeExpenseData.map(m => m.expense);


const ctx = document.getElementById('incomeExpenseChart').getContext('2d');

const data = {
  labels: labelsnew2,
  datasets: [
    {
      label: 'Income',
      data: incomeData2,
      backgroundColor: '#5c54f2',
      borderRadius: 6,
      barPercentage: 0.5,
    },
    {
      label: 'Expense',
      data: expenseData2,
      backgroundColor: '#f19090',
      borderRadius: 6,
      barPercentage: 0.5,
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: '#181a1f', font: { size: 14, family: 'Inter, sans-serif' } } },
      tooltip: { backgroundColor: '#111827', titleColor: '#fff', bodyColor: '#fff', cornerRadius: 6 }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6b7280;', font: { size: 13 } } },
      y: { grid: { color: '#64676e', drawBorder: false }, ticks: { color: '#6b7280;', font: { size: 13 } } }
    }
  }
};

const IncomeExpenseChartDownload = new Chart(ctx, config);


//Expense Donut Chart
const ctx2 = document.getElementById('donutChart').getContext('2d');
const donutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: labelsPie,
        datasets: [{
            data: valuesPie,
            backgroundColor: [
                '#6366F1', 
                '#22D3EE', 
                '#F59E0B', 
                '#EF4444',
                '#A78BFA',  
                '#5b8def',
                '#5cc8a1',
                '#f6c85f',
                '#f08a5d',
                '#b83b5e',
                '#6a67ce',
            ],
            borderColor: 'transparent'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom',align: 'center',

              labels: 
              { color: '#6b7280',boxWidth : 20 , padding: 15} }
        }
    }
});


//Filter donut by dates
const getFilteredExpenses = (transactions, month, year) => {
  if((month < 3 && year == 2025) || (month > 3 && year == 2026))
  {
    alert("Please select Date from April 2025 to April 2026")
  }
  return transactions.filter(t => {
    const d = new Date(t.date);
    return (
      t.type === "Expense" &&
      d.getMonth() === month &&
      d.getFullYear() === year
    );
  });
};

const updateChart = () => {
  const month = parseInt(document.getElementById("monthSelect").value);
  const year = parseInt(document.getElementById("yearSelect").value);

  const filtered = getFilteredExpenses(transactions, month, year);

  const expenseData = filtered.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
    return acc;
  }, {});

  donutChart.data.labels = Object.keys(expenseData);
  donutChart.data.datasets[0].data = Object.values(expenseData);

  donutChart.update();
};

document.getElementById("monthSelect").addEventListener("change", updateChart);
document.getElementById("yearSelect").addEventListener("change", updateChart);

const now = new Date();
document.getElementById("monthSelect").value = now.getMonth();
document.getElementById("yearSelect").value = now.getFullYear();

updateChart();

function downloadChart(chartId, filename) {
    const link = document.createElement('a');
    link.href = chartId.toBase64Image();
    link.download = filename + '.png';
    link.click();
}

function exportCSV(data) {
  const headers = Object.keys(data[0]);

  const csv = [
    headers.join(","), // header row
    ...data.map(row =>
      headers.map(field => JSON.stringify(row[field] ?? "")).join(",")
    )
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.csv";
  a.click();

  URL.revokeObjectURL(url);
}

function exportJSON(data) {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "transactions.json";
  a.click();

  URL.revokeObjectURL(url);
}