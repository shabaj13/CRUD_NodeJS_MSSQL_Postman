class Event{
  constructor(eventId, eventTitle, eventDescription, startDate, endDate, revenue, maxMembers) {
    this.eventId = eventId;
    this.eventTitle = eventTitle;
    this.eventDescription = eventDescription;
    this.startDate = startDate;
    this.endDate = endDate;
    this.revenue = revenue;
    this.maxMembers = maxMembers;
  }
}
module.exports = Event;