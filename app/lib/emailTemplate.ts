export interface WelcomeEmailData {
  recipientEmail: string;
  concerns?: string[];
  discountCode?: string;
}

export function generateWelcomeEmailHtml({
  recipientEmail,
  concerns = [],
  discountCode = "GLOW15",
}: WelcomeEmailData): string {
  const selectedFocus =
    concerns.length > 0 ? concerns.join(", ") : "Custom Skin Vitality";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to The Glowora Society</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #FAF8F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1F2421; }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F5; color: #1F2421;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAF8F5;">
    <tr>
      <td align="center" style="padding: 40px 16px;">
        <!-- Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #FDFBF8; border: 1px solid #E8E2D8; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          
          <!-- Brand Header -->
          <tr>
            <td align="center" style="padding: 40px 30px 24px 30px; background-color: #1F2421; color: #FAF8F5;">
              <p style="margin: 0 0 6px 0; font-size: 10px; letter-spacing: 0.35em; text-transform: uppercase; color: #DFD3C3; font-weight: 500;">
                Paris &bull; New York
              </p>
              <h1 style="margin: 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 36px; font-weight: 300; letter-spacing: 0.28em; color: #FAF8F5; text-transform: uppercase;">
                GLOWORA
              </h1>
              <p style="margin: 6px 0 0 0; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: #9EA6A0; font-weight: 300;">
                Your skincare. Your glow.
              </p>
            </td>
          </tr>

          <!-- Editorial Lead -->
          <tr>
            <td style="padding: 36px 36px 20px 36px;">
              <p style="margin: 0 0 8px 0; font-size: 11px; letter-spacing: 0.25em; text-transform: uppercase; color: #536F5A; font-weight: 600;">
                The Society Welcome
              </p>
              <h2 style="margin: 0 0 16px 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 28px; line-height: 1.25; font-weight: 400; color: #1F2421;">
                Awaken Your Inaugural Ritual
              </h2>
              <div style="width: 48px; height: 1px; background-color: #C5A880; margin: 0 0 20px 0;"></div>
              <p style="margin: 0 0 16px 0; font-size: 14px; line-height: 1.7; color: #3D4440; font-weight: 300;">
                Thank you for entering the circle. Formulated in our Grasse laboratory, GLOWORA combines cold-pressed wild botanicals with clinical biomimetic lipid science to restore skin to its purest candlelit radiance.
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #3D4440; font-weight: 300;">
                We have registered your subscriber preference for <strong style="color: #1F2421; font-weight: 600;">${selectedFocus}</strong>.
              </p>
            </td>
          </tr>

          <!-- Code Voucher Box -->
          <tr>
            <td style="padding: 0 36px 28px 36px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAF8F5; border: 1px dashed #C5A880; border-radius: 6px;">
                <tr>
                  <td align="center" style="padding: 24px;">
                    <p style="margin: 0 0 6px 0; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #6E7570;">
                      Your Privileged 15% Society Gift
                    </p>
                    <div style="display: inline-block; padding: 8px 24px; background-color: #1F2421; border-radius: 4px; margin: 8px 0 12px 0;">
                      <span style="font-family: 'Courier New', Courier, monospace; font-size: 22px; font-weight: bold; letter-spacing: 0.25em; color: #FAF8F5;">
                        ${discountCode}
                      </span>
                    </div>
                    <p style="margin: 0; font-size: 12px; color: #536F5A; font-weight: 500;">
                      Apply at checkout on any elixir, crème, or 4-step ritual set.
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 11px; color: #9EA6A0;">
                      Includes complimentary carbon-neutral shipping on orders over $90.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4-Step Primer -->
          <tr>
            <td style="padding: 0 36px 32px 36px;">
              <h3 style="margin: 0 0 16px 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 20px; font-weight: 500; color: #1F2421;">
                The 4-Step Radiance Architecture
              </h3>
              
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #E8E2D8;">
                    <strong style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #536F5A;">01 Cleanse</strong>
                    <p style="margin: 2px 0 0 0; font-size: 13px; color: #3D4440;">Velvet Dew Balancing Oil &bull; Dissolves impurities while preserving the acid mantle.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #E8E2D8;">
                    <strong style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #536F5A;">02 Treat</strong>
                    <p style="margin: 2px 0 0 0; font-size: 13px; color: #3D4440;">Luminescent C-Complex &bull; 15% Vitamin C + Marine Peptides for cellular brightening.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #E8E2D8;">
                    <strong style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #536F5A;">03 Hydrate</strong>
                    <p style="margin: 2px 0 0 0; font-size: 13px; color: #3D4440;">Bio-Ceramide Cashmere Cr&egrave;me &bull; 5 skin-identical lipids for 72-hour moisture lock.</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-top: 1px solid #E8E2D8;">
                    <strong style="font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; color: #536F5A;">04 Protect</strong>
                    <p style="margin: 2px 0 0 0; font-size: 13px; color: #3D4440;">Silk Veil Mineral Sun Drops SPF 50+ &bull; Non-nano zinc shield with zero white cast.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Founder Sign-off -->
          <tr>
            <td style="padding: 24px 36px; background-color: #F3EFEA; border-top: 1px solid #E8E2D8;">
              <p style="margin: 0 0 8px 0; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; font-style: italic; color: #1F2421;">
                &ldquo;True radiance is never covered up &mdash; it is cultivated through respect for your biology.&rdquo;
              </p>
              <p style="margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #6E7570;">
                Dr. H&eacute;l&egrave;ne Moreau &amp; Marc Vance &bull; Formulators, GLOWORA Paris
              </p>
            </td>
          </tr>

          <!-- Footer Legal -->
          <tr>
            <td align="center" style="padding: 24px 30px; background-color: #191D1A; color: #9EA6A0; font-size: 11px; line-height: 1.6;">
              <p style="margin: 0 0 8px 0; color: #DFD3C3; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;">
                GLOWORA &bull; Paris Flagship: 14 Rue Saint-Honor&eacute; &bull; New York Atelier: 482 Broome St
              </p>
              <p style="margin: 0 0 8px 0;">
                This welcome dispatch was sent to <span style="color: #FAF8F5;">${recipientEmail}</span> because you requested membership in The Glowora Society.
              </p>
              <p style="margin: 0;">
                &copy; 2026 GLOWORA Beauty Inc. All rights reserved. &bull; 100% Recyclable Packaging &bull; Carbon Neutral.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function generateWelcomeEmailText({
  recipientEmail,
  concerns = [],
  discountCode = "GLOW15",
}: WelcomeEmailData): string {
  const selectedFocus =
    concerns.length > 0 ? concerns.join(", ") : "Custom Skin Vitality";

  return `GLOWORA
Your skincare. Your glow.
Paris • New York

WELCOME TO THE GLOWORA SOCIETY
-------------------------------------------

Thank you for entering the circle. Formulated in our Grasse laboratory, GLOWORA combines cold-pressed wild botanicals with clinical biomimetic lipid science to restore skin to its purest candlelit radiance.

Your registered skin profile focus: ${selectedFocus}

YOUR 15% SOCIETY GIFT CODE:
${discountCode}

Apply code ${discountCode} at checkout on any elixir, crème, or ritual set. Includes complimentary carbon-neutral shipping on orders over $90.

THE 4-STEP RADIANCE ARCHITECTURE
1. Cleanse: Velvet Dew Balancing Oil (Camellia seed + Squalane)
2. Treat: Luminescent C-Complex (15% Vitamin C + Marine Peptides)
3. Hydrate: Bio-Ceramide Cashmere Crème (5 Biomimetic Ceramides)
4. Protect: Silk Veil Mineral Sun Drops SPF 50+ (PA++++ Non-Nano Zinc)

"True radiance is never covered up — it is cultivated through respect for your biology."
— Dr. Hélène Moreau & Marc Vance, Formulators, GLOWORA Paris

-------------------------------------------
Sent to: ${recipientEmail}
© 2026 GLOWORA Beauty Inc. All rights reserved.
Paris: 14 Rue Saint-Honoré | New York: 482 Broome Street
`;
}
