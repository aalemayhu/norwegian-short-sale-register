# 📉 Norwegian Short Sale Register

This is a RxJS TypeScript client to access the short sale register provided by the financial supervisory authority of Norway
https://ssr.finanstilsynet.no/

## Disclaimer

This project is created using their publicly available API definitition and must not be mistaken for
official support from them. This project is a hobby project to make convienient access this data
programmatically. Use it at your own risk.

https://ssr.finanstilsynet.no/api/v2/

## Examples

For a complete example look in the [./examples](./examples/) folder.

### CSV Example

```typescript
import { InstrumentsApi } from 'norwegian-short-sale-register';
import { firstValueFrom } from 'rxjs';

const api = new InstrumentsApi();
const getPublicShortingHistoryCSV =
  api.instrumentsExportPublicShortingHistoryCsv({ separator: '|' });

try {
  const value = await firstValueFrom(getPublicShortingHistoryCSV);
  console.log(value);
  console.info('done');
} catch (error) {
  console.error(error);
}
```

#### CSV response

```
ISIN|Name|Date|ShortPercent|Shares
BMG9156K1018|2020 BULKERS|16.10.2023|0,68|156475
BMG9156K1018|2020 BULKERS|13.10.2023|0,7|159912
BMG9156K1018|2020 BULKERS|03.10.2023|0,6|136821
BMG9156K1018|2020 BULKERS|19.09.2023|0,51|116875
BMG9156K1018|2020 BULKERS|05.07.2023|0|0
BMG9156K1018|2020 BULKERS|14.06.2023|0,5|113714
BMG9156K1018|2020 BULKERS|02.06.2023|0|0
BMG9156K1018|2020 BULKERS|31.05.2023|0,57|130616
BMG9156K1018|2020 BULKERS|23.05.2023|0,69|156390
BMG9156K1018|2020 BULKERS|25.04.2023|0,78|177487
BMG9156K1018|2020 BULKERS|11.04.2023|0,89|203121
BMG9156K1018|2020 BULKERS|31.03.2023|0,91|206595
BMG9156K1018|2020 BULKERS|24.03.2023|0,8|182254
BMG9156K1018|2020 BULKERS|17.03.2023|0,79|179494
BMG9156K1018|2020 BULKERS|15.03.2023|0,87|195077
BMG9156K1018|2020 BULKERS|10.03.2023|1,46|326318
BMG9156K1018|2020 BULKERS|09.03.2023|1,49|332426
BMG9156K1018|2020 BULKERS|08.03.2023|1,48|329727
BMG9156K1018|2020 BULKERS|07.03.2023|1,57|351615
BMG9156K1018|2020 BULKERS|03.03.2023|1,67|373638
BMG9156K1018|2020 BULKERS|02.03.2023|1,78|396750
BMG9156K1018|2020 BULKERS|01.03.2023|1,79|398469
BMG9156K1018|2020 BULKERS|28.02.2023|1,78|396558
BMG9156K1018|2020 BULKERS|23.02.2023|1,86|415096
[...] omitted
```

### JSON Example

```typescript
import { InstrumentsApi } from 'norwegian-short-sale-register';
import { firstValueFrom } from 'rxjs';

const api = new InstrumentsApi();
const getShortingHistory = api.instrumentsGetPublicShortingHistory();

try {
  const value = await firstValueFrom(getShortingHistory);
  console.log(value);
} catch (error) {
  console.error(error);
}
```

#### JSON Response

```
Output:
[
  {
    isin: 'BMG9156K1018',
    issuerName: '2020 BULKERS',
    events: [
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      ... 43 more items
    ]
    // omitted
  },
```

## Troubleshooting?

If you are running in Node.js you might want to define `XMLHttpRequest`:

```typescript
import * as xhr from 'xhr2';

/**
 * This is a workaround to avoid a reference error when running in Node.
 * Fixes ReferenceError: XMLHttpRequest is not defined
 */
export const ensureXMLHttpRequestIsDefined = () => {
  if (typeof XMLHttpRequest === 'undefined') {
    global.XMLHttpRequest = xhr;
  }
};

```

## Why create this?

I want to learn RxJS for use in Angular web development. So I needed something I can play around with.

## License

Unless otherwise specified in the source:

The code is licensed under the MIT Copyright (c) 2023, Alexander Alemayhu
