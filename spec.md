# LPG India - Awareness Portal

## Current State
New project. No existing application files.

## Requested Changes (Diff)

### Add
- Full informational website about LPG issues faced by Indians
- Hero section with headline and CTAs (LPG Price Tracker, Subsidy Schemes)
- LPG Price Tracker section showing current cylinder prices for major cities (Delhi, Mumbai, Chennai, Kolkata) - stored in backend
- Key Issues section: Rising Prices, Subsidy Cuts, Safety Concerns, Availability
- Latest News / Updates feed - stored in backend
- Safety Guidelines section with a checklist
- Government Schemes section (PMUY - Pradhan Mantri Ujjwala Yojana, etc.)
- Submit a Complaint section with links to official channels
- Footer with quick links, schemes, support columns

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Backend: Store LPG prices per city, news/updates items, and government schemes data
2. Backend: Expose query functions to fetch prices, news, and schemes
3. Frontend: Build full multi-section page matching design preview aesthetic (dark navy header/hero, orange accents, white content sections)
4. Frontend: Wire price data from backend into the city price tracker cards
5. Frontend: Wire news feed from backend
6. Frontend: Wire schemes data from backend
7. Frontend: Static safety guidelines section
8. Frontend: Complaint section with links to official portals (IVRS 1800-233-3555, pgportal.gov.in)
