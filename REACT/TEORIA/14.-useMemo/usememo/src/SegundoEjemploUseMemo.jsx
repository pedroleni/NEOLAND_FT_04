import React from "react";
import useMath from "./hooks/useMath";
import { useMemo, useState } from "react";

const SegundoEjemploUseMemo = () => {
  const [rerender, setRerender] = useState(false);
  const [rememo, setRememo] = useState(false);
  const { mapScores } = useMath();

  const noMemo = mapScores("no-memo");

  const memo = useMemo(() => mapScores("memo"), [rememo]);

  return (
    <div>
      <h1>SegundoEjemploUseMemo</h1>
      <h2> P no memorizadas ❌</h2>
      {noMemo}
      <h2>P con memorizacion 📕</h2>
      {memo}

      <button onClick={() => setRerender((value) => !value)}>Rerender</button>
      <button onClick={() => setRememo((value) => !value)}>ReMemorizar</button>
    </div>
  );
};

export default SegundoEjemploUseMemo;
