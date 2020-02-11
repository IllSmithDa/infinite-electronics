import React, {Component} from 'react';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import './Desktoppage.scss';

export default class Desktoppage extends Component {
  constructor() {
    super();
    this.state = {
      currentYear: 1920,
      currentMonth: 'January',
      startingMonth: 'January',
      startingYear: 1920, 
      currentDate: 17,
      daysOfMonth: 31,
      monthMapVal: 0,
      weekDayStart: 0,
      monthMap: new Map([
                  [0, 'January'],
                  [1, 'February'],
                  [2, 'March'],
                  [3, 'April'],
                  [4, 'May'],
                  [5, 'June'],
                  [6, 'July'],
                  [7, 'August'],
                  [8, 'September'],
                  [9, 'October'],
                  [10, 'November'],
                  [11, 'December']
                ])
    } 
  }
  componentDidMount() {
    //get current date values
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    /* create calendar variables by finding the first day of month */
    let startCalDate = new Date(currentYear, currentMonth, 1);
    let weekDayStart = startCalDate.getDay();

    /* find last day of month by setting date one month ahead and using setDate(0) to then set date back to last day of current month */
    let endDate = new Date(startCalDate.setDate(32));
    endDate = new Date(endDate.setDate(0));
    /* gets the current date which is last day of month representing number of days in this month */
    let numberOfDays = endDate.getDate();
    
    /* retrieve the map from the state */
    const {monthMap} = this.state;
    const getMonth = monthMap.get(currentMonth)
    this.setState({
      daysOfMonth: numberOfDays, 
      currentMonth: getMonth,
      currentYear, 
      weekDayStart, 
      currentDate: currentDay, 
      startingMonth: getMonth, 
      monthMapVal: currentMonth,
      startingYear:currentYear,
      
      });

  }
  goNextMonth = () => {
    const { currentYear, monthMap, monthMapVal} = this.state;
    let nextMonthVal = monthMapVal + 1;
    let nextYear = currentYear;
    if (nextMonthVal > 11) {
      nextMonthVal = 0;
      nextYear += 1;
    }
    let startCalDate = new Date(nextYear, nextMonthVal, 1);
    let weekDayStart = startCalDate.getDay();
    /* find last day of month by setting date one month ahead and using setDate(0) to then set date back to last day of current month */
    let endDate = new Date(startCalDate.setDate(32));
    endDate = new Date(endDate.setDate(0));
    /* gets the current date which is last day of month representing number of days in this month */
    let numberOfDays = endDate.getDate();
    this.setState({daysOfMonth: numberOfDays, currentMonth: monthMap.get(nextMonthVal), currentYear:nextYear, weekDayStart, monthMapVal:nextMonthVal});
    this.createCalendar();
  }
  goLastMonth = () => {
    const { currentYear, monthMap, monthMapVal} = this.state;
    let nextMonthVal = monthMapVal - 1;
    let nextYear = currentYear;
    if (nextMonthVal < 1) {
      nextMonthVal = 11;
      nextYear -= 1;
    }
    let startCalDate = new Date(nextYear, nextMonthVal, 1);
    let weekDayStart = startCalDate.getDay();
    /* find last day of month by setting date one month ahead and using setDate(0) to then set date back to last day of current month */
    let endDate = new Date(startCalDate.setDate(32));
    endDate = new Date(endDate.setDate(0));
    /* gets the current date which is last day of month representing number of days in this month */
    let numberOfDays = endDate.getDate();
    this.setState({daysOfMonth: numberOfDays, currentMonth: monthMap.get(nextMonthVal), currentYear:nextYear, weekDayStart, monthMapVal:nextMonthVal});
    this.createCalendar();
  }
  createCalendar = () => {
    const {daysOfMonth, weekDayStart, currentDate , currentMonth, startingMonth, currentYear, startingYear} = this.state;
    let startCalCount = 0;
    console.log(weekDayStart);
    const daysOfWeek = [];
    for (let i = 1; i <= daysOfMonth; i++) {
      if (startCalCount < weekDayStart) {
        daysOfWeek.push(
          <span></span>
        )
        i = 0;
        startCalCount += 1;
      } else if (i === currentDate && currentMonth === startingMonth && currentYear === startingYear) {
        daysOfWeek.push(
          <span className='current-date'>{i}</span>
        )
      } else {
        daysOfWeek.push(
          <span>{i}</span>
        )
      }
    }
    return daysOfWeek;
  }
  render() {
    const {currentMonth, currentYear} = this.state
    return(
      <div>
        <HeaderNavBar />
        <div className='desktop-container'>
          <div className='calendar-container'>
            <div>
              <span className='arrow-button' onClick={this.goLastMonth}>&#60;</span>
            </div>
            <div className="calendar-item">
              <h1>{currentMonth} {currentYear}</h1>
              <div>
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                {this.createCalendar()}
              </div>
            </div>
            <div>
              <span className='arrow-button' onClick={this.goNextMonth}>&#62;</span>
            </div>
          </div>
          <div className='change-date-container'>
            <h1>Change Date</h1>
            <span>
              Month: <input />
            </span>
            <span>
              Day: <input />
            </span>
            <span>
              Year: <input />
            </span>
            <span>Submit</span>
          </div>
        </div>
      </div>
    );
  }
}