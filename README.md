# DealPlug Jamaica – Project Continuity & PDR

**Date Updated:** March 29, 2026

This document serves as the central hub for the DealPlug Jamaica project. It details the current state of the architecture, dependencies, and upcoming roadmap to ensure seamless continuity as the project scales into automation.

## 🟢 1. Current Status (Phase 1: Foundation – COMPLETED)

The foundational web presence and initial conversion funnels have been successfully established.

*   **Website Platform:** Built with React (Vite) and Tailwind CSS.
*   **Hosting:** Deployed on Vercel (`dealplug-jamaica.vercel.app` / `dealplugjamaica.com`).
*   **Design:** Custom Jamaican-inspired aesthetic (Gold, Green, Navy, Black) with fully responsive mobile-first UI.
*   **Email Capture (Brevo Integration):** 
    *   Set up a custom `/api/subscribe` serverless Vercel function.
    *   API keys securely stored as Vercel Environment Variables.
    *   Subscribers automatically populate into the "DealPlug Subscribers" list.
*   **Social Channels Live:**
    *   **Twitter (X):** [@dealplugjamaica](https://x.com/dealplugjamaica)
    *   **TikTok:** [@dealplugjamaica](https://tiktok.com/@dealplugjamaica)
    *   **Telegram Flow:** [Join Channel](https://t.me/+nAWW1QsMPKpkNWNh)

## 🟡 2. Pending Items (Phase 2: Data Sources – IN PROGRESS)

We are currently in a holding pattern awaiting external vendor approval.

*   **AliExpress Affiliate API Approval:** Application submitted; awaiting final approval (ETA: 3 to 5 business days).
*   **Temu Affiliate Links:** Awaiting manual input of explicit affiliate URLs to replace generic buttons.

## 🔵 3. Next Steps (Phase 3: Automation – UPCOMING)

Once the AliExpress API is granted, the project will pivot to programmatic deal distribution.

1.  **Ingestion:** Build scripts (or an n8n workflow) to query the AliExpress API for daily hot products that fit the Jamaican market profile.
2.  **Processing:** Programmatically filter for threshold discounts (e.g., >50%), high ratings, and high volume.
3.  **Distribution (Socials):** Automate posting deal snippets and links directly to Telegram and Twitter.
4.  **Distribution (Website):** Replace the currently hardcoded `App.jsx` deal data with a dynamic fetch from the database or API.

## 🔑 4. Access & Continuity Protocol

To ensure seamless handoffs and security, all project credentials follow a standardized protocol:

*   **Authentication Hub:** All third-party services (Vercel, Brevo, Socials, GitHub) are tied to a central Google Account. Single Sign-On (SSO) "Login with Google" should be used wherever possible.
*   **Fallback Passwords:** Any service that requires a standalone password utilizes the standard project password generated during initialization.

> **API Key Storage:** Never commit API keys (like the Brevo SMTP/API key or future AliExpress credentials) directly into the codebase. Always inject them via Vercel Environment Settings.
