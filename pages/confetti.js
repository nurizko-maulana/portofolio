import React, { useCallback, useRef } from "react";
import { useReward } from "react-rewards";

export default function Confetti() {
  const { reward, isAnimating } = useReward("rewardId", "confetti");

  return (
    <section
      style={{ height: "100vh" }}
      className="w-screen flex justify-center items-center text-center"
    >
      <button disabled={isAnimating} onClick={reward}>
        <span id="rewardId" />
        🎉
      </button>
    </section>
  );
}
