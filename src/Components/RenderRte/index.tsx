import React, { useEffect, useRef } from "react";

function RenderRte(props: PropsType) {
  const element = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (element?.current && props.rte) {
      element.current.innerHTML = props.rte;
    }
  });
  return <div ref={element}></div>;
}

export default RenderRte;

type PropsType = {
  rte?: string;
};
