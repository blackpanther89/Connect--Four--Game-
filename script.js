(function() {
    var currentPlayer = 'player1';
    var allSlots = $('.slot');
    var diagSlots = [
        [2, 9, 16, 23],
        [1, 8, 15, 22, 29],
        [0, 7, 14, 21, 28, 35],
        [6, 13, 20, 27, 34, 41],
        [12, 19, 26, 33, 40],
        [18, 25, 32, 39],
        [3, 8, 13, 18],
        [4, 9, 14, 19, 24],
        [5, 10, 15, 20, 25, 30],
        [11, 16, 21, 26, 31, 36],
        [17, 22, 27, 32, 37],
        [23, 28, 33, 38],
    ];

    $('.column').on('click', function(e) {
        var col = $(e.currentTarget);
        var slotsInCol = col.find('.slot');
        var addedClass = false;
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInCol.eq(i).hasClass('player1') &&
                !slotsInCol.eq(i).hasClass('player2')
            ) {
                slotsInCol.eq(i).addClass(currentPlayer);
                addedClass = true;
                break;
            }
        }
        if (!addedClass) {
            return;
        }

        if (checkForVictory(slotsInCol)) {
            alert(currentPlayer + ' has won... Play again!');
            location.reload(); //refresh page
        } else if (checkForVictory($('.row' + i))) {
            alert(currentPlayer + ' has won... Play again!');

            location.reload();
        } else if (checkForVictoryDiag(diagSlots)) {
            location.reload();
        }

        switchPlayer();
    });

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }
    function checkForVictoryDiag(diagSlots) {
        var diagCount = 0;
        for (var i = 0; i < diagSlots.length; i++) {
            diagCount = 0;
            for (var j = 0; j < diagSlots[i].length; j++) {
                if (allSlots.eq(diagSlots[i][j]).hasClass(currentPlayer)) {
                    diagCount++;
                    console.log(diagCount, i, j);
                    if (diagCount == 4) {
                        return true;
                    }
                } else {
                    diagCount = 0;
                }
            }
        }
    }

    function switchPlayer() {
        if (currentPlayer == 'player1') {
            currentPlayer = 'player2';
        } else {
            currentPlayer = 'player1';
        }
    }

    $('#reset').on('click', function() {
        location.reload();
    });
})();
