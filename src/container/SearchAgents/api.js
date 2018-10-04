import axios from "axios"

export const fetchAgentsAPI = (data = "") => axios.post(`${API_URL}agent/elastic/query`, data)

export const sendAppLinkToDownloadAPI = (data = "") => axios
  .post(`${API_V2_URL}appDownloadSms`, data, { headers: { "internal-id": "d3abb3c23d1692f2cc9abb85d6f4ce66" } })
