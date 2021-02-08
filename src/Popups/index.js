import { getTargetUrl } from '../Helpers'

const streetlightActivePopup = feature => {
  const varName = getTargetUrl()

  return `<div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr/>
  <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.feature_id}</p></div>
  <a class="button-primary" href="report-an-issue/fault-type?assetId=${feature.properties.central_asset_id}&siteCode=${feature.properties.site_code}">Report this street light</a>`
}

const streetlightFaultPopup = feature => {
 const varName = getTargetUrl()
 let noOfDays = Math.floor(
   (new Date() - new Date(feature.properties.job_entry_date)) /
     (1000 * 3600 * 24)
 )
 let lastUpdated = Math.floor(
   (new Date() - new Date(feature.properties.logged_date)) / (1000 * 3600 * 24)
 )
 const defaultMessage = noOfDays
   ? `A fault with this street light was reported ${noOfDays} days ago`
   : 'A fault with this street light was reported'
 const showLastUpdated = lastUpdated
   ? `<div class="last-updated">Last updated ${lastUpdated} days ago</div>`
   : ''

 return `<div class="item"><i class="tag fa fa-map-marker"></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr>
    <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.feature_id}</p></div>
    <div class= "message-fault">${defaultMessage}</div>
    <a class="button-primary" href="${varName}/track-a-report/details/${feature.properties.ext_system_ref}">View reported fault</a>
    ${showLastUpdated}`

}

const streetlightMaintenancePopup = feature => {
 const message =
   feature.properties.message ??
   'This street light is part of a maintenance programme and will be fixed without a need to report'

 return`<div class="item"><span class="iconify" data-icon="fa-map-marker" data-inline="false"></span></i><p class="title">Location </p><p class="info">${feature.properties.location_description}</p></div><hr>
    <div class="item"><i class="tag fa fa-tag"></i><p class="title">Number on street light </p><p class="info">${feature.properties.feature_id}</p></div>
    <div class= "message-maintenance">${message}</div>`

}

const streetLightingPopup = (feature, layer) => {
  var content = getcontent_streetlights(feature)

  layer.bindPopup(content)
}

const getcontent_streetlights = feature => {
  switch  (feature.properties.raise_new_job) {  
    case 1:
        return streetlightActivePopup(feature)
    case 2:
        return streetlightMaintenancePopup(feature)
    case 3:
        return streetlightFaultPopup(feature)    
  }
}

export {
  streetLightingPopup 
}