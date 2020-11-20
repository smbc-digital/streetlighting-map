function getColor_streetlights(d) {
switch  (d) {   case '1'    :
                    return '#33a02c'    
                case '2'    :
                    return '#ff7f00'
                case '3'    :
                    return '#e31a1c'    
            }
}
function streetlightingStyle (feature) {
return {
    color: getColor_streetlights (feature.properties.raise_new_job),
    weight: 1,
    opacity: 1,
    fillColor: getColor_streetlights (feature.properties.raise_new_job),
    fillOpacity: 0.5
    }
}
export {
streetlightingStyle
}