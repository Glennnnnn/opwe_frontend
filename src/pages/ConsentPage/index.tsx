import { Button } from "antd";
import { useEffect, useState } from "react";
import { http } from "@/utils";

interface Params {
  scope?: string;
  client_id?: string;
  state?: string;
}

function ConsentPage() {
  const [consentResult, setConsentResult] = useState({});
  const [consentScopes, setConsentScopes] = useState({});
  const [consentApprovedScopes, setConsentApprovedScopes] = useState({});
  useEffect(() => {
    const queryConsentParams = async () => {
      let queryString = window.location.search
      let urlParams = new URLSearchParams(queryString);
      const params: Params = {};

      urlParams.forEach((value, key) => {
        params[key as keyof Params] = value;
      });
      const res = await http.get('/oauth2/consent/parameters', {
        params
      })
      console.log(res)
      if (res.data.code == 200) {
        setConsentResult(res.data)
        setConsentScopes({
          ...res.data.previouslyApprovedScopes,
          ...res.data.scopes
        })
        setConsentApprovedScopes(res.data.previouslyApprovedScopes.map((e: any) => e.scope))
      }

      console.log(consentResult)
      console.log(consentScopes)
      console.log(consentApprovedScopes)
    }
    queryConsentParams()
  })

  const sendConsent = () => {
    console.log("a")
  }


  return (
    <>
      <div>
        Please confirm with the terms and conditions.
      </div>
      <Button type="primary" onClick={sendConsent}>Confirm</Button>
    </>
  )
}


export default ConsentPage;