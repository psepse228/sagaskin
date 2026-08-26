import { ImageResponse } from "next/og";

// Real SAGA favicon, replacing the default Next.js triangle logo — see
// feedback from the client. Generated at build time (no external image
// tooling needed), navy ground + ivory "S" to match the site's palette
// (app/globals.css --navy / --ivory).
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e1e35",
          borderRadius: 7,
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#f5f0e8",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            marginTop: -1,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size },
  );
}
