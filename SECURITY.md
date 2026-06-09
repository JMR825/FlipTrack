# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | ✅ Yes             |

## Reporting a Vulnerability

We take the security of FlipTrack seriously. If you discover a security vulnerability, please report it responsibly.

### How to Report

**⚠️ Please DO NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email us at: **rushikeshbobade2025@gmail.com**

Include the following in your report:

1. **Description** of the vulnerability
2. **Steps to reproduce** the issue
3. **Potential impact** (what could an attacker do?)
4. **Suggested fix** (if you have one)

### What to Expect

| Step | Timeline |
| :--- | :--- |
| **Acknowledgement** | Within 48 hours |
| **Initial Assessment** | Within 1 week |
| **Fix & Disclosure** | Coordinated with reporter |

### Scope

The following are in scope for security reports:

- Authentication bypass or session hijacking
- SQL injection or database exposure
- Cross-Site Scripting (XSS)
- Sensitive data exposure (API keys, user data)
- Server-Side Request Forgery (SSRF)
- Authorization flaws (accessing other users' data)

### Out of Scope

- Vulnerabilities in dependencies that are already publicly known (please check if a fix exists first)
- Issues that require physical access to a user's device
- Social engineering attacks

## Security Best Practices for Contributors

When contributing code, please ensure:

- **Never hardcode secrets** — Use environment variables via `.env`
- **Validate all user input** — Especially in route `action()` handlers
- **Use Prisma parameterized queries** — Never concatenate raw SQL strings
- **Check authorization** — Always verify `userId` ownership in database queries
- **Keep dependencies updated** — Run `npm audit` periodically

Thank you for helping keep FlipTrack secure! 🔒
