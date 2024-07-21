import { Button } from "antd";
import { useEffect, useState } from "react";
import { http } from "@/utils";

interface Params {
  scope?: string;
  client_id?: string;
  state?: string;
}

interface TokenAccessParams {
  grant_type?: string;
  redirect_uri?: string;
  code?: string;
}

function ConsentPage() {
  const [consentResult, setConsentResult] = useState({});
  const [consentParams, setConsentParams] = useState({});
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
      console.log(res.data)
      if (res.data.code == 200) {
        console.log(res.data.data.scopes)
        setConsentResult(res.data.data)
        const newParams: Params = {
          scope: res.data.data.scopes[0].scope,
          client_id: res.data.data.clientId,
          state: res.data.data.state
        };
        setConsentParams(newParams)
        setConsentScopes({
          ...res.data.data.previouslyApprovedScopes,
          ...res.data.data.scopes
        })
        if (
          res.data.data.previouslyApprovedScopes !== null &&
          res.data.data.previouslyApprovedScopes !== undefined &&
          res.data.data.previouslyApprovedScopes.length > 0
        ) {
          setConsentApprovedScopes(res.data.previouslyApprovedScopes.map((e: any) => e.scope))
        }
        console.log("aaa")
      }

      console.log(consentResult)
      console.log(consentScopes)
      console.log(consentApprovedScopes)
    }
    queryConsentParams()
  }, [])

  const sendConsent = async () => {
    console.log(consentParams)
    const res = await http.post("/oauth2/authorize",
      consentParams,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
    const parsedUrl = new URL(res.data.data);
    const codeValue = parsedUrl.searchParams.get('code')
    if (codeValue) {
      console.log('Token stored in local storage:', codeValue);
      // Store the code value in local storage
      const tokenAccessParams: TokenAccessParams = {
        grant_type: "authorization_code",
        redirect_uri: "http://127.0.0.1:3000",
        code: codeValue
      };
      const tokenRes = await http.post("/oauth2/token",
        tokenAccessParams,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      )
      console.log(tokenRes);
    } else {
      console.log('Code value not found in URL.');
    }


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