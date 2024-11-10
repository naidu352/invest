let familyExpenses = {};

function nextStep(step) {
    // Collect data from the current step and store it in familyExpenses
    if (step === 1) {
        familyExpenses.fatherSalary = parseFloat(document.getElementById('fatherSalary').value);
    } else if (step === 2) {
        familyExpenses.fatherExpense = parseFloat(document.getElementById('fatherExpenses').value);
        familyExpenses.fatherExpense = parseFloat(document.getElementById('travelling').value);
        familyExpenses.fatherExpense = parseFloat(document.getElementById('rent').value);
    } else if (step === 3) {
        familyExpenses.motherExpense = parseFloat(document.getElementById('moTherExpenses').value);
        

    } else if (step === 4) {
        familyExpenses.child1Expense = parseFloat(document.getElementById('child1Expenses').value);
    } else if (step === 5) {
        familyExpenses.child2Expense = parseFloat(document.getElementById('child2Expenses').value);
    } else if (step === 6) {
        familyExpenses.child3Expense = parseFloat(document.getElementById('child3Expenses').value);
    }

    // Hide the current step and show the next one
    document.getElementById(`step${step}`).classList.add('hidden');
    document.getElementById(`step${step + 1}`).classList.remove('hidden');
}

// Function to display the pie chart at the last step
function Showchart() {
    // Hide the last step and show the canvas for the chart
    document.getElementById('step6').classList.add('hidden');
    document.getElementById('expenseChart').classList.remove('hidden');

    // Generate the chart using Chart.js
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const totalExpenses = [
        familyExpenses.fatherExpense,
        familyExpenses.motherExpense,
        familyExpenses.child1Expense,
        familyExpenses.child2Expense,
        familyExpenses.child3Expense
    ];

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Father', 'Mother', 'Child 1', 'Child 2', 'Child 3'],
            datasets: [{
                data: totalExpenses,
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#ffccff'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                tooltip: { enabled: true }
            }
        }
    });
}