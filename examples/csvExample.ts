import { ensureXMLHttpRequestIsDefined } from './ensureXMLHttpRequestIsDefined';
import { InstrumentsApi } from '../index';
import { firstValueFrom } from 'rxjs';

ensureXMLHttpRequestIsDefined();

const main = async () => {
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
};

main();
