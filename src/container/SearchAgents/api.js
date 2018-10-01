import axios from "axios"

export const fetchAgentsAPI = (data = "") => axios.post(`${API_URL}agent/elastic/query`, data)

export const sendAppLinkToDownloadAPI = (data = "") => axios.post(`${API_V2_URL}appDownloadSms`, data)
