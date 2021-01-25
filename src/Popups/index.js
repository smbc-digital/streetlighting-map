import { getTargetUrl } from '../Helpers'

const streetlightPopup = (feature, layer) => {
  const varName = getTargetUrl()

  const content = `<div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr/>
  <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.central_asset_id}</p></div>
  <a class="button-primary" href="${varName}/street-lighting/report-an-issue/fault-type?assetId=${feature.properties.central_asset_id}&siteCode=${feature.properties.site_code}">Report this street light</a>`

  layer.bindPopup(content)
}

//const streetlightFaultPopup = (feature, layer) => {
//  const varName = getTargetUrl()
//  let noOfDays = Math.floor(
//    (new Date() - new Date(feature.properties.job_entry_date)) /
//      (1000 * 3600 * 24)
//  )
//  let lastUpdated = Math.floor(
//    (new Date() - new Date(feature.properties.logged_date)) / (1000 * 3600 * 24)
//  )
//  const defaultMessage = noOfDays
//    ? `A fault with this street light was reported ${noOfDays} days ago`
//    : 'A fault with this street light was reported'
//  const showLastUpdated = lastUpdated
//    ? `<div class="last-updated">Last updated ${lastUpdated} days ago</div>`
//    : ''

//  const content = `<div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr>
//     <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.central_asset_id}</p></div>
//     <div class= "message-fault">${defaultMessage}</div>
//     <a class="button-primary" href="${varName}/track-a-report/details/${feature.properties.ext_system_ref}">View reported fault</a>
//     ${showLastUpdated}`
//
//  layer.bindPopup(content)
//}

//const streetlightMaintenancePopup = (feature, layer) => {
//  const message =
//    feature.properties.message ??
//    'This street light is part of a maintenance programme and will be fixed without a need to report'
//
//  const content = `<div class="item"><span class="iconify" data-icon="fa-map-marker" data-inline="false"></span></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr>
//     <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.central_asset_id}</p></div>
//     <div class= "message-maintenance">${message}</div>`
//
//  layer.bindPopup(content)
//}

//const streetLightingPopup = (feature, layer) => {
  
  //const content = `<div class="item"><i class="fa fa-lightbulb-o" aria-hidden="true"></i><p class="title">Street Light</p>
  //<p></p>
  //<p class="info">Location: ${feature.properties.location_description}</p>
  //<p class="info">Number on Lamp Post: ${feature.properties.feature_id}</p>
  //<p class="info">CAID: ${feature.properties.central_asset_id}</p>
  //<p class="info">Site Code: ${feature.properties.site_code}</p>
  //<p class="info">Job Status: ${feature.properties.job_status}</p>
  //<p class="info">Fault Reported: ${feature.properties.job_entry_date}</p>
  //<p class="info">Job Last Updated ${feature.properties.logged_date}</p>
  //<p class="info">Message: ${feature.properties.message}</p>
  
  //</div>`
 
  //layer.bindPopup(content)
 //}

//function streetLightingPopup(feature, layer) {
//  if (feature.properties.raise_new_job = ("1")) {
//    var content = "this is writing";
//  } 

//  else if (feature.properties.raise_new_job = ("2")) {
//    var content = "this is different writing";
//  }

//layer.bindPopup(content)
//}

export {
  streetlightPopup 
}