## Goal
Make the portfolio truly Kaleab's: real working links everywhere, his actual face on the hero portrait (keeping the premium AI outfit instead of the striped sweater), and a polished gallery of his Kindeal Charity Club / community activities.

## 1. Real, working links (from Linktree)
Wire these into the Contact section, Footer, and Navbar where social/external links currently point to `#`:

- YouTube → `https://www.youtube.com/@KaleabMogesOfficial`
- Telegram → `https://t.me/KaleabMogesOfficial`
- TikTok → `https://www.tiktok.com/@kaleabmoges783`
- WhatsApp → `https://wa.me/251987076125`
- LinkedIn → `https://www.linkedin.com/in/kaleabmoges`
- Email → `mailto:kaleabmoges.eth@gmail.com` (already correct)
- Phone → `tel:+251987076125` (already correct)

Updates:
- **Contact.tsx**: fix the LinkedIn detail `href`, and replace the 3 placeholder social icons at the bottom with a full real set (YouTube, TikTok, Telegram, WhatsApp, LinkedIn, Email) — each opening in a new tab with proper `aria-label`.
- **Footer.tsx**: add a compact row of the same social icons with real links.

## 2. Trading broker call-to-actions
Add a "Trade With Me" card block in the **Content** section (below the channels) with two magnetic buttons:
- Open Exness Account → `https://one.exnessonelink.com/a/9hpa1kfa6t`
- Open HFM Account → `https://www.hfm.com/sv/en/?refid=30523001`

Both open in a new tab (`rel="noopener noreferrer"`), styled to match the existing gold/primary gradient buttons, with a short line that these are his recommended regulated brokers.

## 3. Hero portrait — Kaleab's real face, AI outfit
You like the AI portrait's clothing but want your real face. Approach:
- Take your uploaded studio portrait and use AI image editing to **replace the striped sweater with the smart outfit** from the current AI portrait, keeping your face, the dark background, and premium lighting.
- Save the result as the new `src/assets/kaleab-portrait.jpg` (same import, so the Hero swaps automatically).
- I'll QA the generated image before finalizing; if the face changes too much, I'll fall back to using your photo as-is with the dark treatment.

## 4. Gallery section (Kindeal Charity Club activities)
Create a new **Gallery** section showcasing the two meetup photos (Talita Rise Up / Kindeal Charity Club group activities):
- New file `src/components/portfolio/sections/Gallery.tsx` with an attractive layout: heading, short description about giving back through the Kindeal Charity Club, and the photos in elegant glass/tilt cards with captions and hover zoom.
- Photos uploaded via Lovable Assets (CDN), not committed as binaries.
- Add the section to `index.tsx` (placed right after Leadership, since it's charity-club activity) and add a **"Gallery"** link to the Navbar.

## Technical notes
- Photos are HEIC; I'll convert to web JPGs and host them through `lovable-assets`.
- All external links get `target="_blank" rel="noopener noreferrer"`.
- No backend needed — purely frontend/presentation changes.

## Out of scope
- Contact form still shows a success toast only (no email backend) — unchanged unless you want real email delivery later.
