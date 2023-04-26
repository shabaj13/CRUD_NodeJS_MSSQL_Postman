var config = require("./config");
const sql = require("mssql");

const getEvents = async() => {
  try {
    let pool = await sql.connect(config);
    let eventmanage = await pool.request().query("SELECT * from events")
    return eventmanage.recordsets;
    
  } catch (error) {
    console.log(error);
  }
}
const getEvent = async (eventId) => {
  try {
    let pool = await sql.connect(config);
    let eventmanage = await pool.request()
      .input('input_parameter',sql.Int, eventId)
      .query("SELECT * from events where eventId = @input_parameter")
    return eventmanage.recordsets;
    
  } catch (error) {
    console.log(error);
  }
}

const addEvent = async (event) => {
  try {
    let pool = await sql.connect(config);
    let InsertEvent = await pool.request()
      .input("eventId", sql.Int, event.eventId)
      .input("eventTitle", sql.NVarChar, event.eventTitle)
      .input("eventDescription", sql.NVarChar, event.eventDescription)
      .input("startDate", sql.Date, event.startDate)
      .input("endDate", sql.Date, event.endDate)
      .input("revenue", sql.Int, event.revenue)
      .input("maxMembers", sql.Int, event.maxMembers)
      .execute('InsertEvents');
    
    return InsertEvent.recordsets;
    
  } catch (error) {
    console.log(error);
  }
}

const updateEvent = async (event) => {
  try {
    let pool = await sql.connect(config);
    let UpdateEvent = await pool.request()
      .input("eventId", sql.Int, event.eventId)
      .input("eventTitle", sql.NVarChar, event.eventTitle)
      .input("eventDescription", sql.NVarChar, event.eventDescription)
      .input("startDate", sql.Date, event.startDate)
      .input("endDate", sql.Date, event.endDate)
      .input("revenue", sql.Int, event.revenue)
      .input("maxMembers", sql.Int, event.maxMembers)
      .execute('UpdateEvents');
    
    return UpdateEvent.recordsets;
    
  } catch (error) {
    console.log(error);
  }
}
const deleteEvent = async (eventId) => {
  try {
    let pool = await sql.connect(config);
    let DeleteEvent = await pool.request()
      .input('input_parameter',sql.Int, eventId)
      .query("DELETE from events where eventId = @input_parameter")
    return DeleteEvent.recordsets;
    
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getEvents,
  getEvent,
  addEvent,
  updateEvent,
  deleteEvent

}