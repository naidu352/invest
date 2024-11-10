 // Function to draw a pie chart with labels and values
 function drawPieChart(ctx, data, centerX, centerY, radius, expensesElement, totalElement) {
    let total = data.reduce((sum, item) => sum + item.value, 0);
    let startAngle = 0;

    data.forEach((item) => {
        let sliceAngle = (item.value / total) * 2 * Math.PI;

        // Draw pie slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
        ctx.fillStyle = item.color;
        ctx.fill();
        ctx.stroke();

        // Calculate the midpoint angle of the slice for labeling
        let midAngle = startAngle + sliceAngle / 2;
        let textX = centerX + (radius * 1.2) * Math.cos(midAngle); // Space out more to avoid overlap
        let textY = centerY + (radius * 1.2) * Math.sin(midAngle);

        // Draw label text with value
        let percentage = ((item.value / total) * 100).toFixed(1) + "%";
        ctx.fillStyle = "#000"; // Text color
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`${item.label}: ${percentage}`, textX, textY);

        // Add expense details to the list below the chart
        let expenseItem = document.createElement("li");
        expenseItem.textContent = `${item.label}: ₹${item.value}`;
        expensesElement.appendChild(expenseItem);

        startAngle += sliceAngle;
    });

    // Display total expenses
    totalElement.textContent = `Total: ₹${total}`;
}

// Expense data for each family
const richFamilyData = [
    { label: 'Housing', value: 40000, color: '#f6d365' },
    { label: 'Food', value: 20000, color: '#fda085' },
    { label: 'Transportation', value: 15000, color: '#ff6361' },
    { label: 'Entertainment', value: 10000, color: '#bc5090' },
    { label: 'Education', value: 10000, color: '#58508d' },
    { label: 'Miscellaneous', value: 5000, color: '#003f5c' }
];

const middleClassFamilyData = [
    { label: 'Housing', value: 25000, color: '#f6d365' },
    { label: 'Food', value: 15000, color: '#fda085' },
    { label: 'Transportation', value: 12000, color: '#ff6361' },
    { label: 'Entertainment', value: 5000, color: '#bc5090' },
    { label: 'Education', value: 8000, color: '#58508d' },
    { label: 'Miscellaneous', value: 3000, color: '#003f5c' }
];

const poorFamilyData = [
    { label: 'Housing', value: 15000, color: '#f6d365' },
    { label: 'Food', value: 12000, color: '#fda085' },
    { label: 'Transportation', value: 8000, color: '#ff6361' },
    { label: 'Entertainment', value: 2000, color: '#bc5090' },
    { label: 'Education', value: 3000, color: '#58508d' },
    { label: 'Miscellaneous', value: 2000, color: '#003f5c' }
];

// Draw pie charts and display expenses for each family
const richFamilyCtx = document.getElementById('richFamilyChart').getContext('2d');
const middleClassFamilyCtx = document.getElementById('middleClassFamilyChart').getContext('2d');
const poorFamilyCtx = document.getElementById('poorFamilyChart').getContext('2d');

const richFamilyExpenses = document.getElementById('richFamilyExpenses');
const middleClassFamilyExpenses = document.getElementById('middleClassFamilyExpenses');
const poorFamilyExpenses = document.getElementById('poorFamilyExpenses');

const richFamilyTotal = document.getElementById('richFamilyTotal');
const middleClassFamilyTotal = document.getElementById('middleClassFamilyTotal');
const poorFamilyTotal = document.getElementById('poorFamilyTotal');

drawPieChart(richFamilyCtx, richFamilyData, 150, 150, 100, richFamilyExpenses, richFamilyTotal);
drawPieChart(middleClassFamilyCtx, middleClassFamilyData, 150, 150, 100, middleClassFamilyExpenses, middleClassFamilyTotal);
drawPieChart(poorFamilyCtx, poorFamilyData, 150, 150, 100, poorFamilyExpenses, poorFamilyTotal);
