import moment from "moment";
export class Food {
  constructor(public id: number, public name: string,  public details: string, public calories: number, public date: string, public time: string) {
    this.date = moment(date).format("MMMM Do YYYY");
    this.time = moment(time).format(" h:mm a");

  }
}
