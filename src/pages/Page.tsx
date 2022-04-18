import React from "react";

interface pageProps{
  num?:number,
  text:string
}

function Test(props:pageProps) {
  return <div>{props.text}</div>;
}

export default function () {
  return <Test text="小怪兽"/>;
}
