/* eslint-disable @typescript-eslint/no-explicit-any */
import { Query, DataManager, Predicate } from '@syncfusion/ej2-data';
/**
 * data module is used to generate query and data source.
 *
 * @private
 */
var Data = /** @class */ (function () {
    /**
     * Constructor for data module
     *
     * @param {Schedule} parent Accepts the schedule element instance
     * @param {Object | DataManager} dataSource Accepts the datasource as JSON objects or DataManager
     * @param {Query} query Accepts the query to process the data
     * @private
     */
    function Data(parent, dataSource, query) {
        this.parent = parent;
        this.initDataManager(dataSource, query);
    }
    /**
     * The function used to initialize dataManager and query
     *
     * @param {Object | DataManager} dataSource Accepts the datasource as JSON objects or DataManager
     * @param {Query} query Accepts the query to process the data
     * @returns {void}
     * @private
     */
    Data.prototype.initDataManager = function (dataSource, query) {
        this.dataManager = dataSource instanceof DataManager ? dataSource : new DataManager(dataSource);
        this.query = query instanceof Query ? query : new Query();
    };
    /**
     * The function used to generate updated Query from schedule model
     *
     * @param {Date} startDate Accepts the start date
     * @param {Date} endDate Accepts the end date
     * @returns {void}
     * @private
     */
    Data.prototype.generateQuery = function (startDate, endDate) {
        var query = this.query.clone();
        if (this.parent && this.parent.eventSettings.includeFiltersInQuery && startDate && endDate) {
            var dateQuery = this.getStartEndQuery(startDate, endDate);
            var recurrenceQuery = new Predicate(this.parent.eventFields.recurrenceRule, 'notequal', null).and(new Predicate(this.parent.eventFields.recurrenceRule, 'notequal', ''));
            return query.where(dateQuery.or(recurrenceQuery));
        }
        if (startDate) {
            query.addParams('StartDate', startDate.toISOString());
        }
        if (endDate) {
            query.addParams('EndDate', endDate.toISOString());
        }
        return query;
    };
    /**
     * The function used to generate updated Query from schedule model
     *
     * @param {Date} startDate Accepts the start date
     * @param {Date} endDate Accepts the end date
     * @returns {void}
     * @private
     */
    Data.prototype.getStartEndQuery = function (startDate, endDate) {
        var fieldMapping = this.parent.eventFields;
        var dateQuery = new Predicate(fieldMapping.startTime, 'greaterthanorequal', startDate)
            .and(new Predicate(fieldMapping.endTime, 'greaterthanorequal', startDate))
            .and(new Predicate(fieldMapping.startTime, 'lessthan', endDate))
            .or(new Predicate(fieldMapping.startTime, 'lessthanorequal', startDate)
            .and(new Predicate(fieldMapping.endTime, 'greaterthan', startDate)));
        return dateQuery;
    };
    /**
     * The function used to get dataSource by executing given Query
     *
     * @param  {Query} query - A Query that specifies to generate dataSource
     * @returns {void}
     * @private
     */
    Data.prototype.getData = function (query) {
        return this.dataManager.executeQuery(query);
    };
    /**
     * To destroy the crud module.
     *
     * @returns {void}
     * @private
     */
    Data.prototype.destroy = function () {
        this.dataManager = null;
        this.query = null;
    };
    return Data;
}());
export { Data };
