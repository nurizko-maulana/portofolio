import React from "react";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useReward } from "react-rewards";

export default function Jovanka() {
  const animationDuration = Math.floor(30);
  const { reward: confettiReward, isAnimating } = useReward("rewardId", "confetti");
  const { reward: confettiEmoji, isEmoji } = useReward("emojiId", "emoji",{
    emoji: ['💛']
  });
  return (
    <div>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom duration={1000}>
          <h1 className="">Hi</h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom duration={1000}>
          <h1 className="">Today is your special day</h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <h1 className="">
            Last year i was totaly to shy celebrating this moment
          </h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <h1 className="">
            So this year i ask tante lala for helping me celebrate it{" "}
          </h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen mt-24 flex text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <blockquote
            class="tiktok-embed"
            cite="https://www.tiktok.com/@tantelalapunyacerita/video/7061788582490492186"
            data-video-id="7061788582490492186"
            style="max-width: 605px;min-width: 325px;"
          >
            {" "}
            <section>
              {" "}
              <a
                target="_blank"
                title="@tantelalapunyacerita"
                href="https://www.tiktok.com/@tantelalapunyacerita"
              >
                @tantelalapunyacerita
              </a>{" "}
              <a
                title="jawaban"
                target="_blank"
                href="https://www.tiktok.com/tag/jawaban"
              >
                #jawaban
              </a>{" "}
              untuk @AINGMIXTANASALE&#47;MerKuRi{" "}
              <a
                target="_blank"
                title="♬ suara asli  - Tante Lala Oficiall"
                href="https://www.tiktok.com/music/suara-asli-Tante-Lala-Oficiall-7061788602732153627"
              >
                ♬ suara asli - Tante Lala Oficiall
              </a>{" "}
            </section>{" "}
          </blockquote>{" "}
          <script async src="https://www.tiktok.com/embed.js"></script>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <h1 className="">
            😅 looks like tante lala is not in her mood right now
          </h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <h1 className="">Oke jadi abang bantu kasi tau ygy</h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <h1 className="">Hari ini Indriyani Jovanka insyaalah S.Kep</h1>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <RoughNotationGroup show={true}>
          <h1 className="">
            Berulang tahun yg ke{" "}
            <RoughNotation
              type="box"
              multiline={true}
              padding={[0, 2]}
              iterations={1}
              animationDuration={animationDuration}
              color={"#FF57BB"}
            >
              <span style={{ color: "#FF57BB" }} className="text-pink-600">
                22
              </span>
            </RoughNotation>{" "}
            tahun
          </h1>
        </RoughNotationGroup>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <button
            className=" flex-col justify-center items-center "
            onClick={confettiReward}
          >
            <Image src="/cake.svg" height={70} width={70} />
            <span id="rewardId" />
            <p>Tap to celebrate jovanka's birhday </p>
          </button>
        </Zoom>
      </section>
      <section
        style={{ height: "100vh" }}
        className="w-screen flex justify-center items-center text-center"
      >
        <Zoom delay={1000} duration={1000}>
          <button
            className=" flex-col justify-center items-center "
            onClick={confettiEmoji}
          >
            <span id="emojiId" />
            <p>Presented with <span className="pr-1">💛</span> by riko </p>
          </button>
        </Zoom>
      </section>
    </div>
  );
}
