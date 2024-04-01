function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=globalThis.parcelRequire917c,r=t.register;r("kVuvd",function(r,o){Object.defineProperty(r.exports,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",()=>t("d4XQ7").default),t("d4XQ7")}),r("d4XQ7",function(r,o){e(r.exports,"default",()=>l);var i=t("ayMG0"),n=t("E6Avw"),l=({finalScore:e})=>(0,i.jsxs)(n.GameOver,{children:[(0,i.jsx)(n.Title,{children:"Game Over"}),(0,i.jsx)(n.HighScoreTitle,{children:"High Score"}),(0,i.jsx)(n.HighScore,{children:localStorage.getItem("score")??e}),(0,i.jsx)(n.FinalScoreTitle,{children:"Your Final Score"}),(0,i.jsx)(n.FinalScore,{children:e}),(0,i.jsx)(n.RestartPrompt,{children:"Press any Stratagem Input to Start Again!"})]})}),r("E6Avw",function(r,o){e(r.exports,"GameOver",()=>n),e(r.exports,"Title",()=>l),e(r.exports,"HighScoreTitle",()=>a),e(r.exports,"HighScore",()=>c),e(r.exports,"FinalScoreTitle",()=>p),e(r.exports,"FinalScore",()=>x),e(r.exports,"RestartPrompt",()=>d);var i=t("lmFrL");let n=(0,i.styled).div`
  display: flex;
  flex-direction: column;

  color: #fff;
  text-align: center;
  text-transform: uppercase;
`,l=(0,i.styled).h1`
  font-size: 96px;
  font-weight: 600;
`,s=(0,i.styled).span`
  color: var(--brand);
`,a=(0,i.styled).h2`
  font-size: 32px;
`,c=(0,i.styled)(s)`
  margin-top: -24px;

  font-size: 64px;
`,p=(0,i.styled).h2`
  font-size: 24px;
`,x=(0,i.styled)(s)`
  margin-top: -16px;

  font-size: 48px;
`,d=(0,i.styled).span`
  margin-top: 72px;

  color: var(--brand);
  font-size: 32px;
  font-weight: 600;
  text-transform: none;
`});
//# sourceMappingURL=game-over.6d5b2587.js.map
