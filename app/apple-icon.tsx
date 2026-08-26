import { ImageResponse } from "next/og";

// Same mark as app/icon.tsx, sized for iOS home-screen icons (iOS applies
// its own rounding/mask, so no border-radius needed here).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <span
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "#f5f0e8",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            marginTop: -6,
          }}
        >
          S
        </span>
      </div>
    ),
    { ...size },
  );
}
