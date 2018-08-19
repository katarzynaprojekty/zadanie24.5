// calculateDistancePoints.js
const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let distancePoints;

    if (hillSize == 'normal' ){ //Skocznia normalna w Pjongjangu
        distancePoints = 60 + (2 * (distance - kPoint));
    } 
    else if (hillSize == 'big') { //Skocznia duża w Zakopanem
        distancePoints = 60 + (1.8 * (distance - kPoint));
    } 
    else if (hillSize == 'mammoth') { //Skocznia mamucia w Planicy
        distancePoints = 120 + (1.2 * (distance - kPoint));
    }

    return distancePoints;
};

module.exports = calculateDistancePoints;
