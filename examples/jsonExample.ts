import { ensureXMLHttpRequestIsDefined } from './ensureXMLHttpRequestIsDefined'; // Needs to be before the below usage
import { InstrumentsApi } from '../index';
import { firstValueFrom } from 'rxjs';

ensureXMLHttpRequestIsDefined();

async function main() {
  const api = new InstrumentsApi();
  const getShortingHistory = api.instrumentsGetPublicShortingHistory();

  try {
    const value = await firstValueFrom(getShortingHistory);
    console.log(value);
  } catch (error) {
    console.error(error);
  }
}

main();
