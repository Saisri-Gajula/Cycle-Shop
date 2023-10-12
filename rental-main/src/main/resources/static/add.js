// app.js

$(document).ready(function () {
        $.ajax({
            url: '/api/cycles',
            method: 'GET',
            success: function (data) {
                console.log(data);
                displayCycles(data);
                
            }
        });
    });

    function getBorrowedCyclesList() {
        $.ajax({
            url: '/api/cycles/borrowed',
            method: 'GET',
            success: function (data) {
                displayBorrowedCycles(data);
            }
        });
    }

    function displayCycles(data) {
        var cycleTable = $('#cycle-table tbody');
        cycleTable.empty();
        data.forEach(function(cycle){
            cycleTable.append(
                '<tr>' +
                '<td>' + cycle.cycleId + '</td>' +
                '<td>' + cycle.cycleName + '</td>' +
                '<td>' + cycle.stock + '</td>' +
                '</tr>'
            );
        });
    }

    function displayBorrowedCycles(borrowedCycles) {
        var borrowedCycleTable = $('#borrowed-cycle-table tbody');
        borrowedCycleTable.empty();
        $.each(borrowedCycles, function (index, borrowedCycle) {
            borrowedCycleTable.append(
                '<tr>' +
                '<td>' + borrowedCycle.cycleId + '</td>' +
                '<td>' + borrowedCycle.cycleName + '</td>' +
                '<td>' + borrowedCycle.stock + '</td>' +
                '</tr>'
            );
        });
    }

    $('#add-cycle-button').click(function () {
        var newCycle = {
            cycleName: 'New Cycle',
            stock: 1
        };

        $.ajax({
            url: '/api/cycles/add',
            method: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(newCycle),
            success: function () {
                getCyclesList();
            }
        });
    });

    $('#add-stock-button').click(function () {
        var cycleId = 1; // Customize the cycle ID as needed

        $.ajax({
            url: '/api/cycles/addStock/' + cycleId,
            method: 'PUT',
            success: function () {
                getCyclesList();
            }
        });
    });

    getCyclesList();
    getBorrowedCyclesList();
});
