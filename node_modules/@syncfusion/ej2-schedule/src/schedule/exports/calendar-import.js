/* eslint-disable @typescript-eslint/no-explicit-any */
import { isNullOrUndefined, extend } from '@syncfusion/ej2-base';
import { getRecurrenceStringFromDate } from '../../recurrence-editor/date-generator';
/**
 * ICalendar Import Module
 */
var ICalendarImport = /** @class */ (function () {
    function ICalendarImport(parent) {
        this.allDay = false;
        this.parent = parent;
    }
    ICalendarImport.prototype.initializeCalendarImport = function (fileContent) {
        var _this = this;
        if (fileContent && fileContent instanceof Blob) {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function () {
                var iCalString = fileReader_1.result;
                _this.iCalendarParser(iCalString);
            };
            fileReader_1.readAsText(fileContent, 'UTF-8');
        }
        else if (fileContent && typeof fileContent === 'string') {
            this.iCalendarParser(fileContent);
        }
    };
    ICalendarImport.prototype.iCalendarParser = function (iCalString) {
        var _this = this;
        var fields = this.parent.eventFields;
        var events = [];
        var uId = 'UID';
        var calArray = iCalString.replace(new RegExp('\\r', 'g'), '').split('\n');
        var isEvent = false;
        var curEvent;
        // eslint-disable-next-line prefer-const
        var id = this.parent.eventBase.getEventMaxID();
        var count = 0;
        calArray.forEach(function (element) {
            var index;
            var type;
            var value;
            if (!isEvent && element === 'BEGIN:VEVENT') {
                isEvent = true;
                curEvent = {};
            }
            if (isEvent && element === 'END:VEVENT') {
                isEvent = false;
                events.push(curEvent);
                curEvent = null;
            }
            if (isEvent) {
                index = element.indexOf(':');
                type = element.substr(0, index).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                value = element.substr(index + 1, element.length - (index + 1)).replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                if (element.indexOf('SUMMARY') !== -1) {
                    type = 'SUMMARY';
                }
                if (element.indexOf('DTSTART') !== -1) {
                    curEvent[fields.startTime] = _this.dateParsing(element);
                    curEvent[fields.isAllDay] = _this.allDay;
                    _this.allDay = false;
                }
                else if (element.indexOf('DTEND') !== -1) {
                    curEvent[fields.endTime] = _this.dateParsing(element);
                }
                else if (element.indexOf('EXDATE') !== -1) {
                    value = getRecurrenceStringFromDate(_this.dateParsing(element));
                    curEvent[fields.recurrenceException] = (isNullOrUndefined(curEvent[fields.recurrenceException])) ?
                        value : curEvent[fields.recurrenceException] + ',' + value;
                }
                else if (element.indexOf('RECURRENCE-ID') !== -1) {
                    value = getRecurrenceStringFromDate(_this.dateParsing(element));
                    curEvent[fields.recurrenceException] = value;
                    curEvent[fields.recurrenceID] = value;
                }
                else {
                    switch (type) {
                        case 'BEGIN':
                            break;
                        case 'UID':
                            curEvent["" + uId] = value;
                            if (typeof (id) == 'number') {
                                curEvent[fields.id] = parseInt(value, 10);
                                if (isNaN(curEvent[fields.id])) {
                                    curEvent[fields.id] = id + count;
                                    count++;
                                }
                            }
                            else {
                                curEvent[fields.id] = value;
                            }
                            break;
                        case 'SUMMARY':
                            curEvent[fields.subject] = value;
                            break;
                        case 'LOCATION':
                            curEvent[fields.location] = value;
                            break;
                        case 'DESCRIPTION':
                            curEvent[fields.description] = value;
                            break;
                        case 'ISREADONLY':
                            curEvent[fields.isReadonly] = (value.indexOf('true') > -1);
                            break;
                        case 'RRULE':
                            curEvent[fields.recurrenceRule] = value;
                            break;
                        default:
                            if (_this.parent.resourceCollection.length > 0) {
                                var resData = _this.parent.resourceCollection.filter(function (data) { return data.field === type; });
                                curEvent["" + type] = (resData.length > 0 && (typeof (resData[0].dataSource[0][resData[0].idField]) == 'number')) ? parseInt(value, 10) : value;
                            }
                            else {
                                curEvent["" + type] = value;
                            }
                    }
                }
            }
        });
        var app = extend([], events, null, true);
        this.parent.addEvent(this.processOccurrence(app, id));
    };
    ICalendarImport.prototype.processOccurrence = function (app, maxId) {
        var _this = this;
        var appoint = [];
        var uId = 'UID';
        var fields = this.parent.eventFields;
        var appointmentIds = [];
        this.parent.eventsData.forEach(function (eventObj) {
            appointmentIds.push(eventObj[fields.id]);
        });
        app.forEach(function (eventObj) {
            var parentObj;
            var id;
            // eslint-disable-next-line no-prototype-builtins
            if (!eventObj.hasOwnProperty(fields.recurrenceID)) {
                parentObj = eventObj;
                id = eventObj[fields.id];
            }
            if (appointmentIds.indexOf(eventObj[fields.id]) < 0) {
                var data = app.filter(function (data) { return data.UID === eventObj["" + uId]; });
                if (data.length > 1 && isNullOrUndefined(eventObj[fields.recurrenceID])) {
                    id = typeof (maxId) === 'number' ? maxId++ : id;
                    for (var i = 0; i < data.length; i++) {
                        // eslint-disable-next-line no-prototype-builtins
                        if (data[parseInt(i.toString(), 10)].hasOwnProperty(fields.recurrenceID)) {
                            var exdate = data[parseInt(i.toString(), 10)][fields.recurrenceID];
                            data[parseInt(i.toString(), 10)][fields.id] = typeof (maxId) === 'number' ? maxId++ : _this.parent.eventBase.generateGuid();
                            data[parseInt(i.toString(), 10)][fields.recurrenceID] = id;
                            data[parseInt(i.toString(), 10)][fields.recurrenceException] = null;
                            parentObj[fields.recurrenceException] =
                                _this.getExcludeDateString(parentObj[fields.recurrenceException], exdate);
                            delete data[parseInt(i.toString(), 10)]["" + uId];
                            appoint.push(data[parseInt(i.toString(), 10)]);
                        }
                    }
                    delete parentObj["" + uId];
                    parentObj[fields.id] = id;
                    appoint.push(parentObj);
                    // eslint-disable-next-line no-prototype-builtins
                }
                else if (!eventObj.hasOwnProperty(fields.recurrenceID)) {
                    delete eventObj["" + uId];
                    eventObj[fields.id] = typeof (maxId) === 'number' ? maxId++ : id;
                    appoint.push(eventObj);
                }
            }
        });
        return appoint;
    };
    ICalendarImport.prototype.getExcludeDateString = function (parentException, occurrenceException) {
        if (isNullOrUndefined(parentException)) {
            return occurrenceException;
        }
        else if (isNullOrUndefined(occurrenceException)) {
            return parentException;
        }
        var parentExDate = parentException.split(',').map(function (x) { return x.split('T')[0]; });
        var childExDate = occurrenceException.split(',').map(function (x) { return x.split('T')[0]; });
        var exDate = parentExDate.filter(function (x) { return childExDate.indexOf(x) > -1; });
        if (exDate.length > 0) {
            return parentException;
        }
        return parentException + ',' + occurrenceException;
    };
    ICalendarImport.prototype.getDateString = function (value) {
        value = value || '';
        // eslint-disable-next-line no-useless-escape
        return (value.replace(/\\\,/g, ',').replace(/\\\;/g, ';').replace(/\\[nN]/g, '\n').replace(/\\\\/g, '\\'));
    };
    ICalendarImport.prototype.dateParsing = function (element) {
        var split = element.split(':');
        var value = split[split.length - 1];
        var newDate = new Date(this.getDateString(value));
        if (element && (element.indexOf('VALUE=DATE') > -1 || element.indexOf('RECURRENCE-ID;TZID') > -1)) {
            var data_1 = /^(\d{4})(\d{2})(\d{2})$/.exec(value);
            if (data_1 !== null) {
                newDate = new Date(parseInt(data_1[1], 10), parseInt(data_1[2], 10) - 1, parseInt(data_1[3], 10));
            }
            if (element.indexOf('DTSTART') > -1) {
                this.allDay = true;
            }
        }
        var data = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?$/.exec(value);
        if (data !== null) {
            if (data[7] === 'Z') {
                newDate = new Date(Date.UTC(parseInt(data[1], 10), parseInt(data[2], 10) - 1, parseInt(data[3], 10), parseInt(data[4], 10), parseInt(data[5], 10), parseInt(data[6], 10)));
            }
            else {
                newDate = new Date(parseInt(data[1], 10), parseInt(data[2], 10) - 1, parseInt(data[3], 10), parseInt(data[4], 10), parseInt(data[5], 10), parseInt(data[6], 10));
            }
        }
        return newDate;
    };
    ICalendarImport.prototype.getModuleName = function () {
        return 'iCalendarImport';
    };
    ICalendarImport.prototype.destroy = function () {
        if (!this.parent || this.parent && this.parent.isDestroyed) {
            return;
        }
    };
    return ICalendarImport;
}());
export { ICalendarImport };
