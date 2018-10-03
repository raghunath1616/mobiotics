export function LoadScript(url, callback) {
  const script = document.createElement("script")
  script.type = "text/javascript"

  if (script.readyState) {
    //IE
    script.onreadystatechange = () => {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null
        callback()
      }
    }
  } else {
    //Others
    script.onload = () => {
      callback()
    }
  }

  script.src = url
  document.getElementsByTagName("head")[0].appendChild(script)
}

export function UrlSearchParams(queryString) {
  const results = new RegExp(`[?&]${queryString}=([^&#]*)`).exec(window.location.href)
  if (results == null) {
    return null
  }
  return decodeURI(results[1]) || 0
}

export const mapLocation = (request, payload) => {
  if (request.sortByEntity === "random") {
    request.randomSeed = Math.floor(Math.random() * (9000000000 - 1000000000))
  } else {
    delete request.randomSeed
  }
  request.facade = payload ? !payload.facadesNotRequired : true
  if (payload) {
    request.fullname = payload.fullname
    request.searchString = payload.searchString
    const { location } = payload
    location.addressComponents.forEach((place, index) => {
      if (index === 0) {
        if (place.types[0] === "postal_code") {
          request.zip = place.long_name
        } else if (
          place.types[0] !== "administrative_area_level_1"
          && place.types[0] !== "country"
          && place.types[0] !== "postal_code"
        ) {
          request.nearbylocation = place.types[0] !== "street_number"
            ? location.addressComponents[0].long_name
            : location.addressComponents[1].long_name
        }
      }

      switch (place.types[0]) {
        case "natural_feature":
          if (place.long_name.indexOf(", ") > -1) {
            request.city = place.long_name.split(",")[0]
          } else {
            request.city = place.long_name
          }
          break
        case "locality":
          if (place.long_name.indexOf(", ") > -1) {
            request.city = place.long_name.split(",")[0]
          } else {
            request.city = place.long_name
          }
          break
        case "administrative_area_level_1":
          request.state = place.long_name
          request.stateShort = place.short_name
          break
        case "country":
          request.country = place.long_name
          break
        default:
          break
      }

      if (request.nearbylocation && request.nearbylocation !== "") {
        if (request.nearbylocation.indexOf(", ") > -1) {
          request.city = request.nearbylocation.split(",")[0]
        } else {
          request.city = request.nearbylocation
        }
      }

      delete request.nearbylocation
    })
  }

  return request
}

export const getInitials = (name) => {
  let initials = name.match(/\b\w/g) || []
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase()
  return initials
}

export function getEpoch(customDate = new Date()) {
  return parseInt(customDate.getTime() / 1000)
}

export const unixToDate = (input) => {
  try {
    const a = new Date(0)
    a.setUTCSeconds(input)
    return a
  } catch (e) {
    return "invalid date"
  }
}
