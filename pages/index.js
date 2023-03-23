// Next/React imports
import { useEffect } from 'react';
import Router from "next/router"

export default function Index() {

  // Code to redirect the user to the home page upon entering
  useEffect(() => {
    Router.push("/home");
  })

  return <></>
}
