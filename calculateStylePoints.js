// calculateStylePoints.js
const calculateStylePoints = (styleNotes) => {

    let stylePointsOrdered = styleNotes.sort( );

    return stylePointsOrdered[1] + stylePointsOrdered[2] + stylePointsOrdered[3];

};
  
module.exports = calculateStylePoints;
