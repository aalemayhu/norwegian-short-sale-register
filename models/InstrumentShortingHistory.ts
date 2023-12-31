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

import type {
    AggregatedShortEvent,
} from './';

/**
 * Describes the shorting history of an instrument.
 * @export
 * @interface InstrumentShortingHistory
 */
export interface InstrumentShortingHistory {
    /**
     * International Securities Identification Number for this instrument
     * @type {string}
     * @memberof InstrumentShortingHistory
     */
    isin?: string;
    /**
     * The name of the instrument issuer
     * @type {string}
     * @memberof InstrumentShortingHistory
     */
    issuerName?: string;
    /**
     * List of short events for this instrument. Together they represent the shorting history of the instrument. See [AggregatedShortEvent](#section/AggregatedShortEvent)
     * @type {Array<AggregatedShortEvent>}
     * @memberof InstrumentShortingHistory
     */
    events?: Array<AggregatedShortEvent>;
}
