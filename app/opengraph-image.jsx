import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} social preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0B0F19 0%, #111B34 42%, #D4A017 100%)",
          color: "#F8FAFC",
          position: "relative",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(255,255,255,0.16), transparent 36%), radial-gradient(circle at bottom right, rgba(212,160,23,0.18), transparent 32%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: "64px",
          }}
        >
          <div style={{ display: "flex", gap: "18px", alignItems: "center" }}>
            <div
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "22px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              AH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }}
              >
                ADESA HQ
              </span>
              <span style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)" }}>
                Builder-operator group across Africa
              </span>
            </div>
          </div>

          <div style={{ maxWidth: "860px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "68px",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                fontWeight: 800,
              }}
            >
              Governance, capital, and operating companies built for long-term
              value
            </h1>
            <p
              style={{
                margin: 0,
                fontSize: "28px",
                lineHeight: 1.35,
                color: "rgba(248,250,252,0.9)",
                maxWidth: "780px",
              }}
            >
              Adesa Media, Adesa Energy, Adesa Solutions, and Adesa
              Distribution under one holding company.
            </p>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
