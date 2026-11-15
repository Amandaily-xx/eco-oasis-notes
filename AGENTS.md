# Architecture

- Keep author statistics and degree information in `src/data/authorProfile.ts` and reuse them across pages and metadata so biography updates stay consistent.
- Derive the income/substitution enrichment diagram from the tested Hicks model in `src/data/incomeSubstitution.ts`; shared coordinates keep budget tangencies and effect intervals mathematically consistent.