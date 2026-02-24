# JD Home Mentorship Site

## Integrated Worksheet + Calculator

The live calculator page now renders **worksheet first** and **calculator second**.

- Page: `calculator.html`
- Worksheet section id: `#worksheetCard`
- Mapping is implemented via `WS_TO_CALC_MAP` in the calculator script.

### Data mapping (worksheet -> calculator)

| Worksheet field | Calculator field |
|---|---|
| `wsPurchase` | `purchase` |
| `wsArv` | `arv` |
| `wsRehab` | `rehabFlat` |
| `wsSqft` | `sqft` |
| `wsHoldMonths` | `holdMonths` |
| `wsInterestPct` | `interestPct` |
| `wsContingencyPct` | `contingencyPct` |

Mirrored output:
- Calculator `oProfit` -> worksheet `wsProjectedProfit`

### How to add future worksheet fields

1. Add the worksheet input in `calculator.html` (worksheet section).
2. Add corresponding calculator input if needed.
3. Add pair to `WS_TO_CALC_MAP`.
4. Verify both sync directions by triggering input events.
5. Update `tests/worksheet-calculator.integration.test.js` with new assertions.

### Rollback steps

If a deployment needs rollback:

```bash
git log --oneline -n 10
# choose previous good commit
git revert <bad_commit_sha>
# or hard reset branch if needed (with caution)
# git reset --hard <good_commit_sha>
git push origin main
```
