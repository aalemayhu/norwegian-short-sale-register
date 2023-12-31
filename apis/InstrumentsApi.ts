// tslint:disable
/**
 * API for the Short Sale Register
 *   This API delivers information about public shorting of instruments that have Finanstilsynet as relevant competent authority (RCA).    ## Notice about historical data  We only deliver information about shortings that were active within the past two years.  
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: ssr@finanstilsynet.no
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI } from '../runtime';
import type { OperationOpts, HttpQuery } from '../runtime';
import type {
    InstrumentShortingHistory,
} from '../models';

export interface InstrumentsExportPublicShortingHistoryCsvRequest {
    separator?: string;
    locale?: string;
}

/**
 * no description
 */
export class InstrumentsApi extends BaseAPI {

    /**
     *   Returns a csv file which lists all publically shorted instruments with their public shorting history.    The file contains one row per instrument, per day there is a change in the public shorting of that instrument.    Each row contains the isin, issuer name, date and aggregated (total) short percentage and number of shares for the instrument on the given day.    By default, the fields are separated by the `;` character, and encoded with locale `nb-NO`.  This can be changed using the `separator` and `locale` parameters.    The `locale` parameter only supports .NET Framework culture names as specified in the [.NET Framework documentation][dotnet-culture-names].    [dotnet-culture-names]: https://docs.microsoft.com/en-us/dotnet/api/system.globalization.cultureinfo?view=netframework-4.7.2#culture-names-and-identifiers  
     * Download public shorting history as csv
     */
    instrumentsExportPublicShortingHistoryCsv({ separator, locale }: InstrumentsExportPublicShortingHistoryCsvRequest): Observable<Blob>
    instrumentsExportPublicShortingHistoryCsv({ separator, locale }: InstrumentsExportPublicShortingHistoryCsvRequest, opts?: OperationOpts): Observable<AjaxResponse<Blob>>
    instrumentsExportPublicShortingHistoryCsv({ separator, locale }: InstrumentsExportPublicShortingHistoryCsvRequest, opts?: OperationOpts): Observable<Blob | AjaxResponse<Blob>> {

        const query: HttpQuery = {};

        if (separator != null) { query['separator'] = separator; }
        if (locale != null) { query['locale'] = locale; }

        return this.request<Blob>({
            url: '/api/v2/instruments/export-csv',
            method: 'GET',
            query,
            responseType: 'blob',
        }, opts?.responseOpts);
    };

    /**
     *   Returns a json file which lists all publically shorted instruments with their public shorting history.  The format is the same as in [Get public shorting history](#operation/Instruments_GetPublicShortingHistory).  The only difference is that this endpoint sends headers that lets browsers treat it as a file download.
     * Download public shorting history as json
     */
    instrumentsExportPublicShortingHistoryJson(): Observable<Array<InstrumentShortingHistory>>
    instrumentsExportPublicShortingHistoryJson(opts?: OperationOpts): Observable<AjaxResponse<Array<InstrumentShortingHistory>>>
    instrumentsExportPublicShortingHistoryJson(opts?: OperationOpts): Observable<Array<InstrumentShortingHistory> | AjaxResponse<Array<InstrumentShortingHistory>>> {
        return this.request<Array<InstrumentShortingHistory>>({
            url: '/api/v2/instruments/export-json',
            method: 'GET',
        }, opts?.responseOpts);
    };

    /**
     *   Returns a list of all publically shorted instruments with their public shorting history.
     * Get public shorting history
     */
    instrumentsGetPublicShortingHistory(): Observable<Array<InstrumentShortingHistory>>
    instrumentsGetPublicShortingHistory(opts?: OperationOpts): Observable<AjaxResponse<Array<InstrumentShortingHistory>>>
    instrumentsGetPublicShortingHistory(opts?: OperationOpts): Observable<Array<InstrumentShortingHistory> | AjaxResponse<Array<InstrumentShortingHistory>>> {
        return this.request<Array<InstrumentShortingHistory>>({
            url: '/api/v2/instruments',
            method: 'GET',
        }, opts?.responseOpts);
    };

}
