const streetLightingPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-lightbulb-o" aria-hidden="true"></i><p class="title">Street Light</p>
  <p></p>
  <p class="info">Location: ${feature.properties.location_description}</p>
  <p class="info">Number on Lamp Post: ${feature.properties.feature_id}</p>
  <p class="info">CAID: ${feature.properties.central_asset_id}</p>
  <p class="info">Site Code: ${feature.properties.site_code}</p>
  <p class="info">Job Status: ${feature.properties.job_status}</p>
  <p class="info">Fault Reported: ${feature.properties.job_entry_date}</p>
  <p class="info">Job Last Updated ${feature.properties.logged_date}</p>
  <p class="info">Message: ${feature.properties.message}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

//function streetLightingPopup(feature, layer) {
//  if (feature.properties.raise_new_job = ("1   ")) {
//    var content = "this is writing";
//  } 
//
//  else if (feature.properties.raise_new_job = ("2   ")) {
//    var content = "this is different writing";
//  }
//
//layer.bindPopup(content)
//}

export {
  streetLightingPopup 
}