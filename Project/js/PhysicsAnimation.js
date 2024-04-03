$(document).ready(function() {
    let ballNumber = 1;
    $('div.topOfCylinderDiv').css('background-color', 'lightyellow');
    $('div.middleOfCylinderDiv').css('background-color', 'lightyellow');
    $('div.bottomOfCylinderDiv').css('background-color', 'lightyellow');
    $('select.typeOfLiquid').change(function() {
        if ($('select.typeOfLiquid').val() === "Бензин") {
            $('div.topOfCylinderDiv').css('background-color', 'lightyellow');
            $('div.middleOfCylinderDiv').css('background-color', 'lightyellow');
            $('div.bottomOfCylinderDiv').css('background-color', 'lightyellow');
        } else if ($('select.typeOfLiquid').val() === "Вода") {
            $('div.topOfCylinderDiv').css('background-color', 'lightblue');
            $('div.middleOfCylinderDiv').css('background-color', 'lightblue');
            $('div.bottomOfCylinderDiv').css('background-color', 'lightblue');
        } else if ($('select.typeOfLiquid').val() === "Глицерин") {
            $('div.topOfCylinderDiv').css('background-color', 'ghostwhite');
            $('div.middleOfCylinderDiv').css('background-color', 'ghostwhite');
            $('div.bottomOfCylinderDiv').css('background-color', 'ghostwhite');
        }
    })
    $('button.getValues').click(function() {
        if ($('select.typeOfLiquid').val() === "Вода") {
            $('div.ballDiv').animate({ margin: '21%' }, 5000);
        } else if ($('select.typeOfLiquid').val() === "Бензин") {
            $('div.ballDiv').animate({ margin: '21%' }, 5000 * 0.75);
        } else if ($('select.typeOfLiquid').val() === "Глицерин") {
            $('div.ballDiv').animate({ margin: '21%' }, 5000 * 1.2);
        }
        setTimeout(() => $('div.ballDiv').animate({ margin: '0%' }, 0), 1000);
        let ballsWeight = 1
        let ballsRadius = 0.175
        let VesselRadius = 5
        let distanceBetweenLabels = 50
        if (ballNumber === 1) {
            ballNumber++;
            let ballsDensity = ballsWeight / (4 * 3.14 * ballsRadius ** 3 / 3)
            if ($('select.typeOfLiquid').val() === "Вода") {
                $('p#firstBallRadius').text(ballsRadius);
                $('p#firstBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(1);
                $('p#firstBallDistancePassingTime').text(2);
                $('p#firstBallTheSpeedOfPassingTheDistance').text(25);
                $('p#firstBallViscosity').text(0.07);
            } else if ($('select.typeOfLiquid').val() === "Бензин") {
                $('p#firstBallRadius').text(ballsRadius);
                $('p#firstBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(0.75);
                $('p#firstBallDistancePassingTime').text(1.5);
                $('p#firstBallTheSpeedOfPassingTheDistance').text(33);
                $('p#firstBallViscosity').text(0.05);
            } else if ($('select.typeOfLiquid').val() === "Глицерин") {
                $('p#firstBallRadius').text(ballsRadius);
                $('p#firstBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(1.2);
                $('p#firstBallDistancePassingTime').text(2.4);
                $('p#firstBallTheSpeedOfPassingTheDistance').text(21);
                $('p#firstBallViscosity').text(0.85);
            }
            $('input.ballsWeight').val('');
            $('input.ballsRadius').val('');
            $('input.VesselRadius').val('');
            $('input.distanceBetweenLabels').val('');
        } else if (ballNumber === 2) {
            ballNumber++;
            ballsDensity = ballsWeight / (4 * 3.14 * ballsRadius ** 3 / 3)
            if ($('select.typeOfLiquid').val() === "Вода") {
                $('p#secondBallRadius').text(ballsRadius);
                $('p#secondBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(1);
                $('p#secondBallDistancePassingTime').text(2);
                $('p#secondBallTheSpeedOfPassingTheDistance').text(25);
                $('p#secondBallViscosity').text(0.07);
            } else if ($('select.typeOfLiquid').val() === "Бензин") {
                $('p#secondBallRadius').text(ballsRadius);
                $('p#secondBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(0.75);
                $('p#secondBallDistancePassingTime').text(1.5);
                $('p#secondBallTheSpeedOfPassingTheDistance').text(33);
                $('p#secondBallViscosity').text(0.05);
            } else if ($('select.typeOfLiquid').val() === "Глицерин") {
                $('p#secondBallRadius').text(ballsRadius);
                $('p#secondBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(1.2);
                $('p#secondBallDistancePassingTime').text(2.4);
                $('p#secondBallTheSpeedOfPassingTheDistance').text(21);
                $('p#secondBallViscosity').text(0.85);
            }
            $('input.ballsWeight').val('');
            $('input.ballsRadius').val('');
            $('input.VesselRadius').val('');
            $('input.distanceBetweenLabels').val('');
        } else if (ballNumber === 3) {
            ballsDensity = ballsWeight / (4 * 3.14 * ballsRadius ** 3 / 3)
            if ($('select.typeOfLiquid').val() === "Вода") {
                $('p#thirdBallRadius').text(ballsRadius);
                $('p#thirdBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(1);
                $('p#thirdBallDistancePassingTime').text(2);
                $('p#thirdBallTheSpeedOfPassingTheDistance').text(25);
                $('p#thirdBallViscosity').text(0.07);
            } else if ($('select.typeOfLiquid').val() === "Бензин") {
                $('p#thirdBallRadius').text(ballsRadius);
                $('p#thirdBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(0.75);
                $('p#thirdBallDistancePassingTime').text(1.5);
                $('p#thirdBallTheSpeedOfPassingTheDistance').text(33);
                $('p#thirdBallViscosity').text(0.05);
            } else if ($('select.typeOfLiquid').val() === "Глицерин") {
                $('p#thirdBallRadius').text(ballsRadius);
                $('p#thirdBallDensity').text(ballsDensity);
                $('p#VesselDensity').text(1.2);
                $('p#thirdBallDistancePassingTime').text(2.4);
                $('p#thirdBallTheSpeedOfPassingTheDistance').text(21);
                $('p#thirdBallViscosity').text(0.85);
            }
        }
    })
});