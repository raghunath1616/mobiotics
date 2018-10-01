import axios from "axios"

export const fetchOutboundReferralAPI = (params = "") => axios
  .get(`${API_V2_URL}refer/referrals-list?referralType=outgoing${params}`)
